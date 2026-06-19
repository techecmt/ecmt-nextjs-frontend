import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import {
  ORIENTATION_DOCUMENT_KEY,
  ORIENTATION_REQUIRED_SECONDS,
  createOrientationSession,
  orientationConfigured,
} from "@/lib/orientation";

export async function POST(request: Request) {
  if (!orientationConfigured()) {
    return NextResponse.json(
      { error: "Tracking is not configured on the server." },
      { status: 503 },
    );
  }

  let body: {
    studentName?: string;
    course?: string;
    courseStartDate?: string;
    nricLast4?: string;
    totalPages?: number;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const studentName = String(body.studentName ?? "").trim();
  const course = String(body.course ?? "").trim();
  const courseStartDate = String(body.courseStartDate ?? "").trim();
  const nricLast4 = String(body.nricLast4 ?? "")
    .trim()
    .toUpperCase();
  const totalPages =
    typeof body.totalPages === "number" && Number.isFinite(body.totalPages)
      ? Math.max(1, Math.round(body.totalPages))
      : null;

  if (studentName.length < 2) {
    return NextResponse.json(
      { error: "Please enter your full name." },
      { status: 400 },
    );
  }
  if (!course) {
    return NextResponse.json(
      { error: "Please select your course." },
      { status: 400 },
    );
  }
  if (!courseStartDate || Number.isNaN(Date.parse(courseStartDate))) {
    return NextResponse.json(
      { error: "Please select a valid course start date." },
      { status: 400 },
    );
  }
  if (!/^[A-Z0-9]{4}$/.test(nricLast4)) {
    return NextResponse.json(
      {
        error:
          "Please enter the last 4 characters of your NRIC / FIN / Passport No.",
      },
      { status: 400 },
    );
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ipAddress = forwardedFor?.split(",")[0]?.trim() || null;
  const userAgent = request.headers.get("user-agent");

  const sessionId = randomUUID();

  try {
    await createOrientationSession({
      id: sessionId,
      studentName,
      course,
      courseStartDate,
      nricLast4,
      totalPages,
      userAgent,
      ipAddress,
    });
  } catch (error) {
    console.error("orientation start error:", error);
    return NextResponse.json(
      { error: "Could not start the session. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    sessionId,
    requiredSeconds: ORIENTATION_REQUIRED_SECONDS,
    documentKey: ORIENTATION_DOCUMENT_KEY,
  });
}
