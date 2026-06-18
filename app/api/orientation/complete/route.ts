import { NextResponse } from "next/server";
import {
  completeOrientationSession,
  orientationConfigured,
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
    const result = await completeOrientationSession({
      sessionId,
      activeSeconds: toInt(body.activeSeconds),
      maxPage: toInt(body.maxPage, 1),
      totalPages:
        body.totalPages == null ? null : toInt(body.totalPages, 1) || null,
      reachedLastPage: Boolean(body.reachedLastPage),
    });

    if (!result) {
      return NextResponse.json({ error: "Session not found." }, { status: 404 });
    }

    if (!result.is_completed) {
      return NextResponse.json(
        {
          ok: false,
          ...result,
          error:
            "Reading requirements not met yet. Please reach the last page and spend the minimum time.",
        },
        { status: 409 },
      );
    }

    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    console.error("orientation complete error:", error);
    return NextResponse.json(
      { error: "Could not confirm completion." },
      { status: 500 },
    );
  }
}
