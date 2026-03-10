import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | Edusphere College",
  description:
    "Read Edusphere College's Privacy Policy to understand how personal data is collected, used, protected, and managed.",
};

export default function PrivacyPolicyLayout({ children }: { children: ReactNode }) {
  return children;
}
