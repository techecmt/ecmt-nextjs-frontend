"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

const HIDDEN_PATHS = ["/students-affair"];

export default function EcmtChatWidget() {
  const pathname = usePathname();
  const isHidden = HIDDEN_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  if (isHidden) return null;

  return (
    <Script
      id="ecmt-crm-chat-widget"
      src="https://ecmt-crm.vercel.app/widget.js"
      strategy="afterInteractive"
      data-widget-key="e6789d0ad1d758bc6b381fc78bf7a6aa35ca"
      data-position="right"
    />
  );
}
