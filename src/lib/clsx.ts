type ClassValue = string | number | null | undefined | false;

export function clsx(...values: ClassValue[]) {
  return values.filter(Boolean).join(" ");
}
