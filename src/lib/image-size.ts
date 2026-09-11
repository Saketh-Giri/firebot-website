import { openSync, readSync, closeSync } from "node:fs";
import { join } from "node:path";

export interface ImageSize {
  width: number;
  height: number;
}

const cache = new Map<string, ImageSize | null>();

export function imageSize(publicPath: string): ImageSize | null {
  const hit = cache.get(publicPath);
  if (hit !== undefined) return hit;
  let result: ImageSize | null = null;
  try {
    result = readSize(join(process.cwd(), "public", publicPath));
  } catch {
    result = null;
  }
  cache.set(publicPath, result);
  return result;
}

function readSize(file: string): ImageSize | null {
  const fd = openSync(file, "r");
  try {
    const head = Buffer.alloc(64 * 1024);
    const n = readSync(fd, head, 0, head.length, 0);
    const buf = head.subarray(0, n);

    if (buf.length >= 24 && buf.readUInt32BE(0) === 0x89504e47) {
      return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
    }

    if (buf.length >= 10 && buf.toString("ascii", 0, 3) === "GIF") {
      return { width: buf.readUInt16LE(6), height: buf.readUInt16LE(8) };
    }

    if (buf.length >= 30 && buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
      const chunk = buf.toString("ascii", 12, 16);
      if (chunk === "VP8 ") {
        return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
      }
      if (chunk === "VP8L") {
        const b0 = buf[21], b1 = buf[22], b2 = buf[23], b3 = buf[24];
        return {
          width: 1 + (((b1 & 0x3f) << 8) | b0),
          height: 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6)),
        };
      }
      if (chunk === "VP8X") {
        return {
          width: 1 + buf.readUIntLE(24, 3),
          height: 1 + buf.readUIntLE(27, 3),
        };
      }
      return null;
    }

    if (buf.length >= 4 && buf[0] === 0xff && buf[1] === 0xd8) {
      let offset = 2;
      let data = buf;
      while (offset + 9 < data.length) {
        if (data[offset] !== 0xff) {
          offset++;
          continue;
        }
        const marker = data[offset + 1];
        if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
          offset += 2;
          continue;
        }
        const length = data.readUInt16BE(offset + 2);
        const isSOF =
          marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
        if (isSOF) {
          return { height: data.readUInt16BE(offset + 5), width: data.readUInt16BE(offset + 7) };
        }
        offset += 2 + length;

        if (offset + 9 >= data.length && data.length === head.length) {
          const more = Buffer.alloc(256 * 1024);
          const m = readSync(fd, more, 0, more.length, data.length);
          if (m <= 0) break;
          data = Buffer.concat([data, more.subarray(0, m)]);
        }
      }
      return null;
    }
    return null;
  } finally {
    closeSync(fd);
  }
}
