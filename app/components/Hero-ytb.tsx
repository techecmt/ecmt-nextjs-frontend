import React from 'react';
import Button from './Button';

export default function Heroytb() {
  return (
    <section className="pt-24 pb-12 px-8 overflow-hidden">
      {/* Video Title */}
      <div className="container mx-auto max-w-5xl text-center mb-8">
        <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#EE4A62]/10 via-[#EE4A62]/15 to-[#1AB69D]/10 text-[#EE4A62] rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-5 border border-[#EE4A62]/20 shadow-sm backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EE4A62] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EE4A62]"></span>
          </span>
          Featured Highlight
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        </span>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-spartan leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
            Graduation Ceremony
          </span>{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#1AB69D] to-[#0d8a76] bg-clip-text text-transparent">
              2026
            </span>
            <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#1AB69D]/40" viewBox="0 0 100 8" fill="none" preserveAspectRatio="none">
              <path d="M0 4 Q25 1, 50 4 T100 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
        </h2>

        <div className="flex items-center justify-center gap-3 mt-3">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#EE4A62]/40"></span>
          <span className="text-[#EE4A62] dark:text-[#EE4A62] text-sm md:text-base font-semibold font-poppins tracking-widest uppercase">
            Part 01
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#EE4A62]/40"></span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg font-poppins mt-4 max-w-2xl mx-auto leading-relaxed">
          Celebrating the achievements and bright futures of our graduating class at{' '}
          <span className="font-semibold text-gray-800 dark:text-gray-100">Edusphere College</span>
        </p>
      </div>

      {/* YouTube Video */}
      <div className="relative w-full max-w-5xl mx-auto aspect-video overflow-hidden rounded-xl shadow-2xl">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/6jct1CQVtLo?autoplay=1&mute=1&loop=1&playlist=6jct1CQVtLo&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playsinline=1"
          title="Edusphere College Graduation Ceremony 2026 - Part 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ border: 0 }}
        />
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center text-center mt-10">
        <div className="space-y-6 max-w-3xl">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1AB69D]/20 text-[#1AB69D] rounded-full text-sm font-semibold animate-fadeIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
              Excellence in Education
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white font-spartan leading-tight">
            Welcome to our{' '}
            <span className="text-[#EE4A62] relative inline-block">
              College
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#EE4A62]/20" viewBox="0 0 200 12" fill="none">
                <path d="M0 8 Q50 2, 100 8 T200 8" stroke="currentColor" strokeWidth="4" fill="none"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg font-poppins leading-relaxed mx-auto max-w-xl">
            Education is changing and Edusphere College is changing with it, so our students can find success in a world that&apos;s moving faster than ever before.
          </p>

          <div className="pt-2">
            <Button>
              <a href="/courses">Get Started →</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
