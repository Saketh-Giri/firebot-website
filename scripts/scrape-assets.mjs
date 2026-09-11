import { mkdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";

const ORIGIN = "https://www.fremontrobotics.com";
const OUT_DIR = path.join(process.cwd(), "public", "images");
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";
const CONCURRENCY = 5;

const MAX_BYTES = 2_500_000;

const PAGES = [
  "/",
  "/history",
  "/organizational-structure",
  "/frc",
  "/ftc",
  "/business-and-marketing",
  "/leads",
  "/mentors",
  "/fll-mentorship",
  "/previous-events",
  "/calendar",
  "/newsletters",
  "/team-gallery",
  "/community-impact",
  "/torchbearing-tutors",
  "/kindling-kits",
  "/marblecoaster",
  "/airplane-launcher",
  "/cardboard-chords",
  "/sponsor-us",
  "/contact",
  "/join-the-team",
];

const SHARED = new Map([
  ["2b10e4_6b1700bd158e4689abfedd5ea4a78646~mv2.png", "logo"],
  ["2b10e4_23bdfbd810eb4501a1122b1327e99778~mv2.png", "firebot-icon"],
  ["2b10e4_8184f1a8338846f1bcc2947a8f2599f8~mv2.png", "firebot-mark"],
]);

const MEDIA_ID = "([0-9a-z]+_[0-9a-f]{32}~mv2|[0-9a-f]{32}~mv2|[0-9a-f]{32})";
const EXT = "(png|jpe?g|webp|gif)";

const slugFor = (page) => (page === "/" ? "home" : page.replace(/^\//, ""));

function slugify(name) {
  return name
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/_edited(_edited)*/gi, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
    .slice(0, 48);
}

function extractMedia(html) {
  const found = new Map();

  const withName = new RegExp(
    `media/${MEDIA_ID}\\.${EXT}/v1/[^"'\\s]*?/([^"'\\s/]+\\.${EXT})`,
    "gi",
  );
  const bare = new RegExp(`media/${MEDIA_ID}\\.${EXT}`, "gi");

  for (const [re, hasName] of [
    [withName, true],
    [bare, false],
  ]) {
    let m;
    while ((m = re.exec(html))) {
      const file = `${m[1]}.${m[2].toLowerCase()}`;
      if (found.has(file)) continue;
      const rawName = hasName ? decodeURIComponent(m[3]) : file;

      const name = rawName.startsWith(m[1]) ? m[1].slice(-8) : rawName;
      found.set(file, { file, ext: m[2].toLowerCase(), name, position: m.index });
    }
  }

  return [...found.values()].sort((a, b) => a.position - b.position);
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { "user-agent": UA } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

async function fetchBuffer(url) {
  const res = await fetch(url, { headers: { "user-agent": UA, referer: ORIGIN } });
  if (!res.ok) throw new Error(String(res.status));
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 512) throw new Error("suspiciously small payload");
  return buf;
}

async function mapWithConcurrency(items, limit, worker) {
  const results = [];
  let cursor = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (cursor < items.length) {
        const index = cursor++;
        results[index] = await worker(items[index], index);
      }
    }),
  );
  return results;
}

async function main() {
  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(path.join(OUT_DIR, "shared"), { recursive: true });

  const manifest = {};
  const cache = new Map();
  let downloaded = 0;
  let resized = 0;
  let failed = 0;

  for (const page of PAGES) {
    const slug = slugFor(page);
    let html;
    try {
      html = await fetchText(ORIGIN + page);
    } catch (err) {
      console.warn(`! could not fetch ${page}: ${err.message}`);
      manifest[slug] = [];
      continue;
    }

    const media = extractMedia(html);
    await mkdir(path.join(OUT_DIR, slug), { recursive: true });

    const entries = await mapWithConcurrency(media, CONCURRENCY, async (item, index) => {
      const { file, ext, name } = item;
      const remote = `https://static.wixstatic.com/media/${file}`;

      if (cache.has(file)) {
        return { index, name, localPath: cache.get(file), originalUrl: remote };
      }

      const isShared = SHARED.has(file);
      const dir = isShared ? "shared" : slug;
      const basename = isShared
        ? `${SHARED.get(file)}.${ext}`
        : `${String(index).padStart(2, "0")}-${slugify(name) || "image"}.${ext}`;
      const localPath = `/images/${dir}/${basename}`;
      const dest = path.join(OUT_DIR, dir, basename);

      try {
        let buf = await fetchBuffer(remote);
        if (buf.length > MAX_BYTES) {
          try {
            buf = await fetchBuffer(`${remote}/v1/fit/w_2000,h_2000,q_88,enc_auto/${file}`);
            resized++;
          } catch {

          }
        }
        await writeFile(dest, buf);
        cache.set(file, localPath);
        downloaded++;
        return { index, name, localPath, originalUrl: remote, bytes: buf.length };
      } catch (err) {
        failed++;
        console.warn(`  ! ${file} (${name}): ${err.message}`);
        return null;
      }
    });

    manifest[slug] = entries.filter(Boolean);
    console.log(`${slug.padEnd(26)} ${manifest[slug].length}/${media.length}`);
  }

  await writeFile(path.join(OUT_DIR, "assets.json"), JSON.stringify(manifest, null, 2) + "\n");
  console.log(`\ndownloaded ${downloaded} (${resized} resized), failed ${failed}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
