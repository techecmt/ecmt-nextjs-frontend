"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

const HIDDEN_PATHS = ["/students-affair"];

export default function SalesIQWidget() {
  const pathname = usePathname();
  const isHidden = HIDDEN_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  if (isHidden) return null;

  return (
    <Script id="zsiq-widget" strategy="afterInteractive">
      {`window.$zoho=window.$zoho||{};$zoho.salesiq=$zoho.salesiq||{ready:function(){}};var d=document,s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.com/widget?wc=siq582542cacf0ffb88dbf81ae60aecb3d19993113928a0388457b4e1f93c9ebc79a9c66f9131e836186d4fa7cd19df520cb506442d9a52e6a4795e9ab5f12e8556";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);`}
    </Script>
  );
}
