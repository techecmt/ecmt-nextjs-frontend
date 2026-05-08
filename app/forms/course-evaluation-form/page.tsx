import type { Metadata } from "next";
import SubmissionBanner from "./SubmissionBanner";

export const metadata: Metadata = {
  title: "Course Evaluation Form | Edusphere College",
  description:
    "Submit course feedback for training quality, trainer effectiveness, and learning outcomes.",
};

type RatingOption = {
  value: string;
  label: string;
};

type QuestionRow = {
  id: string;
  text: string;
};

const COURSE_OPTIONS = [
  "WSQ - Maximizing Performance: Workplace Optimization through Flexible Work Practices",
  "WSQ - Support Service to Persons with Disabilities",
  "WSQ - Essential Care-giving Skills for Elderly",
  "WSQ - Navigating Service Challenges",
  "WSQ - AI-Driven Communication Strategies to Drive Service Excellence",
  "WSQ - GenAI for Effective Presentations",
  "WSQ - Master Executive Presence in Stakeholder Management",
  "ERF - Certificate in Nursing Aid",
  "ERF - Diploma in Caregiving",
  "ERF - Advanced Diploma in Nursing Aide",
  "ERF - Diploma in Hospitality Management",
  "ERF - Advanced Diploma in Hospitality Management",
  "ERF - Diploma in Civil Engineering",
  "ERF - Advanced Diploma in Civil Engineering",
  "ERF - Diploma in Mechanical and Electrical (M&E) Engineering",
  "ERF - Advanced Diploma in Mechanical and Electrical (M&E) Engineering",
  "ERF - Diploma in Business Administration",
  "ERF - Diploma in Human Resource Management",
  "ERF - Diploma in Logistics and Supply Chain Management",
  "E-Learning - Diploma in Business Administration",
  "E-Learning - Diploma in Hospitality Management",
  "E-Learning - Advanced Diploma in Nursing Care Assistant",
  "E-Learning - Diploma in Human Resource Management",
  "E-Learning - Diploma in Logistics and Supply Chain Management",
] as const;

const RATING_OPTIONS: RatingOption[] = [
  { value: "5", label: "Strongly Agree" },
  { value: "4", label: "Agree" },
  { value: "3", label: "Neutral" },
  { value: "2", label: "Disagree" },
  { value: "1", label: "Strongly Disagree" },
  { value: "na", label: "N/A" },
];

const TRAINER_QUESTIONS: QuestionRow[] = [
  { id: "trainer_knowledge", text: "Trainer demonstrates good subject knowledge." },
  { id: "trainer_clarity", text: "Trainer explains concepts clearly." },
  { id: "trainer_engagement", text: "Trainer keeps participants engaged." },
  { id: "trainer_pace", text: "Trainer maintains an appropriate pace." },
  { id: "trainer_questions", text: "Trainer responds to questions effectively." },
  { id: "trainer_examples", text: "Trainer uses relevant examples and practical scenarios." },
];

const COURSE_CONTENT_QUESTIONS: QuestionRow[] = [
  { id: "content_objectives", text: "Course objectives are clearly communicated." },
  { id: "content_relevance", text: "Course content is relevant to my role/work." },
  { id: "content_depth", text: "The depth of content is appropriate." },
  { id: "content_materials", text: "Course materials support learning effectively." },
  { id: "content_practical", text: "Practical activities support understanding." },
  { id: "content_outcomes", text: "I achieved the intended learning outcomes." },
];

const LOGISTICS_QUESTIONS: QuestionRow[] = [
  { id: "logistics_venue", text: "Training venue/platform is suitable." },
  { id: "logistics_schedule", text: "Training schedule is well-organized." },
  { id: "logistics_support", text: "Administrative support is responsive and helpful." },
  { id: "logistics_duration", text: "Course duration is appropriate for the content." },
];

const OVERALL_QUESTIONS: QuestionRow[] = [
  { id: "overall_satisfaction", text: "Overall, I am satisfied with this course." },
  { id: "overall_recommend", text: "I would recommend this course to others." },
  { id: "overall_value", text: "This course provides good value for time invested." },
];

