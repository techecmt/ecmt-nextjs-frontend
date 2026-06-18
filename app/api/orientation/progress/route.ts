import { NextResponse } from "next/server";
import {
  orientationConfigured,
  recordOrientationProgress,
} from "@/lib/orientation";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function toInt(value: unknown, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, Math.round(n)) : fallback;
}

export async function POST(request: Request) {
  if (!orientationConfigured()) {
    return NextResponse.json({ error: "Not configured." }, { status: 503 });
  }

  let body: {
    sessionId?: string;
    activeSeconds?: number;
    maxPage?: number;
    totalPages?: number;
    reachedLastPage?: boolean;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const sessionId = String(body.sessionId ?? "");
  if (!UUID_RE.test(sessionId)) {
    return NextResponse.json({ error: "Invalid session." }, { status: 400 });
  }

  try {
    const result = await recordOrientationProgress({
      sessionId,
      activeSeconds: toInt(body.activeSeconds),
      maxPage: toInt(body.maxPage, 1),
      totalPages:
        body.totalPages == null ? null : toInt(body.totalPages, 1) || null,
      reachedLastPage: Boolean(body.reachedLastPage),
    });
    return NextResponse.json({ ok: true, ...(result ?? {}) });
  } catch (error) {
    console.error("orientation progress error:", error);
    return NextResponse.json({ error: "Could not save progress." }, { status: 500 });
  }
}
