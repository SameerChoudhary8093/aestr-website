export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aestr.gyanvihar.org";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalizedPath}`;
}

export function absoluteUrl(path: string = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${BASE_PATH}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function isHomePath(pathname: string): boolean {
  if (pathname === "/" || pathname === "") {
    return true;
  }

  if (!BASE_PATH) {
    return false;
  }

  return pathname === BASE_PATH || pathname === `${BASE_PATH}/`;
}
