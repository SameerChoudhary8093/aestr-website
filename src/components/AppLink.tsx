"use client";

import NextLink from "next/link";
import { withBasePath } from "@/lib/site";
import type { ComponentProps } from "react";

type AppLinkProps = ComponentProps<typeof NextLink>;

/**
 * Drop-in replacement for next/link that automatically
 * prefixes the href with the deployment base path (if any).
 *
 * Use this instead of importing Link from "next/link" directly.
 */
export default function AppLink({ href, ...props }: AppLinkProps) {
  let prefixedHref: AppLinkProps["href"];

  if (typeof href === "string") {
    prefixedHref = withBasePath(href);
  } else if (typeof href === "object" && href.pathname) {
    prefixedHref = { ...href, pathname: withBasePath(href.pathname) };
  } else {
    prefixedHref = href;
  }

  return <NextLink href={prefixedHref} {...props} />;
}
