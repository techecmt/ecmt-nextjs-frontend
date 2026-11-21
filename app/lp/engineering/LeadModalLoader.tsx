"use client";

import * as React from "react";
import type { IntakeLabels } from "./campaign";
import { onOpenLeadForm, type OpenFormDetail } from "./events";

type LeadModalModule = typeof import("./LeadModal");

const loadModal = () => import("./LeadModal");

/**
 * Keeps the lead form (the page's largest client bundle) out of the initial
 * JS. It is fetched when the browser is idle after load, or on the first
 * "open form" click, whichever comes first.
 */
export default function LeadModalLoader({ intakes }: { intakes: IntakeLabels }) {
  const [mod, setMod] = React.useState<LeadModalModule | null>(null);
  const [pending, setPending] = React.useState<OpenFormDetail | null>(null);

  React.useEffect(() => {
    let cancelled = false;
    let loaded = false;
    const load = () =>
      loadModal().then((m) => {
        if (cancelled) return;
        loaded = true;
        setMod(m);
      });

    // Open requests that arrive before the module is ready are queued. Once it
    // is mounted, the modal listens for them itself.
    const stop = onOpenLeadForm((detail) => {
      if (loaded) return;
      setPending(detail);
      load();
    });

    const prefetch = () => {
      const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
      if (w.requestIdleCallback) w.requestIdleCallback(load, { timeout: 4000 });
      else window.setTimeout(load, 2500);
    };
    if (document.readyState === "complete") prefetch();
    else window.addEventListener("load", prefetch, { once: true });

    return () => {
      cancelled = true;
      stop();
      window.removeEventListener("load", prefetch);
    };
  }, []);

  if (!mod) return null;
  const LeadModal = mod.default;
  return (
    <LeadModal
      intakes={intakes}
      initialOpen={pending}
      onInitialOpenHandled={() => setPending(null)}
    />
  );
}
