import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Our Teachers | Edusphere College Singapore",
  description:
    "Meet the experienced teaching team at Edusphere College guiding students across business, IT, engineering, hospitality, and healthcare courses.",
};

export default function OurTeachersLayout({ children }: { children: ReactNode }) {
  return children;
}
