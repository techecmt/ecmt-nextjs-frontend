"use client";

import { useEffect, useRef, useState } from "react";

type Heading = { id: string; text: string };

const HEADER_OFFSET = 96; // clears the fixed site header when jumping to a section

function slugify(text: string) {
  return (
    text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .slice(0, 60) || "section"
  );
}

/**
 * Mobile-first in-article navigation for long blog posts.
 * - Builds an "On this page" list by scanning the enclosing <article> for <h2>s.
 * - Collapsed by default on phones (saves vertical space), always open on >= sm.
 * - Smooth-scrolls with an offset so the fixed header never hides the target.
 * - Shows a slim reading-progress bar for a sense of how much is left.
 * Renders no navigation when the article has fewer than 3 headings.
 */
export default function ArticleToc() {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const article = anchorRef.current?.closest("article");
    if (!article) return;

    const nodes = Array.from(article.querySelectorAll("h2"));
    const used = new Set<string>();
    const list: Heading[] = [];

    nodes.forEach((node) => {
      const text = (node.textContent || "").trim();
      if (!text) return;
      const base = node.id || slugify(text);
      let id = base;
      let n = 2;
      while (used.has(id)) id = `${base}-${n++}`;
      used.add(id);
      node.id = id;
      (node as HTMLElement).style.scrollMarginTop = `${HEADER_OFFSET}px`;
      list.push({ id, text });
    });

    setHeadings(list);

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId((entry.target as HTMLElement).id);
        });
      },
      { rootMargin: "-100px 0px -72% 0px", threshold: 0 }
    );
    nodes.forEach((node) => spy.observe(node));

    const onScroll = () => {
      const rect = article.getBoundingClientRect();
      const absTop = rect.top + window.scrollY;
      const end = absTop + article.offsetHeight - window.innerHeight;
      const span = end - absTop;
      const p = span > 0 ? (window.scrollY - absTop) / span : 0;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      spy.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const jumpTo = (id: string | null) => (e: React.MouseEvent) => {
    e.preventDefault();
    const y = id
      ? (document.getElementById(id)?.getBoundingClientRect().top ?? 0) +
        window.scrollY -
        HEADER_OFFSET
      : 0;
    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div ref={anchorRef} className="not-prose">
      {/* Reading progress */}
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[60] h-1 bg-gray-100"
      >
        <div
          className="h-full bg-[#1AB69D] transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {headings.length >= 3 && (
        <nav
          aria-label="On this page"
          className="rounded-2xl border border-gray-200 bg-gray-50"
        >
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left sm:cursor-default"
          >
            <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gray-900">
              <svg
                className="h-4 w-4 text-[#1AB69D]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h10M4 18h7"
                />
              </svg>
              On this page
            </span>
            <svg
              className={`h-5 w-5 text-gray-500 transition-transform sm:hidden ${
                open ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <ul
            className={`${
              open ? "block" : "hidden sm:block"
            } border-t border-gray-200 px-2 py-2`}
          >
            {headings.map((h) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  onClick={jumpTo(h.id)}
                  className={`block rounded-lg px-3 py-2.5 text-sm leading-snug transition-colors ${
                    activeId === h.id
                      ? "bg-[#1AB69D]/10 font-semibold text-[#1AB69D]"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {h.text}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                onClick={jumpTo(null)}
                className="mt-1 flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
                Back to top
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
