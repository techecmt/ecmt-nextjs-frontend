"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import ConditionalFooter from "./ConditionalFooter";

// Campaign landing pages render bare: no header, no footer, no chat widget.
const BARE_PATHS = ["/lp"];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isBare = BARE_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  if (isBare) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="pt-[72px]">{children}</main>
      <ConditionalFooter />
    </>
  );
}
