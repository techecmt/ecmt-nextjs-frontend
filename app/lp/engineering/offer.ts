"use client";

import * as React from "react";
import { OFFER } from "./campaign";

// One shared clock for every timer on the page (ribbon, fee card, popup,
// sticky bar): a single interval, started by the first subscriber.

let expiresAt: number | null = null;
let remainingSeconds: number | null = null;
let interval: number | null = null;
const listeners = new Set<() => void>();

function resolveExpiry() {
  if (expiresAt !== null) return expiresAt;
  const now = Date.now();
  let startedAt = now;
  try {
    const stored = Number(window.localStorage.getItem(OFFER.storageKey));
    // Ignore missing, corrupt or future timestamps (a skewed clock).
    if (Number.isFinite(stored) && stored > 0 && stored <= now) {
      startedAt = stored;
    } else {
      window.localStorage.setItem(OFFER.storageKey, String(now));
    }
  } catch {
    // Storage blocked (private mode): the offer lasts for this page view.
  }
  expiresAt = startedAt + OFFER.durationMs;
  return expiresAt;
}

function tick() {
  const next = Math.max(0, Math.ceil((resolveExpiry() - Date.now()) / 1000));
  if (next === remainingSeconds) return;
  remainingSeconds = next;
  listeners.forEach((listener) => listener());
  if (next === 0 && interval !== null) {
    window.clearInterval(interval);
    interval = null;
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  tick();
  if (interval === null && remainingSeconds !== 0) {
    interval = window.setInterval(tick, 1000);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && interval !== null) {
      window.clearInterval(interval);
      interval = null;
    }
  };
}

/** Seconds left on this visitor's offer; null until mounted, 0 once expired. */
export function useOfferSeconds() {
  return React.useSyncExternalStore(
    subscribe,
    () => remainingSeconds,
    () => null,
  );
}

export function getOfferStatus() {
  const expiry = resolveExpiry();
  return {
    expiresAtIso: new Date(expiry).toISOString(),
    active: Date.now() < expiry,
  };
}

export function splitSeconds(total: number) {
  return {
    hours: Math.floor(total / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

export const pad = (value: number) => String(value).padStart(2, "0");
