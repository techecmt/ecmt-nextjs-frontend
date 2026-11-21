"use client";

import { CAMPAIGN_TITLE } from "./campaign";

const OPEN_EVENT = "ecmt-lp-engineering:open-form";

export type OpenFormDetail = { courseId?: string; placement: string };

export function openLeadForm(detail: OpenFormDetail) {
  window.dispatchEvent(new CustomEvent<OpenFormDetail>(OPEN_EVENT, { detail }));
}

export function onOpenLeadForm(handler: (detail: OpenFormDetail) => void) {
  const listener = (event: Event) => handler((event as CustomEvent<OpenFormDetail>).detail);
  window.addEventListener(OPEN_EVENT, listener);
  return () => window.removeEventListener(OPEN_EVENT, listener);
}

export function trackEvent(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
  dataLayer?.push({ event, campaign: CAMPAIGN_TITLE, ...payload });
}
