import React from "react";
import Image from "next/image";

const steps = [
  {
    number: 1,
    title: (
      <>
        Visit{" "}
        <a
          href="https://www.myskillsfuture.gov.sg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1AB69D] underline underline-offset-2"
        >
          www.myskillsfuture.gov.sg
        </a>{" "}
        and click on &quot;Access E-Services&quot;.
      </>
    ),
    image: "/wsq-images/step-1.webp",
    imageAlt: "MySkillsFuture homepage showing Access E-Services option",
  },
  {
    number: 2,
    title: (
      <>
        Select &quot;<strong>Download Certificates</strong>&quot; and you will be
        prompted to log in.
      </>
    ),
    image: "/wsq-images/step-2.webp",
    imageAlt: "E-Services page showing Download Certificates option",
  },
  {
    number: 3,
    title:
      "Log in via Singpass and you will be redirected to the Skills Passport page, where you can view your list of learning achievements.",
  },
  {
    number: 4,
    title: (
      <>
        Click on the specific record and click on the OpenCerts icon to download
        your respective digital certificates. A new browser tab for{" "}
        <a
          href="https://www.opencerts.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1AB69D] underline underline-offset-2"
        >
          www.opencerts.io
        </a>{" "}
        will open.
      </>
    ),
  },
  {
    number: 5,
    title: (
      <>
        Click on the &quot;<strong>Print</strong>&quot; button.
      </>
    ),
    image: "/wsq-images/step-5.webp",
    imageAlt: "OpenCerts page showing the Print button",
  },
];

export default function OpenCertsGuide() {
  return (
    <details className="group rounded-2xl border border-gray-200 bg-white shadow-sm">
      <summary className="cursor-pointer list-none p-6 md:p-8 flex items-center justify-between gap-4">
        <h3
          className="text-xl md:text-2xl font-bold"
          style={{ color: "#202020" }}
        >
          Where can I find and download my digital certificates via OpenCerts?
        </h3>
        <svg
          className="w-5 h-5 flex-shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>

      <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-6">
        {steps.map((step) => (
          <div key={step.number} className="space-y-3">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-[#1AB69D] text-white text-sm font-bold">
                {step.number}
              </div>
              <p className="text-sm md:text-base leading-relaxed pt-1" style={{ color: "#202020" }}>
                {step.title}
              </p>
            </div>
            {step.image && (
              <div className="ml-13 relative w-full max-w-2xl rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <Image
                  src={step.image}
                  alt={step.imageAlt ?? ""}
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </details>
  );
}
