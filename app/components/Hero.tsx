import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { FaUserNurse, FaHotel, FaTools, FaCode } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-16 px-8 relative overflow-hidden">
      {/* Animated background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1AB69D]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#EE4A62]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 group">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1AB69D]/10 text-[#1AB69D] rounded-full text-sm font-semibold animate-fadeIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
              Excellence in Education
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#202020] font-spartan leading-tight">
            Welcome to our{' '}
            <span className="text-[#EE4A62] relative inline-block group-hover:scale-105 transition-transform duration-300">
              College
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#EE4A62]/20" viewBox="0 0 200 12" fill="none">
                <path d="M0 8 Q50 2, 100 8 T200 8" stroke="currentColor" strokeWidth="4" fill="none"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-[#202020] text-lg font-poppins leading-relaxed max-w-xl">
            Education is changing and Edusphere College is changing with it, so our students can find success in a world that's moving faster than ever before.
          </p>

          {/* Interactive stats */}
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="group/stat cursor-pointer">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-[#1AB69D]/10 rounded-full flex items-center justify-center group-hover/stat:bg-[#1AB69D] transition-colors">
                  <svg className="w-6 h-6 text-[#1AB69D] group-hover/stat:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">200+</div>
                  <div className="text-sm text-gray-500">Students</div>
                </div>
              </div>
            </div>

            <div className="group/stat cursor-pointer">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-[#EE4A62]/10 rounded-full flex items-center justify-center group-hover/stat:bg-[#EE4A62] transition-colors">
                  <svg className="w-6 h-6 text-[#EE4A62] group-hover/stat:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">6</div>
                  <div className="text-sm text-gray-500">Schools</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Button>
              Get Started →
            </Button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative group/image">
          {/* Interactive floating elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#1AB69D] rounded-full opacity-20 group-hover/image:scale-150 transition-transform duration-700 ease-out"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#EE4A62] rounded-full opacity-20 group-hover/image:scale-150 transition-transform duration-700 ease-out" style={{ transitionDelay: '100ms' }}></div>

          {/* Main Image Container */}
          <div className="relative w-full max-w-sm mx-auto lg:max-w-sm">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg">
              <div className="aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] relative">
                <Image
                  src="/homepage/homepageherosectionimage.webp"
                  alt="Student with books and backpack"
                  fill
                  className="object-cover object-top group-hover/image:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 group-hover/image:translate-y-[-8px] transition-transform duration-300 cursor-pointer hover:scale-110">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1AB69D] to-[#16a890] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">100%</div>
                  <div className="text-xs text-gray-500">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section (Compact) */}
      <div className="bg-gradient-to-br from-[#1AB69D] to-[#16a085] py-8 mt-12 -mx-8 relative overflow-hidden">
        {/* Subtle background circles */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-4 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-white opacity-4 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-1 font-spartan">Industries Where Our Students Were Placed</h2>
              <p className="text-white/90 text-sm font-poppins max-w-xl">Our graduates work across diverse sectors and leading organizations.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {/* Card */}
            <div className="bg-white/8 rounded-lg p-3 flex flex-col items-center text-center group cursor-pointer transition-all duration-200 hover:bg-white/20 hover:scale-102">
              <div className="w-14 h-14 mb-2 flex items-center justify-center text-white text-2xl bg-white/10 rounded-full">
                <FaUserNurse />
              </div>
              <h3 className="text-white text-sm font-semibold font-poppins">Nursing Homes</h3>
            </div>

            <div className="bg-white/8 rounded-lg p-3 flex flex-col items-center text-center group cursor-pointer transition-all duration-200 hover:bg-white/20 hover:scale-102">
              <div className="w-14 h-14 mb-2 flex items-center justify-center text-white text-2xl bg-white/10 rounded-full">
                <FaHotel />
              </div>
              <h3 className="text-white text-sm font-semibold font-poppins">Hotels & Restaurants</h3>
            </div>

            <div className="bg-white/8 rounded-lg p-3 flex flex-col items-center text-center group cursor-pointer transition-all duration-200 hover:bg-white/20 hover:scale-102">
              <div className="w-14 h-14 mb-2 flex items-center justify-center text-white text-2xl bg-white/10 rounded-full">
                <FaTools />
              </div>
              <h3 className="text-white text-sm font-semibold font-poppins">Engineering</h3>
            </div>

            <div className="bg-white/8 rounded-lg p-3 flex flex-col items-center text-center group cursor-pointer transition-all duration-200 hover:bg-white/20 hover:scale-102">
              <div className="w-14 h-14 mb-2 flex items-center justify-center text-white text-2xl bg-white/10 rounded-full">
                <FaCode />
              </div>
              <h3 className="text-white text-sm font-semibold font-poppins">Tech Firms</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
