import Image from "next/image";

export default function OurAcademicAndExaminationBoard() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-white via-gray-50 to-[#1AB69D]/5 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1AB69D]/10 text-[#1AB69D] rounded-full text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#1AB69D]" />
              Governance & Quality Assurance
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Our Academic & Examination Board
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
              In order to maintain academic integrity, adhere to strategic aims and uphold
              standards, Edusphere College of Management and Technology has established
              robust governance structures that monitor, review and continuously improve
              all academic processes.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Board Overview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Academic Board</h2>
            <div className="w-16 h-1 bg-[#1AB69D] rounded-full" />
            <p className="text-gray-700 leading-relaxed text-justify">
              In order to maintain academic integrity, adhere to strategic aims and
              uphold standards, Edusphere College of Management and Technology has set
              up structures to monitor and review academic processes and developments
              as well as to implement reform.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              The Academic Board was established by the Board of Directors as the body
              within Edusphere College of Management and Technology with the authority
              to develop, establish and review the policies and procedures pertaining
              to the courses offered by the College. The role of the Board shall not be
              limited to overseeing existing courses but shall also include the
              development of new courses and other academic developments that will
              further the academic status of the College.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Board Members */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Academic Board Members</h2>
              <div className="w-16 h-1 bg-[#1AB69D] rounded-full mt-2" />
            </div>
            <p className="text-sm text-gray-500 max-w-md">
              Our Academic Board comprises experienced professionals who provide
              direction on academic policies, curriculum quality and student outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Member 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-2">
              <span className="inline-flex items-center rounded-full bg-[#1AB69D]/10 text-[#1AB69D] px-3 py-1 text-xs font-semibold w-fit">
                Academic Board
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                Mr. Mohamed Yasin Mohamed Amin
              </h3>
              <p className="text-sm text-gray-700">Master of Computer Applications</p>
              <p className="text-xs text-gray-500">Bharathidasan University, India</p>
            </div>

            {/* Member 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-2">
              <span className="inline-flex items-center rounded-full bg-[#1AB69D]/10 text-[#1AB69D] px-3 py-1 text-xs font-semibold w-fit">
                Academic Board
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                Mr. Shamsudeen Mohamed Tariq
              </h3>
              <p className="text-sm text-gray-700">
                Masters of Computing (IT Project Management)
              </p>
              <p className="text-xs text-gray-500">
                National University of Singapore, Singapore
              </p>
              <p className="text-xs text-gray-500">
                Bachelor of Engineering (Computer Science), Bharathidasan University, India
              </p>
            </div>

            {/* Member 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-2">
              <span className="inline-flex items-center rounded-full bg-[#1AB69D]/10 text-[#1AB69D] px-3 py-1 text-xs font-semibold w-fit">
                Academic Board
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                Mr. Samsudeen Mohamed Tahir
              </h3>
              <p className="text-sm text-gray-700">
                Bachelor of Mechanical Engineering
              </p>
              <p className="text-xs text-gray-500">Anna University, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Examination Board Overview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Examination Board</h2>
            <div className="w-16 h-1 bg-[#1AB69D] rounded-full" />
            <p className="text-gray-700 leading-relaxed text-justify">
              The Examination Board is a sub-committee of the Academic Board and is
              responsible for ensuring that academic standards are maintained through
              fair and rigorous assessment procedures in accordance with relevant rules,
              award regulations and requirements of accreditation and validation
              authorities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Responsibilities</h3>
              <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                <li>The security of examination scripts and assessment</li>
                <li>The conduct of examinations and assessments</li>
                <li>The duties and responsibilities of invigilators and markers</li>
                <li>The moderation of examination and assessment of marks</li>
                <li>
                  The handling of appeals from students with regard to examination
                  assessment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Examination Board Members */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Examination Board Members</h2>
              <div className="w-16 h-1 bg-[#1AB69D] rounded-full mt-2" />
            </div>
            <p className="text-sm text-gray-500 max-w-md">
              The Examination Board oversees assessment standards and processes to
              ensure fairness, transparency and academic rigour.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Member 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-2">
              <span className="inline-flex items-center rounded-full bg-[#EE4A62]/10 text-[#EE4A62] px-3 py-1 text-xs font-semibold w-fit">
                Examination Board
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                Mr. Mohamed Yasin Mohamed Amin
              </h3>
              <p className="text-sm text-gray-700">Master of Computer Applications</p>
              <p className="text-xs text-gray-500">Bharathidasan University, India</p>
            </div>

            {/* Member 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-2">
              <span className="inline-flex items-center rounded-full bg-[#EE4A62]/10 text-[#EE4A62] px-3 py-1 text-xs font-semibold w-fit">
                Examination Board
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                Mr. Shamsudeen Mohamed Tariq
              </h3>
              <p className="text-sm text-gray-700">
                Masters of Computing (IT Project Management)
              </p>
              <p className="text-xs text-gray-500">
                National University of Singapore, Singapore
              </p>
              <p className="text-xs text-gray-500">
                Bachelor of Engineering (Computer Science), Bharathidasan University, India
              </p>
            </div>

            {/* Member 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-2">
              <span className="inline-flex items-center rounded-full bg-[#EE4A62]/10 text-[#EE4A62] px-3 py-1 text-xs font-semibold w-fit">
                Examination Board
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                Mr. Samsudeen Mohamed Tahir
              </h3>
              <p className="text-sm text-gray-700">
                Bachelor of Mechanical Engineering
              </p>
              <p className="text-xs text-gray-500">Anna University, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organisation Chart */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Organisation Chart</h2>
              <div className="w-16 h-1 bg-[#1AB69D] rounded-full mt-2" />
            </div>
          </div>

            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 flex items-center justify-center">
            <Image
              src="/homepage/orgchart.webp"
              alt="Organisation Chart"
              width={800}
              height={600}
              className="w-full h-auto max-w-4xl"
              priority
            />
            </div>
        </div>
      </section>
    </main>
  );
}
