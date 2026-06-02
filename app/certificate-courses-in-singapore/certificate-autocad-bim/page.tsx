import type { Metadata } from "next";
import ContactForm from "../../components/contactform";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Specialised Certificate in AutoCAD & BIM Applications | Edusphere",
    description:
        "Build practical AutoCAD and Revit skills with the Specialised Certificate in AutoCAD & BIM Applications at Edusphere College.",
};

const moduleDetails = [
    {
        title: "AUTOCAD (BEGINNER TO PRACTICAL LEVEL)",
        points: [
            "AutoCAD basics",
            "Modify and control tools",
            "Layers, line types, and standards",
            "Text, dimensions, and annotation",
            "Blocks, libraries, and templates",
            "Plotting and submission format",
        ],
    },
    {
        title: "AUTOCAD + QUANTITY TAKE-OFF + SITE DRAWING READING",
        points: [
            "Reading construction drawings (GA drawings)",
            "Basic quantity take-off using drawings",
            "Civil symbols and common details (walls, drains, slabs, road markings)",
        ],
    },
    {
        title: "REVIT (BIM FUNDAMENTALS) FOR MEP & CIVIL - BUILDING PROJECTS",
        points: [
            "BIM concept and workflow (why Revit is used in Singapore projects)",
            "Revit interface and project setup",
            "Levels, grids, walls, floors, and roofs",
            "Basic structural modelling",
            "Views, sections, and schedules",
            "Sheets, layout, and export for submission",
        ],
    },
];

const learningOutcomes = [
    "Produce professional 2D CAD drawings with proper layers, dimensions, and layout settings.",
    "Interpret and read basic construction and GA drawings with accuracy.",
    "Create technical documentation useful for site coordination and subcontractor work.",
    "Perform basic quantity take-offs for civil symbols and common site details.",
    "Apply BIM fundamentals to set up Revit projects and model structural and MEP components.",
    "Generate professional portfolio pieces, including site plans and 3D model exports.",
];

const programmeFacts = [
    { label: "Total Contact Hours", value: "36 Hours" },
    { label: "Duration", value: "Flexible (Part-time / Weekend / Evening)" },
    { label: "Mode", value: "Practical" },
];

export default function CertificateAutocadBimPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-linear-to-br from-white via-gray-50 to-[#1AB69D]/5 py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true"></div>
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                        <div className="space-y-6">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1AB69D]/10 text-[#1AB69D] rounded-full text-sm font-semibold">
                                    Engineering Certificate
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#EE4A62]/10 text-[#EE4A62] text-xs font-semibold">
                                    AutoCAD + Revit BIM
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                                Specialised Certificate in{" "}
                                <span className="text-[#EE4A62]">
                                    AutoCAD & BIM Applications
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                The AutoCAD Drafting + Revit Modelling (Civil &
                                MEP) programme is designed to equip learners with
                                the technical proficiency required for modern
                                construction projects.
                            </p>

                            <div className="flex flex-wrap gap-6 pt-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#EE4A62]/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#EE4A62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">
                                            36 Hours
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Total contact hours
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#1AB69D]/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-[#1AB69D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">
                                            Practical
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Hands-on training mode
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-2">
                                <a
                                    href="#autocad-bim-contact"
                                    className="group bg-[#1AB69D] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#16917f] transition-all hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
                                >
                                    Enquire Now
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                                <a
                                    href="#module-details"
                                    className="group bg-white text-[#1AB69D] border-2 border-[#1AB69D] px-8 py-4 rounded-lg font-semibold hover:bg-[#1AB69D] hover:text-white transition-all hover:shadow-lg"
                                >
                                    View Modules
                                </a>
                            </div>
                        </div>

                        <div className="relative h-[420px] md:h-[540px] rounded-tl-3xl rounded-br-3xl overflow-hidden">
                            <Image
                                src="/herosections/autocad_picture.jpg"
                                alt="Architectural drafting and BIM planning workspace"
                                fill
                                className="object-cover rounded-tl-3xl rounded-br-3xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Overview */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
                        Program Overview
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-1 bg-[#1AB69D] rounded-full"></div>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-4 text-gray-700 leading-relaxed text-justify">
                        <p>
                            The course builds essential competencies in 2D digital
                            drafting and 3D Building Information Modelling (BIM)
                            through a structured, practical approach.
                        </p>
                        <p>
                            By working on industry-standard software, learners
                            develop the confidence and technical skills necessary
                            to produce professional drawings used in site
                            coordination, engineering documentation, and contractor
                            workflows.
                        </p>
                    </div>
                </div>
            </section>

            {/* Module Details */}
            <section id="module-details" className="py-12 md:py-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
                        Module Details
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-1 bg-[#1AB69D] rounded-full"></div>
                    </div>

                    <div className="space-y-6">
                        {moduleDetails.map((module) => (
                            <article
                                key={module.title}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">
                                    {module.title}
                                </h3>
                                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                                    {module.points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex items-start gap-3 text-gray-700"
                                        >
                                            <svg
                                                className="w-5 h-5 text-[#1AB69D] mt-0.5 shrink-0"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Outcomes */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
                        Learning Outcomes
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-1 bg-[#1AB69D] rounded-full"></div>
                    </div>

                    <div className="max-w-5xl mx-auto bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100">
                        <ul className="space-y-4">
                            {learningOutcomes.map((outcome) => (
                                <li
                                    key={outcome}
                                    className="flex items-start gap-3 text-gray-700"
                                >
                                    <svg
                                        className="w-5 h-5 text-[#EE4A62] mt-0.5 shrink-0"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>{outcome}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Programme Snapshot */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
                        Programme Snapshot
                    </h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-1 bg-[#1AB69D] rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {programmeFacts.map((fact) => (
                            <div
                                key={fact.label}
                                className="bg-white rounded-xl shadow-sm border-2 border-[#1AB69D] p-6 text-center hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-sm font-semibold text-gray-600 mb-2">
                                    {fact.label}
                                </h3>
                                <p className="text-lg md:text-xl font-bold text-[#1AB69D]">
                                    {fact.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#1AB69D] mb-6">
                                Programme Fees (Part-time)
                            </h3>
                            <div className="space-y-3 text-gray-700">
                                <div className="flex items-start justify-between gap-4">
                                    <span>Total Course Fee</span>
                                    <span className="font-bold text-gray-900">
                                        S$ 699.00
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">
                                    (Inclusive of GST)
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#1AB69D] mb-4">
                                    Certification
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    "Specialised Certificate in AutoCAD & BIM
                                    Applications" will be awarded by Edusphere
                                    College of Management and Technology Pte Ltd.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="autocad-bim-contact">
                <ContactForm />
            </section>
        </main>
    );
}
