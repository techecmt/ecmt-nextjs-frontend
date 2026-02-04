import React from "react";
import Image from "next/image";
import { CheckCircle, Award, Users } from "lucide-react";

export default function AboutUs() {
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
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                 {/* Placeholder for "edusphere wsq courses" or main about image */}
                 <Image 
                    src="/wsq-images/WsqCoursePageHero.png" 
                    alt="Edusphere Campus" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                 />
              </div>
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

      {/* Management Members */}
      <section className="py-16 bg-gray-50">
         <div className="container mx-auto px-4 lg:px-20 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">Management Members</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Member 1 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300">
                    <div className="h-64 overflow-hidden relative bg-gray-200">
                        {/* "study in singapore for international students" placeholder */}
                        <Image 
                             src="/homepage/Registration.webp"
                             alt="Mr. Aziz Aboobacker"
                             fill
                             className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-6 text-center">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Mr. Aziz Aboobacker</h3>
                        <p className="text-[#d81f26] text-sm font-medium uppercase">Director</p>
                    </div>
                </div>

                {/* Member 2 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300">
                    <div className="h-64 overflow-hidden relative bg-gray-200">
                        {/* "Diploma in Logistics..." placeholder */}
                        <Image 
                             src="/homepage/dlscm.jpg" 
                             alt="Mr. Syed Mustafa"
                             fill
                             className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-6 text-center">
                         <h3 className="text-lg font-bold text-gray-900 mb-1">Mr. Syed Mustafa</h3>
                         <p className="text-[#d81f26] text-sm font-medium uppercase">Chief Executive Officer</p>
                    </div>
                </div>

                {/* Member 3 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300">
                    <div className="h-64 overflow-hidden relative bg-gray-200">
                        {/* "Advanced Diploma in Nursing Aide" - Using Tahir's photo since he is the person */}
                         <Image 
                             src="/about-contact-other/Tahirdp.webp" 
                             alt="Mr. Mohamed Tahir"
                             fill
                             className="object-cover group-hover:scale-110 transition-transform duration-500 object-top"
                        />
                    </div>
                    <div className="p-6 text-center">
                         <h3 className="text-lg font-bold text-gray-900 mb-1">Mr. Mohamed Tahir</h3>
                         <p className="text-[#d81f26] text-sm font-medium uppercase">Director / PEI Manager</p>
                    </div>
                </div>

                {/* Member 4 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300">
                    <div className="h-64 overflow-hidden relative bg-gray-200">
                        {/* "Diploma in Business Administration" placeholder */}
                        <Image 
                             src="/homepage/dipbusiness_adminstartion.webp" 
                             alt="Ms. Aiza"
                             fill
                             className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-6 text-center">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Ms. Aiza</h3>
                        <p className="text-[#d81f26] text-sm font-medium uppercase">Marketing Manager</p>
                    </div>
                </div>

            </div>
         </div>
      </section>
    </div>
  );
}
