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

/**
 * dataLayer events used by GTM (GTM-MFXJHXRD):
 *   lp_form_open     { placement, course_code }
 *   lp_form_step     { step, step_name, course_code }
 *   generate_lead    { course_code }
 *   whatsapp_click   { location: hero | sticky | final | float | form_success }
 */
export type LpEvent = "lp_form_open" | "lp_form_step" | "generate_lead" | "whatsapp_click";

export function trackEvent(event: LpEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, campaign: CAMPAIGN_TITLE, ...payload });
}
