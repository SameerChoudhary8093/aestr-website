"use client";

import { withBasePath } from "@/lib/site";

export default function myImageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith("data:") || src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  return withBasePath(src);
}
