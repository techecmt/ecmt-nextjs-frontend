import React from 'react';
import Button from './Button';

export default function Heroytb() {
  return (
    <section className="pt-24 pb-12 px-8 relative overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/6jct1CQVtLo?autoplay=1&mute=1&loop=1&playlist=6jct1CQVtLo&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playsinline=1"
          title="Background video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ border: 0 }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center text-center relative z-10 min-h-[60vh]">
        <div className="space-y-6 max-w-3xl">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1AB69D]/20 text-[#1AB69D] rounded-full text-sm font-semibold animate-fadeIn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
              Excellence in Education
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white font-spartan leading-tight">
            Welcome to our{' '}
            <span className="text-[#EE4A62] relative inline-block">
              College
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#EE4A62]/20" viewBox="0 0 200 12" fill="none">
                <path d="M0 8 Q50 2, 100 8 T200 8" stroke="currentColor" strokeWidth="4" fill="none"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-white/90 text-lg font-poppins leading-relaxed mx-auto max-w-xl">
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