function RatingsTable({
  title,
  questions,
  fieldPrefix,
}: {
  title: string;
  questions: QuestionRow[];
  fieldPrefix: string;
}) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 md:p-6">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">{title}</h2>

      <div className="overflow-x-auto">
        <table className="min-w-[760px] w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-200 px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-600">
                Statement
              </th>
              {RATING_OPTIONS.map((option) => (
                <th
                  key={option.value}
                  className="border border-gray-200 px-2 py-2 text-center text-xs font-semibold uppercase tracking-wide text-gray-600"
                >
                  {option.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {questions.map((question) => (
              <tr key={question.id}>
                <td className="border border-gray-200 px-3 py-3 text-sm text-gray-700">
                  {question.text}
                </td>
                {RATING_OPTIONS.map((option) => (
                  <td key={`${question.id}-${option.value}`} className="border border-gray-200 px-2 py-3 text-center">
                    <input
                      required
                      type="radio"
                      name={`${fieldPrefix}_${question.id}`}
                      value={option.value}
                      className="h-4 w-4 cursor-pointer accent-[#1AB69D]"
                      aria-label={`${question.text} - ${option.label}`}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default async function CourseEvaluationFormPage({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string }>;
}) {
  const { submitted } = await searchParams;

  return (
    <main className="bg-gray-50 py-10 md:py-14">
      <div className="mx-auto w-full max-w-5xl px-4">

        {submitted && <SubmissionBanner success={submitted === "1"} />}

        <section className="mb-6 rounded-2xl border border-gray-200 bg-white p-5 md:p-8">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Course Evaluation Form</h1>
          <p className="mt-2 text-sm text-gray-600 md:text-base">
            Please complete this evaluation form to help us improve course delivery and learner experience.
          </p>
        </section>

        <form
          action="/api/forms/submit"
          method="post"
          className="space-y-6 rounded-2xl border border-gray-200 bg-white p-5 md:p-8"
        >
          <input type="hidden" name="form_key" value="course_evaluation_form" />
          <section>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Participant Information</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="participant_name" className="mb-1 block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  required
                  id="participant_name"
                  name="participant_name"
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none ring-[#1AB69D] placeholder:text-gray-400 focus:border-[#1AB69D] focus:ring-2"
                />
              </div>

              <div>
                <label htmlFor="participant_email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  required
                  id="participant_email"
                  name="participant_email"
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none ring-[#1AB69D] placeholder:text-gray-400 focus:border-[#1AB69D] focus:ring-2"
                />
              </div>

              <div>
                <label htmlFor="course_name" className="mb-1 block text-sm font-medium text-gray-700">
                  Training/Course
                </label>
                <select
                  required
                  id="course_name"
                  name="course_name"
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none ring-[#1AB69D] focus:border-[#1AB69D] focus:ring-2"
                >
                  <option value="">Select a course</option>
                  {COURSE_OPTIONS.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="evaluation_date" className="mb-1 block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  required
                  id="evaluation_date"
                  name="evaluation_date"
                  type="date"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none ring-[#1AB69D] focus:border-[#1AB69D] focus:ring-2"
                />
              </div>
            </div>
          </section>

          <RatingsTable title="Section A: Trainer Effectiveness" questions={TRAINER_QUESTIONS} fieldPrefix="trainer" />
          <RatingsTable title="Section B: Course Content and Delivery" questions={COURSE_CONTENT_QUESTIONS} fieldPrefix="content" />
          <RatingsTable title="Section C: Logistics and Administration" questions={LOGISTICS_QUESTIONS} fieldPrefix="logistics" />
          <RatingsTable title="Section D: Overall Satisfaction" questions={OVERALL_QUESTIONS} fieldPrefix="overall" />

          <section className="rounded-2xl border border-gray-200 bg-white p-4 md:p-6">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Additional Feedback</h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="most_useful" className="mb-1 block text-sm font-medium text-gray-700">
                  What did you find most useful in this course?
                </label>
                <textarea
                  id="most_useful"
                  name="most_useful"
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none ring-[#1AB69D] placeholder:text-gray-400 focus:border-[#1AB69D] focus:ring-2"
                />
              </div>

              <div>
                <label htmlFor="improvement" className="mb-1 block text-sm font-medium text-gray-700">
                  What can be improved?
                </label>
                <textarea
                  id="improvement"
                  name="improvement"
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none ring-[#1AB69D] placeholder:text-gray-400 focus:border-[#1AB69D] focus:ring-2"
                />
              </div>

              <div>
                <label htmlFor="comments" className="mb-1 block text-sm font-medium text-gray-700">
                  Any additional comments
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none ring-[#1AB69D] placeholder:text-gray-400 focus:border-[#1AB69D] focus:ring-2"
                />
              </div>
            </div>
          </section>

          <div className="rounded-xl bg-[#1AB69D]/10 px-4 py-3 text-sm text-gray-700">
            By submitting this form, you confirm that your responses are accurate and provided for quality improvement purposes.
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-[#1AB69D] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#149985]"
            >
              Submit Evaluation
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
