import type { MetadataRoute } from "next";
import { readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const APP_DIR = join(process.cwd(), "app");
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.edusphere.edu.sg").replace(/\/+$/, "");
const PAGE_FILE_PATTERN = /^page\.(tsx|ts|jsx|js|mdx)$/;

function collectPageFiles(dir: string, pages: string[] = []): string[] {
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      collectPageFiles(fullPath, pages);
      continue;
    }

    if (entry.isFile() && PAGE_FILE_PATTERN.test(entry.name)) {
      pages.push(fullPath);
    }
  }

  return pages;
}

function normalizeRoute(route: string): string {
  if (route === "/") {
    return route;
  }

  // Keep sitemap URLs aligned with trailingSlash routing.
  return `${route.replace(/\/+$/, "")}/`;
}

function getPublicRouteFromPageFile(filePath: string): string | null {
  const relPath = relative(APP_DIR, filePath);
  const segments = relPath.split(sep).slice(0, -1);

  if (segments.length > 0 && segments[0] === "api") {
    return null;
  }

  if (segments.some((segment) => /^\[.*\]$/.test(segment))) {
    return null;
  }

  const routeSegments = segments.filter(
    (segment) => !/^\(.*\)$/.test(segment) && !segment.startsWith("@") && !segment.startsWith("_"),
  );

  if (routeSegments.length === 0) {
    return "/";
  }

  return normalizeRoute(`/${routeSegments.join("/")}`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entriesByUrl = collectPageFiles(APP_DIR).reduce<Map<string, MetadataRoute.Sitemap[number]>>((acc, filePath) => {
    const route = getPublicRouteFromPageFile(filePath);

    if (!route) {
      return acc;
    }

    acc.set(`${SITE_URL}${route}`, {
      url: `${SITE_URL}${route}`,
      lastModified: statSync(filePath).mtime,
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : 0.8,
    });

    return acc;
  }, new Map());

  const entries = Array.from(entriesByUrl.values());

  entries.sort((a, b) => a.url.localeCompare(b.url));

  return entries;
}
