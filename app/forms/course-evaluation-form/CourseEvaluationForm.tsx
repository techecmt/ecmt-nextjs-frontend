"use client";

import Link from "next/link";

import {
  COURSE_OPTIONS,
  EXTENT_SCALE_COLUMNS,
  SATISFACTION_MATRIX_ROWS,
  SATISFACTION_SCALE_COLUMNS,
  TRUTH_SCALE_COLUMNS,
  TRUTH_SCALE_STATEMENTS,
} from "./course-evaluation-definitions";

function ReqStar() {
  return <span className="text-red-600">*</span>;
}

function DashedDivider() {
  return <hr className="my-8 border-t border-dashed border-gray-400" />;
}

function LikertGrid({
  rowLabel,
  columns,
  rows,
  nameFn,
  required = true,
}: {
  rowLabel: string;
  columns: readonly { readonly value: string; readonly label: string }[];
  rows: readonly { readonly key: string; readonly label: string }[];
  nameFn: (rowKey: string) => string;
  required?: boolean;
}) {
  return (
    <div className="-mx-1 overflow-x-auto px-1">
      <table className="w-full min-w-[720px] border-collapse border border-[#cfd8ea] shadow-sm">
        <thead>
          <tr className="text-center">
            <th className="min-w-[200px] border border-[#cfd8ea] bg-[#1e4b8c] px-2 py-3 text-left align-middle">
              <span className="text-xs font-bold uppercase tracking-wide text-white">{rowLabel}</span>
            </th>
            {columns.map((col) => (
              <th
                key={col.value}
                className="border border-[#cfd8ea] bg-[#1e4b8c] px-2 py-3 align-middle text-xs font-semibold capitalize leading-snug text-white"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key}>
              <td className="border border-[#cfd8ea] bg-white px-3 py-3 text-sm leading-relaxed text-gray-800">
                {row.label}
              </td>
              {columns.map((col) => (
                <td key={col.value} className="border border-[#cfd8ea] bg-white px-1 py-2 text-center align-middle">
                  <input
                    required={required}
                    type="radio"
                    name={nameFn(row.key)}
                    value={col.value}
                    className="h-4 w-4 cursor-pointer accent-[#1AB69D]"
                    aria-label={`${row.label.replace(/\?/g, "")} — ${col.label}`}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CourseEvaluationForm() {
  return (
    <form
      action="/api/forms/submit"
      method="post"
      className="space-y-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10"
    >
      <input type="hidden" name="form_key" value="course_evaluation_form" />

      <section className="space-y-3">
        <h1 className="text-3xl font-bold text-gray-900 md:text-[2rem]">Course Evaluation Form</h1>
        <p className="text-sm leading-relaxed text-gray-800 md:text-base">
          Thank you for completing your course with Edusphere. We’d greatly appreciate it if you could take a few minutes
          to share your thoughts on your learning experience. Your feedback on areas such as course content, teaching
          methods, training materials, trainer effectiveness, and overall satisfaction will help us improve and enhance our
          future courses.
        </p>
        <p className="text-sm leading-relaxed text-gray-800 md:text-base">
          The survey will take approximately 5 minutes to complete. To begin, please provide a few details to help us
          identify the course you attended.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-base font-semibold text-gray-900">Course Evaluation Form</h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2">
          <div className="md:col-span-2">
            <span className="mb-2 block text-sm font-medium text-gray-800">
              Name <ReqStar />
            </span>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="sr-only">
                  First Name
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  required
                  placeholder="First Name"
                  className="w-full rounded border border-gray-400 px-3 py-3 text-sm outline-none ring-[#1AB69D]/30 focus:border-[#1AB69D] focus:ring"
                />
              </div>
              <div>
                <label htmlFor="last_name" className="sr-only">
                  Last Name
                </label>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  required
                  placeholder="Last Name"
                  className="w-full rounded border border-gray-400 px-3 py-3 text-sm outline-none ring-[#1AB69D]/30 focus:border-[#1AB69D] focus:ring"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="nric_last_four" className="mb-2 block text-sm font-medium text-gray-800">
              Last 4 characters of NRIC/FIN <ReqStar />
            </label>
            <input
              id="nric_last_four"
              name="nric_last_four"
              type="text"
              required
              minLength={4}
              maxLength={4}
              placeholder="XXXX"
              className="w-full rounded border border-gray-400 px-3 py-3 text-sm outline-none ring-[#1AB69D]/30 focus:border-[#1AB69D] focus:ring"
            />
          </div>

          <div>
            <label htmlFor="intake_no" className="mb-2 block text-sm font-medium text-gray-800">
              Intake No.
            </label>
            <input
              id="intake_no"
              name="intake_no"
              type="text"
              placeholder="Intake No."
              className="w-full rounded border border-gray-400 px-3 py-3 text-sm outline-none ring-[#1AB69D]/30 focus:border-[#1AB69D] focus:ring"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-800">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              className="w-full rounded border border-gray-400 px-3 py-3 text-sm outline-none ring-[#1AB69D]/30 focus:border-[#1AB69D] focus:ring"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="course_name" className="mb-2 block text-sm font-medium text-gray-800">
              Training/Course <ReqStar />
            </label>
            <select
              id="course_name"
              name="course_name"
              required
              className="w-full rounded border border-gray-400 bg-white px-3 py-3 text-sm outline-none focus:border-[#1AB69D] focus:ring focus:ring-[#1AB69D]/30"
            >
              <option value="">Please Select</option>
              {COURSE_OPTIONS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="course_end_date" className="mb-2 block text-sm font-medium text-gray-800">
              Course End Date <ReqStar />
            </label>
            <input
              id="course_end_date"
              name="course_end_date"
              type="date"
              required
              className="w-full rounded border border-gray-400 px-3 py-3 text-sm outline-none ring-[#1AB69D]/30 focus:border-[#1AB69D] focus:ring"
            />
          </div>
        </div>
      </section>

      <DashedDivider />

      <section className="space-y-6">

        {TRUTH_SCALE_STATEMENTS.map((q) => (
          <div key={q.key} className="space-y-3">
            <p className="text-sm font-semibold text-gray-900 md:text-base">
              {q.text} {q.required && <ReqStar />}
            </p>
            <LikertGrid
              rowLabel="Rows"
              columns={TRUTH_SCALE_COLUMNS}
              rows={[{ key: "overall_satisfaction", label: "Overall satisfaction" }]}
              nameFn={() => q.key}
              required={q.required}
            />
          </div>
        ))}

        <div className="space-y-3">
          <p className="text-sm font-semibold text-gray-900 md:text-base">
            The course helped me meet my learning goals. <ReqStar />
          </p>
          <LikertGrid
            rowLabel="Rows"
            columns={EXTENT_SCALE_COLUMNS}
            rows={[{ key: "overall_satisfaction", label: "Overall satisfaction" }]}
            nameFn={() => "course_helped_meet_learning_goals"}
            required
          />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-gray-900 md:text-base">What was your main intention for attending the course?</p>
          <textarea
            id="main_intention"
            name="main_intention"
            rows={4}
            placeholder="Type here..."
            className="w-full rounded border border-gray-400 px-3 py-3 text-sm outline-none focus:border-[#1AB69D] focus:ring focus:ring-[#1AB69D]/25"
          />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-gray-900 md:text-base">
            I can apply what was learnt during the course in my work.
          </p>
          <LikertGrid
            rowLabel="Rows"
            columns={EXTENT_SCALE_COLUMNS}
            rows={[{ key: "overall_satisfaction", label: "Overall satisfaction" }]}
            nameFn={() => "apply_what_learned_in_work"}
            required={false}
          />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-gray-900 md:text-base">
            The skills and knowledge I gained from the course will help me do better in my job.
          </p>
          <LikertGrid
            rowLabel="Rows"
            columns={EXTENT_SCALE_COLUMNS}
            rows={[{ key: "overall_satisfaction", label: "Overall satisfaction" }]}
            nameFn={() => "skills_knowledge_help_job"}
            required={false}
          />
        </div>
      </section>

      <DashedDivider />

      <section className="space-y-6">

        <div className="space-y-2">
          <label htmlFor="improve_future_classes" className="block text-sm font-semibold text-gray-900 md:text-base">
            What is one thing we can do to improve future classes?
          </label>
          <textarea
            id="improve_future_classes"
            name="improve_future_classes"
            rows={5}
            placeholder="Type here..."
            className="w-full rounded border border-gray-400 px-3 py-3 text-sm outline-none focus:border-[#1AB69D] focus:ring focus:ring-[#1AB69D]/25"
          />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-gray-900 md:text-base">
            How satisfied were you with the following? <ReqStar />
          </p>
          <LikertGrid
            rowLabel="Rows"
            columns={SATISFACTION_SCALE_COLUMNS}
            rows={SATISFACTION_MATRIX_ROWS.map((r) => ({ key: r.key, label: r.label }))}
            nameFn={(rowKey) => `satisfied_${rowKey}`}
            required
          />
        </div>
      </section>

      <DashedDivider />

      <section className="space-y-6">
        

        <section className="space-y-3">
          <p className="text-sm font-semibold text-gray-900 md:text-base">Would you recommend this course to others?</p>
          <div className="flex flex-wrap gap-6">
            <label className="flex cursor-pointer items-center gap-2">
              <input type="radio" name="recommend_course" value="yes" className="h-4 w-4 accent-[#1AB69D]" />
              <span className="text-sm text-gray-800">Yes</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2">
              <input type="radio" name="recommend_course" value="no" className="h-4 w-4 accent-[#1AB69D]" />
              <span className="text-sm text-gray-800">No</span>
            </label>
          </div>
        </section>

        <section className="space-y-2">
          <label htmlFor="comments" className="block text-sm font-semibold text-gray-900 md:text-base">
            Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            rows={5}
            placeholder="Type here..."
            className="w-full rounded border border-gray-400 px-3 py-3 text-sm outline-none focus:border-[#1AB69D] focus:ring focus:ring-[#1AB69D]/25"
          />
          <p className="text-xs text-gray-600">This is the last question.</p>
        </section>
      </section>

      <footer className="space-y-2 border-t border-gray-200 pt-6 text-xs leading-relaxed text-gray-600 md:text-sm">
        <p>
          By submitting the survey, you are consenting to Edusphere College of Management and Technology Pte Ltd (ECMT) to
          use the survey data for the following purposes:
        </p>
        <ul className="list-disc pl-5">
          <li>(i) for ECMT's internal research and policy-making purposes</li>
          <li>(ii) to share with other government agencies for their research and policy-making purposes</li>
        </ul>
        <p>
          For more details, please refer to our{" "}
          <Link href="/privacy-policy" className="text-[#1AB69D] underline underline-offset-2 hover:no-underline">
            privacy policy
          </Link>
          .
        </p>
      </footer>

      <div className="flex justify-center pt-2 pb-6">
        <button
          type="submit"
          className="min-w-[200px] rounded-sm bg-[#1AB69D] px-12 py-3 text-base font-bold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-[#159986] md:px-20"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
