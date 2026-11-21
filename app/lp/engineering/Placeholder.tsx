// Unverified copy is marked in the source with <Placeholder> or <Verify>.
// These stay off on the public page, including local preview. Set this to true
// only while reviewing the list in ./PLACEHOLDERS.md.
// Every placeholder is listed in ./PLACEHOLDERS.md.

export const SHOW_PLACEHOLDERS = false;

const TAG =
  "inline rounded bg-yellow-200 px-1 py-0.5 font-mono text-[13px] font-medium leading-snug text-yellow-950 ring-1 ring-yellow-500";

/** `[PLACEHOLDER: …]` in dev; `fallback` (default: nothing) in production. */
export function Placeholder({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  if (!SHOW_PLACEHOLDERS) return <>{fallback}</>;
  return <mark className={TAG}>[PLACEHOLDER: {children}]</mark>;
}

/** `[VERIFY: …]` in dev; nothing in production. The copy next to it stays. */
export function Verify({ children }: { children: React.ReactNode }) {
  if (!SHOW_PLACEHOLDERS) return null;
  return <mark className={TAG}>[VERIFY: {children}]</mark>;
}

/** Wraps a whole block that only exists until real content is supplied. */
export function DevOnly({ children }: { children: React.ReactNode }) {
  if (!SHOW_PLACEHOLDERS) return null;
  return <>{children}</>;
}
