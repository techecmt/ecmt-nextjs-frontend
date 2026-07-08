import "server-only";

import type { NewsEvent } from "./events";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.SUPABASE_SECRET_KEY ??
  process.env.SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

type EventPostRow = {
  id: string;
  title: string;
  description: string | null;
  event_date: string | null;
  location: string | null;
  created_at: string;
};

type EventPhotoRow = {
  post_id: string;
  url: string;
  display_order: number;
  created_at: string;
};

function supabaseHeaders() {
  return {
    apikey: SUPABASE_KEY as string,
    Authorization: `Bearer ${SUPABASE_KEY as string}`,
    "Content-Type": "application/json",
  };
}

async function supabaseRest<T>(path: string): Promise<T> {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error("Supabase is not configured for newsroom.");
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: supabaseHeaders(),
    // Keep newsroom fairly fresh without forcing full dynamic rendering.
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Supabase request failed: ${response.status} ${text}`);
  }

  if (response.status === 204) return [] as T;

  const raw = await response.text();
  if (!raw || raw.trim() === "") return [] as T;
  return JSON.parse(raw) as T;
}

function toDateString(eventDate: string | null, createdAt: string) {
  return eventDate ?? createdAt.slice(0, 10);
}

function toEventId(title: string, date: string, fallbackId: string) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const compactDate = date.replace(/-/g, "");
  return slug ? `${slug}-${compactDate}` : fallbackId;
}

export async function getNewsroomEvents(): Promise<NewsEvent[]> {
  try {
    const posts = await supabaseRest<EventPostRow[]>(
      [
        "event_posts",
        "?select=id,title,description,event_date,location,created_at",
        "&status=eq.published",
        "&type=eq.event",
        "&order=event_date.desc.nullslast,created_at.desc",
      ].join(""),
    );

    if (posts.length === 0) return [];

    const photos = await supabaseRest<EventPhotoRow[]>(
      [
        "event_post_photos",
        "?select=post_id,url,display_order,created_at",
        "&order=display_order.asc.nullslast,created_at.asc",
      ].join(""),
    );

    const photosByPostId = new Map<string, string[]>();
    for (const photo of photos) {
      if (!photo.url) continue;
      const existing = photosByPostId.get(photo.post_id) ?? [];
      existing.push(photo.url);
      photosByPostId.set(photo.post_id, existing);
    }

    return posts.map((post) => {
      const date = toDateString(post.event_date, post.created_at);
      return {
        id: toEventId(post.title, date, post.id),
        title: post.title,
        description: post.description ?? undefined,
        date,
        location: post.location ?? undefined,
        images: photosByPostId.get(post.id) ?? [],
      } satisfies NewsEvent;
    });
  } catch (error) {
    console.error("Failed to fetch newsroom events from Supabase:", error);
    return [];
  }
}
