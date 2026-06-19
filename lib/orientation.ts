// Server-only helper for the student orientation reading tracker.
// Uses the same raw Supabase REST approach as app/api/forms/submit/route.ts
// (no @supabase/supabase-js dependency). Prefers the service-role key when
// present, otherwise falls back to the anon key (RLS + SECURITY DEFINER RPCs
// are set up so the anon key is sufficient for this feature).

export const ORIENTATION_DOCUMENT_KEY = "student-orientation";
export const ORIENTATION_PDF_PATH = "/student-orientation-updated.pdf";
// Minimum time (in seconds) a student must actively spend before the
// "I've read this" confirmation can be unlocked.
export const ORIENTATION_REQUIRED_SECONDS = 180;

const ORIENTATION_TABLE = "orientation_reading_sessions";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  process.env.SUPABASE_SECRET_KEY ??
  process.env.SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export type OrientationSession = {
  id: string;
  created_at: string;
  updated_at: string;
  document_key: string;
  student_name: string;
  course: string;
  course_start_date: string | null;
  nric_last4: string;
  total_pages: number | null;
  max_page_reached: number;
  reached_last_page: boolean;
  active_seconds: number;
  required_seconds: number;
  quiz_answers: Record<string, string>;
  quiz_score: number;
  quiz_passed: boolean;
  started_at: string;
  last_seen_at: string;
  completed_at: string | null;
  is_completed: boolean;
  user_agent: string | null;
  ip_address: string | null;
};

export function orientationConfigured() {
  return Boolean(SUPABASE_URL && SUPABASE_KEY);
}

function supabaseHeaders() {
  return {
    apikey: SUPABASE_KEY as string,
    Authorization: `Bearer ${SUPABASE_KEY as string}`,
    "Content-Type": "application/json",
  };
}

async function supabaseRest<T>(path: string, init?: RequestInit): Promise<T> {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and a Supabase key (service role or anon) in the environment.",
    );
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...init,
    headers: { ...supabaseHeaders(), ...(init?.headers ?? {}) },
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Supabase request failed: ${response.status} ${text}`);
  }

  if (response.status === 204) return null as T;
  const raw = await response.text();
  if (!raw || raw.trim() === "") return null as T;
  return JSON.parse(raw) as T;
}

export async function createOrientationSession(input: {
  id: string;
  studentName: string;
  course: string;
  courseStartDate: string;
  nricLast4: string;
  totalPages: number | null;
  userAgent: string | null;
  ipAddress: string | null;
}): Promise<void> {
  await supabaseRest<null>(`${ORIENTATION_TABLE}`, {
    method: "POST",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify([
      {
        id: input.id,
        document_key: ORIENTATION_DOCUMENT_KEY,
        student_name: input.studentName,
        course: input.course,
        course_start_date: input.courseStartDate,
        nric_last4: input.nricLast4,
        total_pages: input.totalPages,
        required_seconds: ORIENTATION_REQUIRED_SECONDS,
        user_agent: input.userAgent,
        ip_address: input.ipAddress,
      },
    ]),
  });
}

type ProgressRow = {
  active_seconds: number;
  max_page_reached: number;
  reached_last_page: boolean;
  required_seconds: number;
  is_completed: boolean;
};

export async function recordOrientationProgress(input: {
  sessionId: string;
  activeSeconds: number;
  maxPage: number;
  totalPages: number | null;
  reachedLastPage: boolean;
}): Promise<ProgressRow | null> {
  const rows = await supabaseRest<ProgressRow[]>("rpc/record_orientation_progress", {
    method: "POST",
    body: JSON.stringify({
      p_id: input.sessionId,
      p_active_seconds: input.activeSeconds,
      p_max_page: input.maxPage,
      p_total_pages: input.totalPages,
      p_reached_last_page: input.reachedLastPage,
    }),
  });
  return rows?.[0] ?? null;
}

type CompleteRow = {
  is_completed: boolean;
  completed_at: string | null;
  reached_last_page: boolean;
  active_seconds: number;
  required_seconds: number;
  quiz_score: number;
  quiz_passed: boolean;
};

export async function completeOrientationSession(input: {
  sessionId: string;
  activeSeconds: number;
  maxPage: number;
  totalPages: number | null;
  reachedLastPage: boolean;
  quizAnswers: {
    attendanceRequired: string;
    installmentDue: string;
    passingMark: string;
  };
}): Promise<CompleteRow | null> {
  const rows = await supabaseRest<CompleteRow[]>(
    "rpc/complete_orientation_with_quiz",
    {
    method: "POST",
    body: JSON.stringify({
      p_id: input.sessionId,
      p_active_seconds: input.activeSeconds,
      p_max_page: input.maxPage,
      p_total_pages: input.totalPages,
      p_reached_last_page: input.reachedLastPage,
      p_attendance_answer: input.quizAnswers.attendanceRequired,
      p_installment_answer: input.quizAnswers.installmentDue,
      p_passing_mark_answer: input.quizAnswers.passingMark,
    }),
    },
  );
  return rows?.[0] ?? null;
}

export async function fetchOrientationSessions(
  passcode: string,
): Promise<OrientationSession[]> {
  const rows = await supabaseRest<OrientationSession[]>(
    "rpc/get_orientation_sessions",
    {
      method: "POST",
      body: JSON.stringify({ p_passcode: passcode }),
    },
  );
  return rows ?? [];
}
