import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Careers | Edusphere College Singapore",
  description:
    "Explore career opportunities at Edusphere College in Singapore and join a team focused on practical, student-centered education.",
};

export default function CareersLayout({ children }: { children: ReactNode }) {
  return children;
}
