import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { FaUserNurse, FaHotel, FaTools, FaCode } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-gray-50 to-white pt-24 pb-12 px-8 relative overflow-hidden">
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
          <div className="relative z-10">
            <div className="relative w-full max-w-md mx-auto mt-10 lg:mt-16">
              <div className="aspect-3/4 sm:aspect-4/5 md:aspect-3/4 relative">
                <Image
                  src="/homepage/homepageherosectionimage.webp"
                  alt="Student with books and backpack"
                  fill
                  className="object-contain object-center"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px"
                />
              </div>
            </div>

            {/* Floating badge removed */}
          </div>
        </div>
      </div>

      {/* Industries Section (Compact) */}
      <div className="relative z-20 -mt-4 bg-linear-to-br from-[#1AB69D] to-[#16a085] py-8 px-8">
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
