"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

// Paths where the global footer should be hidden.
const HIDDEN_FOOTER_PATHS = ["/resources/student-orientation-form"];

export default function ConditionalFooter() {
  const pathname = usePathname();

  const hideFooter = HIDDEN_FOOTER_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  if (hideFooter) {
    return null;
  }

  return <Footer />;
}
