import type { Metadata } from "next";
import Link from "next/link";
import {
  fetchOrientationSessions,
  orientationConfigured,
  type OrientationSession,
} from "@/lib/orientation";

export const metadata: Metadata = {
  title: "Orientation Responses | Edusphere College",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type StatusFilter = "all" | "completed" | "started";

function formatDateTime(value: string | null) {
  if (!value) return "—";
  try {
    return new Date(value).toLocaleString("en-SG", {
      timeZone: "Asia/Singapore",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return value;
  }
}

function formatDuration(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  if (m <= 0) return `${s}s`;
  return `${m}m ${String(s).padStart(2, "0")}s`;
}

function PasscodeForm({ wrong }: { wrong?: boolean }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <form
        method="get"
        className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
      >
        <h1 className="text-lg font-bold text-gray-900">Orientation Responses</h1>
        <p className="mt-1 text-sm text-gray-500">
          Enter the admin passcode to view student responses.
        </p>
        <input
          type="password"
          name="key"
          required
          autoFocus
          className="mt-4 w-full rounded-lg border-2 border-gray-200 px-4 py-2.5 text-gray-800 outline-none focus:border-[#1AB69D] focus:ring-2 focus:ring-[#1AB69D]/20"
          placeholder="Passcode"
        />
        {wrong && (
          <p className="mt-2 text-sm text-[#EE4A62]">
            Incorrect passcode or no responses yet.
          </p>
        )}
        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-[#1AB69D] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#16917f]"
        >
          View responses
        </button>
      </form>
    </main>
  );
}

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent: string;
}) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="mt-1 text-3xl font-bold" style={{ color: accent }}>
        {value}
      </p>
    </div>
  );
}

export default async function OrientationResponsesPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string; status?: string }>;
}) {
  const { key, status } = await searchParams;
  const passcode = key ?? process.env.ORIENTATION_ADMIN_KEY ?? "";

  if (!orientationConfigured()) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md rounded-2xl border border-[#EE4A62]/30 bg-white p-6 text-center shadow-sm">
          <h1 className="text-lg font-bold text-gray-900">Not configured</h1>
          <p className="mt-2 text-sm text-gray-600">
            Set <code>NEXT_PUBLIC_SUPABASE_URL</code> and a Supabase key in the
            environment to view responses.
          </p>
        </div>
      </main>
    );
  }

  if (!passcode) {
    return <PasscodeForm />;
  }

  let sessions: OrientationSession[] = [];
  try {
    sessions = await fetchOrientationSessions(passcode);
  } catch (error) {
    console.error("Failed to load orientation responses:", error);
  }

  if (sessions.length === 0) {
    return <PasscodeForm wrong />;
  }

  const completed = sessions.filter((s) => s.is_completed);
  const started = sessions.filter((s) => !s.is_completed);

  const activeFilter: StatusFilter =
    status === "completed" || status === "started" ? status : "all";

  const visible =
    activeFilter === "completed"
      ? completed
      : activeFilter === "started"
        ? started
        : sessions;

  const keyQS = key ? `&key=${encodeURIComponent(key)}` : "";
  const filters: { id: StatusFilter; label: string; count: number }[] = [
    { id: "all", label: "All", count: sessions.length },
    { id: "completed", label: "Completed", count: completed.length },
    { id: "started", label: "Started, not finished", count: started.length },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Orientation Responses
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Student orientation reading completion tracker.
            </p>
          </div>
          <span className="text-sm text-gray-500">
            {sessions.length} total response{sessions.length === 1 ? "" : "s"}
          </span>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard label="Total responses" value={sessions.length} accent="#202020" />
          <StatCard label="Completed" value={completed.length} accent="#1AB69D" />
          <StatCard
            label="Started, not finished"
            value={started.length}
            accent="#EE4A62"
          />
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {filters.map((f) => (
            <Link
              key={f.id}
              href={`?status=${f.id}${keyQS}`}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                activeFilter === f.id
                  ? "bg-[#1AB69D] text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-[#1AB69D]/50"
              }`}
            >
              {f.label} ({f.count})
            </Link>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Course</th>
                  <th className="px-4 py-3 font-semibold">NRIC</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Pages</th>
                  <th className="px-4 py-3 font-semibold">Reading time</th>
                  <th className="px-4 py-3 font-semibold">Started</th>
                  <th className="px-4 py-3 font-semibold">Completed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {visible.map((s) => {
                  const pages = s.total_pages
                    ? `${s.max_page_reached}/${s.total_pages}`
                    : `${s.max_page_reached}`;
                  return (
                    <tr key={s.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {s.student_name}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{s.course}</td>
                      <td className="px-4 py-3 text-gray-600">
                        ••••{s.nric_last4}
                      </td>
                      <td className="px-4 py-3">
                        {s.is_completed ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1AB69D]/10 px-2.5 py-1 text-xs font-semibold text-[#1AB69D]">
                            Completed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EE4A62]/10 px-2.5 py-1 text-xs font-semibold text-[#EE4A62]">
                            {s.reached_last_page ? "Reached end" : "In progress"}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{pages}</td>
                      <td className="px-4 py-3 text-gray-600">
                        {formatDuration(s.active_seconds)}
                        <span className="text-gray-400">
                          {" "}
                          / {formatDuration(s.required_seconds)}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500">
                        {formatDateTime(s.started_at)}
                      </td>
                      <td className="px-4 py-3 text-gray-500">
                        {formatDateTime(s.completed_at)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
