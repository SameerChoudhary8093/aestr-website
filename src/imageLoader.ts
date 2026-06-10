"use client";

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

  return src;
}
