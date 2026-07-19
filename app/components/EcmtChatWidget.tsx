"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const HIDDEN_PATHS = ["/students-affair"];
const WIDGET_HOST_FIXES_ID = "ecmt-chat-widget-host-fixes";

// The external widget injects fixed-position UI. On small screens its expanded
// launcher label and hover scale can exceed the viewport and cause horizontal scroll.
const WIDGET_HOST_FIXES = `
  @media (max-width: 640px) {
    .ecmt-chat-launcher {
      max-width: min(calc(100vw - 32px), calc(100dvw - 32px)) !important;
    }

    .ecmt-chat-launcher-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: min(calc(100vw - 120px), calc(100dvw - 120px));
    }

    .ecmt-chat-nudge {
      max-width: min(260px, calc(100vw - 32px), calc(100dvw - 32px)) !important;
    }
  }

  @media (max-width: 480px) {
    .ecmt-chat-launcher:hover {
      transform: translateX(-50%) !important;
    }

    .ecmt-chat-nudge {
      left: 50% !important;
      right: auto !important;
      transform: translateX(-50%) !important;
    }
  }

  @media (hover: none) and (max-width: 480px) {
    .ecmt-chat-launcher:hover {
      transform: translateX(-50%) !important;
      box-shadow: 0 12px 30px rgba(37, 99, 235, 0.4) !important;
    }
  }
`;

function injectWidgetHostFixes() {
  if (typeof document === "undefined") return;
  if (document.getElementById(WIDGET_HOST_FIXES_ID)) return;

  const style = document.createElement("style");
  style.id = WIDGET_HOST_FIXES_ID;
  style.textContent = WIDGET_HOST_FIXES;
  document.head.appendChild(style);
}

export default function EcmtChatWidget() {
  const pathname = usePathname();
  const isHidden = HIDDEN_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  useEffect(() => {
    if (isHidden) return;
    injectWidgetHostFixes();
  }, [isHidden]);

  if (isHidden) return null;

  return (
    <Script
      id="ecmt-crm-chat-widget"
      src="https://ecmt-crm.vercel.app/widget.js"
      strategy="afterInteractive"
      data-widget-key="e6789d0ad1d758bc6b381fc78bf7a6aa35ca"
      data-position="right"
      onLoad={injectWidgetHostFixes}
    />
  );
}
