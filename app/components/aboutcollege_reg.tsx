import Image from "next/image";
import React from "react";

export default function AboutCollegeReg() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Certificate */}
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-md rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm">
              <Image
                src="/homepage/Registration.webp"
                alt="Edusphere College Registration Certificate"
                width={520}
                height={720}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-spartan text-[#202020]">About the College</h2>
            <p className="text-[#202020] text-base mb-6 font-poppins leading-relaxed">
              Edusphere College of Management and Technology was founded on the principle that education can change the world.
            </p>

            <h3 className="text-2xl font-semibold mt-4 mb-2 font-spartan text-[#202020]">Vision</h3>
            <p className="text-base mb-4 font-poppins text-[#202020]">Become a vocational school of choice, maximizing the potential and quality of life of every student and staff.</p>

            <h3 className="text-2xl font-semibold mt-4 mb-2 font-spartan text-[#202020]">Mission</h3>
            <p className="text-base mb-4 font-poppins text-[#202020]">To provide a quality education leading to meaning, dignity and independent life.</p>

            <h3 className="text-2xl font-semibold mt-4 mb-2 font-spartan text-[#202020]">Core Values</h3>
            <ul className="list-disc list-inside text-base font-poppins text-[#202020] space-y-1">
              <li>Confidence</li>
              <li>Character</li>
              <li>Creativity</li>
              <li>Competence</li>
              <li>Contribution</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
