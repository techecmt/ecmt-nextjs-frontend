"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle, Award, Users, ChevronDown, ChevronRight } from "lucide-react";

const teamCategories = [
  
    {
        id: "management",
        label: "Management",
        members: [
            {
                name: "Mr. Aziz Aboobacker",
                role: "Director",
                image: "/about-contact-other/sithiq.webp",
            },
            {
                name: "Mr. Syed Mustafa",
                role: "Board Member",
                image: "/about-contact-other/mustafa.webp",
            },
            {
                name: "Mr. Mohamed Tahir",
                role: "Director / CEO",
                image: "/about-contact-other/Tahirdp.webp",
            },
            {
                name: "Ms. Aiza",
                role: "Marketing Manager",
                image: "/about-contact-other/aiza.webp",
            },
        ],
    },
    {
        id: "quality",
        label: "Quality Assurance and Compliance",
        members: [{
                name: "Mr. Syed Mustafa",
                role: "Board Member",
                image: "/about-contact-other/mustafa.webp",
            }],
    },
    {
        id: "human-resources",
        label: "Human Resources",
        members: [{
                name: "Mr. Syed Mustafa",
                role: "Board Member",
                image: "/about-contact-other/mustafa.webp",
            }],
    },
    {
        id: "learning-support",
        label: "Learning Support Management",
        members: [{
                name: "Mr. Syed Mustafa",
                role: "Board Member",
                image: "/about-contact-other/mustafa.webp   ",
            }],
    },
    {
        id: "sales-marketing",
        label: "Sales & Marketing",
        members: [{
                name: "Ms. Aiza",
                role: "Marketing Manager",
                image: "/about-contact-other/aiza.webp",
            }],
    },
    {
        id: "academic",
        label: "Academic & Curriculum Management",
        members: [{
                name: "Mr. Syed Mustafa",
                role: "Board Member",
                image: "/about-contact-other/mustafa.webp",
            }],
    },
    {
        id: "it-management",
        label: "IT Management",
        members: [{
                name: "Mr. Riyas Al Mohamed",
                role: "IT Management Lead",
                image: "/about-contact-other/riyas.png",
            }],
    },
    {
        id: "finance",
        label: "Finance",
        members: [],
    },
    
];

