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

  // Mutable refs mirror the latest values for use inside intervals / observers
  // and for the unload beacon (avoids stale closures).
  const activeSecondsRef = useRef(0);
  const maxPageRef = useRef(1);
  const reachedLastPageRef = useRef(false);
  const numPagesRef = useRef(0);
  const completedRef = useRef(false);

  const meetsTime = activeSeconds >= requiredSeconds;
  const canConfirm = reachedLastPage && meetsTime && !completed;

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
        // best-effort; the next heartbeat will retry
      }
    },
    [buildProgressPayload],
  );

  // Load + render the PDF (lazily, page by page).
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
        const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);
        const aspect = baseViewport.height / baseViewport.width;

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
          } finally {
            rendering.delete(pageNumber);
          }
        };

        // Create placeholders with the correct aspect ratio.
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

        // Bottom sentinel — only intersects once the student scrolls past the
        // very end of the document.
        const sentinel = document.createElement("div");
        sentinel.dataset.sentinel = "true";
        sentinel.style.height = "8px";
        sentinel.style.width = "100%";
        container.appendChild(sentinel);

        void aspect; // aspect captured for clarity; layout uses aspectRatio above

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
                // Pre-render the next page for smoother scrolling.
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdfUrl]);

  // Active-time counter — only advances while the tab is visible and focused.
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

  // Periodic heartbeat + flush on tab hide / unload.
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

  const handleConfirm = async () => {
    if (!canConfirm || completing) return;
    setCompleting(true);
    setConfirmError("");
    try {
      const res = await fetch("/api/orientation/complete/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildProgressPayload()),
      });
      const data = await res.json();
      if (res.ok && data.is_completed) {
        completedRef.current = true;
        setCompleted(true);
        onCompleted?.();
      } else {
        setConfirmError(
          data.error || "Could not confirm. Please make sure you've read the full document.",
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
      {/* Sticky progress / status bar */}
      <div className="sticky top-0 z-20 -mx-4 mb-4 border-b border-gray-200 bg-white/95 px-4 py-3 backdrop-blur md:mx-0 md:rounded-xl md:border md:px-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <span className="font-semibold text-gray-900">
              {numPages > 0 ? `Page ${maxPage} of ${numPages}` : "Loading…"}
            </span>
            <span className="flex items-center gap-1.5 text-gray-600">
              <span
                className={`inline-block h-2.5 w-2.5 rounded-full ${
                  reachedLastPage ? "bg-[#1AB69D]" : "bg-gray-300"
                }`}
              />
              {reachedLastPage ? "Reached the last page" : "Scroll to the last page"}
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

          <button
            type="button"
            onClick={handleConfirm}
            disabled={!canConfirm || completing}
            className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
              completed
                ? "bg-[#1AB69D] text-white"
                : canConfirm
                  ? "bg-[#1AB69D] text-white hover:bg-[#16917f] active:scale-95"
                  : "cursor-not-allowed bg-gray-200 text-gray-500"
            }`}
            aria-disabled={!canConfirm || completing}
          >
            {completed ? (
              <>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42l2.79 2.79 6.79-6.79a1 1 0 011.42 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Confirmed
              </>
            ) : completing ? (
              "Saving…"
            ) : (
              "I've read this document"
            )}
          </button>
        </div>

        {/* Time progress bar */}
        {!completed && (
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-[#1AB69D] transition-all duration-500"
              style={{ width: `${timePct}%` }}
            />
          </div>
        )}

        {confirmError && (
          <p className="mt-2 text-sm text-[#EE4A62]">{confirmError}</p>
        )}
        {completed && (
          <p className="mt-2 text-sm text-[#1AB69D]">
            Thank you, {studentName.split(" ")[0] || "there"} — your confirmation has been
            recorded.
          </p>
        )}
      </div>

      {!completed && !canConfirm && loadState === "ready" && (
        <p className="mb-3 text-center text-xs text-gray-500">
          The confirmation button unlocks once you reach the last page and spend at least{" "}
          {formatDuration(requiredSeconds)} reading.
        </p>
      )}

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

      {/* PDF pages get injected here */}
      <div
        ref={containerRef}
        className="mx-auto w-full max-w-[900px]"
        aria-label="Orientation document"
      />
    </div>
  );
}
