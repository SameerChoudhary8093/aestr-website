export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aestr.gyanvihar.org";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function absoluteUrl(path: string = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${BASE_PATH}${normalizedPath === "/" ? "" : normalizedPath}`;
}