export default function AboutUs() {
    const defaultCategory =
        teamCategories.find((category) => category.members.length > 0)?.id ??
        teamCategories[0].id;
    const [activeCategory, setActiveCategory] = useState(defaultCategory);
    const activeTeam =
        teamCategories.find((category) => category.id === activeCategory) ??
        teamCategories[0];

  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute top-0 right-0 -z-10 opacity-20">
            <Image src="/brand/shape-04.png" alt="" width={300} height={300} />
        </div>
        <div className="container mx-auto px-4 lg:px-20 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                ABOUT US
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Edusphere College of Management and Technology was founded on the
                principle that education can change the world. It is our goal to
                give every student that chooses Edusphere College the chance to
                change their world and master their future.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Edusphere is operated by a team of education professionals from the
                industry with extensive years of experience in Managing and Teaching
                in Singapore and South East Asia regions, who believe that
                opportunity is the greatest gift one can receive and education is
                your passport to a world of possibilities.
              </p>
            </div>
            <div className="relative">
              
              {/* Decorative shapes */}
               <div className="absolute -bottom-10 -left-10 z-0 opacity-30">
                 <Image src="/brand/shape-02.png" alt="" width={150} height={150} />
               </div>
               <div className="absolute -top-10 -right-10 z-0 opacity-30">
                 <Image src="/brand/shape-05.png" alt="" width={100} height={100} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Edusphere */}
      <section className="py-16 bg-gray-50 relative">
        <div className="absolute top-10 left-5 opacity-10">
             <Image src="/brand/shape-01.png" alt="" width={200} height={200} />
        </div>
        <div className="container mx-auto px-4 lg:px-20 max-w-7xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-sm font-bold tracking-widest text-[#d81f26] uppercase mb-2">Why Choose Edusphere</h2>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">“A new world of work needs a new way of learning”</h3>
                <p className="text-gray-600 mb-6">
                    Education is changing and Edusphere College is changing with it, so our students can find success in a world that’s moving faster than ever before. At EDUSPHERE COLLEGE, we nurture and guide individual students as part of a community so they are confident and equipped to navigate their way in the future world of new jobs and ways of working.
                </p>
                <p className="text-gray-600 font-medium">
                    To do this, we must be responsive, celebrate and encourage connectivity, creativity and collaboration, and be open to new ways of doing things.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="bg-white p-8 rounded-xl shadow-md text-center hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#d81f26]">
                        <Award size={32} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">High Quality Courses</h4>
                    <p className="text-gray-500 text-sm">Top-tier curriculum designed for modern industry needs.</p>
                </div>
                {/* Feature 2 */}
                <div className="bg-white p-8 rounded-xl shadow-md text-center hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                        <CheckCircle size={32} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Valuable Courses</h4>
                    <p className="text-gray-500 text-sm">Skills that translate directly to career growth and opportunities.</p>
                </div>
                {/* Feature 3 */}
                <div className="bg-white p-8 rounded-xl shadow-md text-center hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                        <Users size={32} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Expert Instructors</h4>
                    <p className="text-gray-500 text-sm">Learn from professionals with real-world industry experience.</p>
                </div>
            </div>
        </div>
      </section>

      {/* CEO Message / Our Manager */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-20 max-w-7xl">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 relative h-96 lg:h-auto">
                        <Image 
                            src="/about-contact-other/Tahirdp.webp" 
                            alt="Mr. Samsudeen Mohamed Tahir" 
                            fill
                            className="object-cover object-top"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-none"></div>
                         <div className="absolute bottom-4 left-4 text-white lg:hidden">
                            <p className="font-bold text-lg">Mr. Samsudeen Mohamed Tahir</p>
                            <p className="text-sm opacity-90">CEO/ Director / PEI Manager</p>
                         </div>
                    </div>
                    <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="mb-6">
                            <h2 className="text-sm font-bold tracking-widest text-[#d81f26] uppercase mb-1">Our Manager</h2>
                            <h3 className="text-3xl font-bold text-gray-900">A Message from the CEO & Director</h3>
                        </div>
                        
                        <div className="space-y-4 text-gray-600 italic text-lg leading-relaxed mb-8 border-l-4 border-[#d81f26] pl-6">
                            <p>“At Edusphere, we believe education is more than enrolment numbers. It is about trust, relationships, and long-term impact.</p>
                            <p>If a student enrols once, we have made a sale.<br/>
                            If a student stays until graduation, we have earned trust.<br/>
                            If a student recommends Edusphere to others, we have built a reputation.</p>
                            <p>That is why we do not focus only on enrolments. We focus on student relationships, learning journeys, and career outcomes. This belief guides every decision we make from admissions to training, from support to graduation.</p>
                            <p>That is how great colleges grow.<br/>
                            That is how Edusphere builds its legacy.”</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-gray-900">Mr. Samsudeen Mohamed Tahir</h4>
                            <p className="text-[#d81f26] font-medium">CEO/ Director / PEI Manager</p>
                            <div className="mt-2 text-sm text-gray-500">
                                <p>Bachelor of Mechanical Engineering</p>
                                <p>Anna University, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                </section>

      {/* Our Team Section */}
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
              Our diverse leadership and specialist teams are dedicated to guiding students toward a brighter future.
            </p>
          </div>

          {/* Categories Navigation */}
          <div className="mb-12">
            <div 
                className="flex flex-nowrap md:flex-wrap items-center gap-3 overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {teamCategories.map((category) => {
                const isActive = category.id === activeCategory;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`
                        px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0
                        ${isActive 
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
                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#d81f26] transition-colors">{member.name}</h4>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{member.role}</p>
                    </div>
                  ))}
                </div>
             ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4 animate-bounce">
                        <Users size={32} />
                    </div>
                    <p className="text-xl text-gray-900 font-medium mb-2">Team members coming soon</p>
                    <p className="text-gray-500 max-w-md mx-auto">
                        We are currently updating our {activeTeam.label} team list. Please check back shortly.
                    </p>
                </div>
             )}
          </div>
          
        </div>
      </section>
        </div>
    );
}
