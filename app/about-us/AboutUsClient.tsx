"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Users } from "lucide-react";

const teamCategories = [
  {
    id: "management",
    label: "Management",
    members: [
      {
        name: "Mr. Aziz Aboobacker",
        role: "Board Member",
        image: "/about-contact-other/sithiq.webp",
      },
      {
        name: "Mr. Mohamed Tahir",
        role: "Director / CEO",
        image: "/about-contact-other/Tahirdp.webp",
      },
      {
        name: "Mr. Syed Mustafa",
        role: "Board Member",
        image: "/about-contact-other/mustafa.webp",
      },
      
      
    ],
  },
  {
    id: "quality",
    label: "Quality Assurance and Compliance",
    members: [
      {
        name: "Mr. Syed Mustafa",
        role: "Board Member",
        image: "/about-contact-other/mustafa.webp",
      },
    ],
  },
  {
    id: "human-resources",
    label: "Human Resources",
    members: [
      {
        name: "Mr. Syed Mustafa",
        role: "Board Member",
        image: "/about-contact-other/mustafa.webp",
      },
    ],
  },
  {
    id: "learning-support",
    label: "Learning Support Management",
    members: [
      {
        name: "Mr. Syed Mustafa",
        role: "Board Member",
        image: "/about-contact-other/mustafa.webp",
      },
    ],
  },
  {
    id: "sales-marketing",
    label: "Sales & Marketing",
    members: [
      {
        name: "Ms. Aiza",
        role: "Marketing Manager",
        image: "/about-contact-other/aiza.webp",
      },
    ],
  },
  {
    id: "academic",
    label: "Academic & Curriculum Management",
    members: [
      {
        name: "Ms. Rajeswarry A/P Gunasundram",
        role: "Academic Manager",
        image: "/about-contact-other/rajes.png",
      },
    ],
  },
  {
    id: "it-management",
    label: "IT Management",
    members: [
      {
        name: "Mr. Riyas Al Mohamed",
        role: "IT Management Lead",
        image: "/about-contact-other/riyas.png",
      },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    members: [],
  },
];

export default function AboutUsClient() {
  const defaultCategory =
    teamCategories.find((category) => category.members.length > 0)?.id ??
    teamCategories[0].id;
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const activeTeam =
    teamCategories.find((category) => category.id === activeCategory) ??
    teamCategories[0];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden" id="our-team">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-red-100/50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 lg:px-20 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#d81f26] uppercase mb-3">
            Meet Our Team
          </h2>
          <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            The Minds Behind Edusphere
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our diverse leadership and specialist teams are dedicated to guiding
            students toward a brighter future.
          </p>
        </div>

        {/* Categories Navigation */}
        <div className="mb-12">
          <div
            className="flex flex-nowrap md:flex-wrap items-center gap-3 overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {teamCategories.map((category) => {
              const isActive = category.id === activeCategory;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                        px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0
                        ${
                          isActive
                            ? "bg-[#d81f26] text-white shadow-lg shadow-red-200 transform scale-105"
                            : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-gray-300"
                        }
                    `}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Members Grid */}
        <div className="min-h-[300px]" key={activeCategory}>
          {activeTeam.members.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {activeTeam.members.map((member, index) => (
                <div
                  key={`${activeTeam.id}-${member.name}-${index}`}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative w-40 h-40 mb-6 rounded-full p-1 bg-gradient-to-tr from-gray-100 to-gray-200 group-hover:from-red-100 group-hover:to-orange-100 transition-colors">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 160px, 200px"
                      />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#d81f26] transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4 animate-bounce">
                <Users size={32} />
              </div>
              <p className="text-xl text-gray-900 font-medium mb-2">
                Team members coming soon
              </p>
              <p className="text-gray-500 max-w-md mx-auto">
                We are currently updating our {activeTeam.label} team list. Please
                check back shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
