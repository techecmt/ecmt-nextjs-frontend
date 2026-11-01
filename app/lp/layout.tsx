import type { Metadata } from "next";

// Campaign landing pages exist for paid traffic and duplicate content from the
// real course pages, so nothing under /lp belongs in the index. Setting it here
// means every future landing page inherits noindex without having to remember;
// a page only needs its own `robots` if it wants to opt back in.
// A literal string is passed through verbatim. The object form merges
// field-by-field into child metadata and quietly lost `nofollow` when a page
// set its own title, so it is not used here.
export const metadata: Metadata = {
  robots: "noindex, nofollow",
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
