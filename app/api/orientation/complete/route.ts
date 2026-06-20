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
    quizAnswers?: {
      attendanceRequired?: string;
      installmentDue?: string;
      passingMark?: string;
    };
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const sessionId = String(body.sessionId ?? "");
  const attendanceRequired = String(
    body.quizAnswers?.attendanceRequired ?? "",
  ).trim();
  const installmentDue = String(body.quizAnswers?.installmentDue ?? "").trim();
  const passingMark = String(body.quizAnswers?.passingMark ?? "").trim();

  if (!UUID_RE.test(sessionId)) {
    return NextResponse.json({ error: "Invalid session." }, { status: 400 });
  }
  if (!attendanceRequired || !installmentDue || !passingMark) {
    return NextResponse.json(
      { error: "Please answer all quiz questions before submitting." },
      { status: 400 },
    );
  }
  try {
    const result = await completeOrientationSession({
      sessionId,
      activeSeconds: toInt(body.activeSeconds),
      maxPage: toInt(body.maxPage, 1),
      totalPages:
        body.totalPages == null ? null : toInt(body.totalPages, 1) || null,
      reachedLastPage: Boolean(body.reachedLastPage),
      quizAnswers: {
        attendanceRequired,
        installmentDue,
        passingMark,
      },
    });

    if (!result) {
      return NextResponse.json({ error: "Session not found." }, { status: 404 });
    }

    if (!result.is_completed) {
      const quizFailed = !result.quiz_passed;
      return NextResponse.json(
        {
          ok: false,
          ...result,
          error: quizFailed
            ? "Some quiz answers are incorrect. Please choose the correct answers to continue."
            : "Reading requirements not met yet. Please reach the last page.",
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
