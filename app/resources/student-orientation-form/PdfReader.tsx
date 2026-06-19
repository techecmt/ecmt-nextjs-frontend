"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type PdfReaderProps = {
  pdfUrl: string;
  sessionId: string;
  requiredSeconds: number;
  studentName: string;
  onCompleted?: () => void;
};

type LoadState = "loading" | "ready" | "error";

type QuizAnswers = {
  attendanceRequired: string;
  installmentDue: string;
  passingMark: string;
};

const QUIZ_DEFAULTS: QuizAnswers = {
  attendanceRequired: "",
  installmentDue: "",
  passingMark: "",
};

const QUIZ_CORRECT: QuizAnswers = {
  attendanceRequired: "75",
  installmentDue: "Before the 10th of every Month",
  passingMark: "50",
};

type QuizKey = keyof QuizAnswers;

const HEARTBEAT_MS = 10000;

function formatDuration(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  if (m <= 0) return `${s}s`;
  return `${m}m ${String(s).padStart(2, "0")}s`;
}

export default function PdfReader({
  pdfUrl,
  sessionId,
  requiredSeconds,
  studentName,
  onCompleted,
}: PdfReaderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [loadState, setLoadState] = useState<LoadState>("loading");
  const [loadError, setLoadError] = useState<string>("");
  const [numPages, setNumPages] = useState(0);
  const [maxPage, setMaxPage] = useState(1);
  const [reachedLastPage, setReachedLastPage] = useState(false);
  const [activeSeconds, setActiveSeconds] = useState(0);

  const [completing, setCompleting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [confirmError, setConfirmError] = useState("");
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>(QUIZ_DEFAULTS);
  const [quizError, setQuizError] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const activeSecondsRef = useRef(0);
  const maxPageRef = useRef(1);
  const reachedLastPageRef = useRef(false);
  const numPagesRef = useRef(0);
  const completedRef = useRef(false);

  const meetsTime = activeSeconds >= requiredSeconds;
  const canConfirm = reachedLastPage && meetsTime && !completed;

  const isCorrectAnswer = useCallback(
    (key: QuizKey, value: string) => value === QUIZ_CORRECT[key],
    [],
  );

  const isAnswerCorrect = useCallback(
    (key: QuizKey) => isCorrectAnswer(key, quizAnswers[key]),
    [isCorrectAnswer, quizAnswers],
  );

  const optionClassName = useCallback(
    (key: QuizKey, value: string) => {
      const selected = quizAnswers[key] === value;
      const correct = value === QUIZ_CORRECT[key];

      if (!attemptedSubmit) {
        return `flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-all duration-300 ${
          selected
            ? "border-[#1AB69D] bg-[#1AB69D]/10 text-gray-800 shadow-sm"
            : "border-gray-200 text-gray-700 hover:border-[#1AB69D]/40"
        }`;
      }

      if (selected && !correct) {
        return "flex items-center gap-2 rounded-lg border border-[#EE4A62] bg-[#EE4A62]/10 px-3 py-2 text-sm text-gray-800 shadow-sm animate-pulse";
      }

      if (correct) {
        return `flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-all duration-300 ${
          selected
            ? "border-[#1AB69D] bg-[#1AB69D]/15 text-gray-800 shadow-sm ring-2 ring-[#1AB69D]/35"
            : "border-[#1AB69D]/50 bg-[#1AB69D]/5 text-gray-700"
        }`;
      }

      return "flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600";
    },
    [attemptedSubmit, quizAnswers],
  );

  const buildProgressPayload = useCallback(
    () => ({
      sessionId,
      activeSeconds: activeSecondsRef.current,
      maxPage: maxPageRef.current,
      totalPages: numPagesRef.current || null,
      reachedLastPage: reachedLastPageRef.current,
    }),
    [sessionId],
  );

  const flushProgress = useCallback(
    async (useBeacon = false) => {
      const payload = buildProgressPayload();
      if (useBeacon && typeof navigator !== "undefined" && navigator.sendBeacon) {
        try {
          navigator.sendBeacon(
            "/api/orientation/progress/",
            new Blob([JSON.stringify(payload)], { type: "application/json" }),
          );
          return;
        } catch {
          // fall through to fetch
        }
      }
      try {
        await fetch("/api/orientation/progress/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        });
      } catch {
        // best-effort; heartbeat will retry
      }
    },
    [buildProgressPayload],
  );

  useEffect(() => {
    let cancelled = false;
    let observer: IntersectionObserver | null = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let pdfDoc: any = null;
    const rendered = new Set<number>();
    const rendering = new Set<number>();

    async function run() {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const pdfjs: any = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

        const loadingTask = pdfjs.getDocument({ url: pdfUrl });
        pdfDoc = await loadingTask.promise;
        if (cancelled) return;

        const total: number = pdfDoc.numPages;
        setNumPages(total);
        numPagesRef.current = total;

        const container = containerRef.current;
        if (!container) return;

        const firstPage = await pdfDoc.getPage(1);
        const baseViewport = firstPage.getViewport({ scale: 1 });
        const available = Math.min(container.clientWidth - 4, 900);
        const targetWidth = Math.max(280, available);
        const scale = targetWidth / baseViewport.width;
        const dpr = Math.min(
          typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1,
          2,
        );

        const renderPage = async (pageNumber: number) => {
          if (rendered.has(pageNumber) || rendering.has(pageNumber)) return;
          rendering.add(pageNumber);
          try {
            const holder = container.querySelector<HTMLElement>(
              `[data-page="${pageNumber}"]`,
            );
            if (!holder) return;
            const page = await pdfDoc.getPage(pageNumber);
            const viewport = page.getViewport({ scale });
            const canvas = document.createElement("canvas");
            canvas.width = Math.floor(viewport.width * dpr);
            canvas.height = Math.floor(viewport.height * dpr);
            canvas.style.width = "100%";
            canvas.style.height = "auto";
            canvas.style.display = "block";
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            await page.render({
              canvasContext: ctx,
              viewport,
              transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : undefined,
            }).promise;
            if (cancelled) return;
            const spinner = holder.querySelector("[data-spinner]");
            if (spinner) spinner.remove();
            holder.appendChild(canvas);
            rendered.add(pageNumber);
          } catch (err) {
            // Renders are aborted when the document is destroyed on unmount
            // (e.g. React Strict Mode's double-mount in dev), which rejects
            // with RenderingCancelledException. That's expected — ignore it
            // and only surface genuine render failures.
            const name = (err as { name?: string } | null)?.name;
            if (!cancelled && name !== "RenderingCancelledException") {
              console.error(`PDF render error (page ${pageNumber}):`, err);
            }
          } finally {
            rendering.delete(pageNumber);
          }
        };

        container.innerHTML = "";
        for (let i = 1; i <= total; i++) {
          const holder = document.createElement("div");
          holder.dataset.page = String(i);
          holder.style.position = "relative";
          holder.style.width = "100%";
          holder.style.aspectRatio = `${baseViewport.width} / ${baseViewport.height}`;
          holder.style.background = "#fff";
          holder.style.borderRadius = "8px";
          holder.style.overflow = "hidden";
          holder.style.boxShadow = "0 1px 3px rgba(0,0,0,0.08)";
          holder.style.marginBottom = "16px";

          const spinner = document.createElement("div");
          spinner.dataset.spinner = "true";
          spinner.style.position = "absolute";
          spinner.style.inset = "0";
          spinner.style.display = "flex";
          spinner.style.alignItems = "center";
          spinner.style.justifyContent = "center";
          spinner.style.color = "#9ca3af";
          spinner.style.fontSize = "13px";
          spinner.textContent = `Page ${i}`;
          holder.appendChild(spinner);
          container.appendChild(holder);
        }

        const sentinel = document.createElement("div");
        sentinel.dataset.sentinel = "true";
        sentinel.style.height = "8px";
        sentinel.style.width = "100%";
        container.appendChild(sentinel);

        observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              const el = entry.target as HTMLElement;
              if (el.dataset.sentinel) {
                if (entry.isIntersecting && !reachedLastPageRef.current) {
                  reachedLastPageRef.current = true;
                  setReachedLastPage(true);
                  void flushProgress();
                }
                continue;
              }
              const pageNumber = Number(el.dataset.page);
              if (!pageNumber) continue;
              if (entry.isIntersecting) {
                void renderPage(pageNumber);
                if (pageNumber + 1 <= total) void renderPage(pageNumber + 1);
                if (pageNumber > maxPageRef.current) {
                  maxPageRef.current = pageNumber;
                  setMaxPage(pageNumber);
                }
              }
            }
          },
          { root: null, rootMargin: "200px 0px", threshold: 0.01 },
        );

        container
          .querySelectorAll("[data-page]")
          .forEach((el) => observer?.observe(el));
        observer.observe(sentinel);

        setLoadState("ready");
        void renderPage(1);
        void flushProgress();
      } catch (err) {
        console.error("PDF load error:", err);
        if (!cancelled) {
          setLoadError("We could not load the document. Please refresh the page.");
          setLoadState("error");
        }
      }
    }

    void run();

    return () => {
      cancelled = true;
      observer?.disconnect();
      try {
        pdfDoc?.destroy?.();
      } catch {
        // ignore
      }
    };
  }, [flushProgress, pdfUrl]);

  useEffect(() => {
    if (loadState !== "ready" || completed) return;

    const tick = () => {
      const visible =
        typeof document !== "undefined" && document.visibilityState === "visible";
      const focused = typeof document !== "undefined" ? document.hasFocus() : true;
      if (visible && focused) {
        activeSecondsRef.current += 1;
        setActiveSeconds(activeSecondsRef.current);
      }
    };

    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [loadState, completed]);

  useEffect(() => {
    if (loadState !== "ready") return;

    const interval = window.setInterval(() => {
      if (!completedRef.current) void flushProgress();
    }, HEARTBEAT_MS);

    const onVisibility = () => {
      if (document.visibilityState === "hidden") void flushProgress(true);
    };
    const onPageHide = () => void flushProgress(true);

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", onPageHide);

    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", onPageHide);
    };
  }, [loadState, flushProgress]);

  const handleFinalSubmit = async () => {
    if (!canConfirm || completing) return;
    setAttemptedSubmit(true);
    const wrongKeys: QuizKey[] = (Object.keys(QUIZ_CORRECT) as QuizKey[]).filter(
      (key) => !isAnswerCorrect(key),
    );

    if (wrongKeys.length > 0) {
      setQuizError(
        "Please choose the correct answers in highlighted questions. Hints are shown below each question.",
      );
      return;
    }

    setQuizError("");
    setConfirmError("");
    setCompleting(true);
    try {
      const res = await fetch("/api/orientation/complete/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...buildProgressPayload(),
          quizAnswers,
        }),
      });
      const data = await res.json();
      if (res.ok && data.is_completed) {
        completedRef.current = true;
        setCompleted(true);
        setShowQuizModal(false);
        onCompleted?.();
      } else {
        setConfirmError(
          data.error || "Could not confirm. Please review the quiz and try again.",
        );
      }
    } catch {
      setConfirmError("Network error. Please try again.");
    } finally {
      setCompleting(false);
    }
  };

  const timePct = Math.min(100, Math.round((activeSeconds / requiredSeconds) * 100));
  const remainingTime = Math.max(0, requiredSeconds - activeSeconds);

  return (
    <div className="w-full">
      <div className="sticky top-0 z-20 mb-4 border border-gray-200 bg-white/95 px-3 py-3 shadow-sm backdrop-blur sm:px-4 md:rounded-xl md:px-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm">
          <span className="font-semibold text-gray-900">
            {numPages > 0 ? `Page ${maxPage} of ${numPages}` : "Loading…"}
          </span>
          <span className="flex items-center gap-1.5 text-gray-600">
            <span
              className={`inline-block h-2.5 w-2.5 rounded-full ${
                reachedLastPage ? "bg-[#1AB69D]" : "bg-gray-300"
              }`}
            />
            {reachedLastPage ? "Reached last page" : "Scroll to the last page"}
          </span>
          <span className="flex items-center gap-1.5 text-gray-600">
            <span
              className={`inline-block h-2.5 w-2.5 rounded-full ${
                meetsTime ? "bg-[#1AB69D]" : "bg-gray-300"
              }`}
            />
            {meetsTime
              ? "Minimum reading time met"
              : `Time left: ${formatDuration(remainingTime)}`}
          </span>
        </div>
        {!completed && (
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-[#1AB69D] transition-all duration-500"
              style={{ width: `${timePct}%` }}
            />
          </div>
        )}
      </div>

      {loadState === "error" && (
        <div className="rounded-xl border border-[#EE4A62]/30 bg-[#EE4A62]/5 p-6 text-center text-[#EE4A62]">
          {loadError}
        </div>
      )}

      {loadState === "loading" && (
        <div className="flex h-40 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500">
          Loading document…
        </div>
      )}

      <div
        ref={containerRef}
        className="mx-auto w-full max-w-[900px]"
        aria-label="Orientation document"
      />

      <div className="mx-auto mt-5 w-full max-w-[900px] rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
        {!completed && (
          <p className="text-xs text-gray-500 sm:text-sm">
            Please complete both checks before submitting:
            <span className="font-medium text-gray-700"> reach the last page</span> and
            <span className="font-medium text-gray-700">
              {" "}
              spend at least {formatDuration(requiredSeconds)}
            </span>
            .
          </p>
        )}

        <button
          type="button"
          onClick={() => {
            if (!canConfirm || completing) return;
            setShowQuizModal(true);
            setAttemptedSubmit(false);
            setQuizError("");
            setConfirmError("");
          }}
          disabled={!canConfirm || completing || completed}
          className={`mt-3 w-full rounded-lg px-5 py-3 text-sm font-semibold transition-all sm:text-base ${
            completed
              ? "bg-[#1AB69D] text-white"
              : canConfirm
                ? "bg-[#1AB69D] text-white hover:bg-[#16917f] active:scale-[0.99]"
                : "cursor-not-allowed bg-gray-200 text-gray-500"
          }`}
        >
          {completed ? "Confirmed" : "I've read this document"}
        </button>

        {confirmError && <p className="mt-2 text-sm text-[#EE4A62]">{confirmError}</p>}
        {completed && (
          <p className="mt-2 text-sm text-[#1AB69D]">
            Thank you, {studentName.split(" ")[0] || "there"} — your confirmation has
            been recorded.
          </p>
        )}
      </div>

      {showQuizModal && (
        <div className="fixed inset-0 z-40 flex items-end justify-center bg-black/45 p-0 sm:items-center sm:p-4">
          <div className="max-h-[92vh] w-full overflow-y-auto rounded-t-2xl bg-white p-4 shadow-xl sm:max-w-2xl sm:rounded-2xl sm:p-6">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                Final Confirmation Quiz
              </h3>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Please answer all three questions correctly before you can submit.
              </p>
            </div>

            <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800 sm:text-sm">
              <span
                className="mr-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-amber-200 text-[10px] font-bold text-amber-900"
                title="Tip: Wrong answers are highlighted in red. Correct options glow in green."
              >
                i
              </span>
              Select the correct option for each question. If you choose a wrong
              answer, we will show you the correct one.
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  1. What is the minimum attendance required?
                </p>
                <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {["30", "50", "75"].map((value) => (
                    <label
                      key={value}
                      className={optionClassName("attendanceRequired", value)}
                    >
                      <input
                        type="radio"
                        name="attendanceRequired"
                        checked={quizAnswers.attendanceRequired === value}
                        onChange={() => {
                          setQuizError("");
                          setConfirmError("");
                          setQuizAnswers((prev) => ({
                            ...prev,
                            attendanceRequired: value,
                          }));
                        }}
                      />
                      {value}
                    </label>
                  ))}
                </div>
                {attemptedSubmit && !isAnswerCorrect("attendanceRequired") && (
                  <p className="mt-2 text-xs font-medium text-[#EE4A62] sm:text-sm">
                    Correct answer: <span className="font-bold">75</span>
                  </p>
                )}
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  2. When should a student pay the course fee installment?
                </p>
                <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {[
                    "Before the 10th of every Month",
                    "After the Exam",
                  ].map((value) => (
                    <label
                      key={value}
                      className={optionClassName("installmentDue", value)}
                    >
                      <input
                        type="radio"
                        name="installmentDue"
                        checked={quizAnswers.installmentDue === value}
                        onChange={() => {
                          setQuizError("");
                          setConfirmError("");
                          setQuizAnswers((prev) => ({
                            ...prev,
                            installmentDue: value,
                          }));
                        }}
                      />
                      {value}
                    </label>
                  ))}
                </div>
                {attemptedSubmit && !isAnswerCorrect("installmentDue") && (
                  <p className="mt-2 text-xs font-medium text-[#EE4A62] sm:text-sm">
                    Correct answer:{" "}
                    <span className="font-bold">
                      Before the 10th of every Month
                    </span>
                  </p>
                )}
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  3. Minimum passing mark in examination
                </p>
                <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {["50", "75", "100"].map((value) => (
                    <label
                      key={value}
                      className={optionClassName("passingMark", value)}
                    >
                      <input
                        type="radio"
                        name="passingMark"
                        checked={quizAnswers.passingMark === value}
                        onChange={() => {
                          setQuizError("");
                          setConfirmError("");
                          setQuizAnswers((prev) => ({
                            ...prev,
                            passingMark: value,
                          }));
                        }}
                      />
                      {value}
                    </label>
                  ))}
                </div>
                {attemptedSubmit && !isAnswerCorrect("passingMark") && (
                  <p className="mt-2 text-xs font-medium text-[#EE4A62] sm:text-sm">
                    Correct answer: <span className="font-bold">50</span>
                  </p>
                )}
              </div>
            </div>

            {quizError && <p className="mt-4 text-sm text-[#EE4A62]">{quizError}</p>}
            {confirmError && (
              <p className="mt-2 text-sm text-[#EE4A62]">{confirmError}</p>
            )}

            <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => {
                  if (completing) return;
                  setShowQuizModal(false);
                }}
                className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleFinalSubmit}
                disabled={completing}
                className="rounded-lg bg-[#1AB69D] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#16917f] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {completing ? "Submitting..." : "Submit & Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
