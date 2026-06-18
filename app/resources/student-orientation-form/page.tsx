import type { Metadata } from "next";
import OrientationGate from "./OrientationGate";
import {
  ORIENTATION_DOCUMENT_KEY,
  ORIENTATION_PDF_PATH,
} from "@/lib/orientation";

export const metadata: Metadata = {
  title: "Student Orientation | Edusphere College",
  description:
    "Read the Edusphere College student orientation document and confirm completion.",
  robots: { index: false, follow: false },
};

export default function StudentOrientationFormPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8">
        <OrientationGate
          pdfUrl={ORIENTATION_PDF_PATH}
          documentKey={ORIENTATION_DOCUMENT_KEY}
        />
      </div>
    </main>
  );
}
