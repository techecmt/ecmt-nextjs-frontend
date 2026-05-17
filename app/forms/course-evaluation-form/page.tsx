import type { Metadata } from "next";
import CourseEvaluationForm from "./CourseEvaluationForm";
import SubmissionBanner from "./SubmissionBanner";

export const metadata: Metadata = {
  title: "Course Evaluation Form | Edusphere College",
  description:
    "Submit course evaluation feedback for Edusphere College of Management and Technology (ECMT).",
};

export default async function CourseEvaluationFormPage({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string }>;
}) {
  const { submitted } = await searchParams;

  return (
    <main className="bg-[#eef2ff]/40 py-10 md:py-14">
      <div className="mx-auto w-full max-w-4xl px-4">
        {submitted && <SubmissionBanner success={submitted === "1"} />}
        <CourseEvaluationForm />
      </div>
    </main>
  );
}
