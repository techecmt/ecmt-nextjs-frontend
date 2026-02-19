"use client";

import { useEffect, useState, useRef } from "react";

type StatCardProps = {
  value: string;
  label: string;
  color: string;
  duration?: number;
};

const StatCard = ({ value, label, color, duration = 2000 }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Extract number from value (e.g., "3,000+" -> 3000)
  const targetNumber = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9,]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * targetNumber));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetNumber, duration]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-center justify-center p-6 md:p-8 hover:scale-105 transition-transform duration-300"
    >
      <div
        className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-3 ${color}`}
      >
        {formatNumber(count)}
        {suffix}
      </div>
      <div className="text-gray-700 text-xs md:text-sm font-semibold tracking-wider uppercase">
        {label}
      </div>
    </div>
  );
};

const stats = [
  { value: "3,000+", label: "Student Enrolled", color: "text-[#EE4A62]" },
  { value: "1,500+", label: "Class Completed", color: "text-[#1AB69D]" },
  { value: "25+", label: "Top Instructors", color: "text-[#7C3AED]" },
  { value: "81%", label: "Satisfaction Rate", color: "text-[#DC2626]" },
];

export default function ScoreCard() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Dots - Top Left */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern
              id="dots-teal"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="#1AB69D" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dots-teal)" />
        </svg>
      </div>

      {/* Decorative Dots - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern
              id="dots-yellow"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="#F59E0B" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dots-yellow)" />
        </svg>
      </div>

      {/* Decorative Arc - Top Left */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 w-24 h-24 md:w-32 md:h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M 90 50 A 40 40 0 0 1 50 90"
            fill="none"
            stroke="#EE4A62"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="5 5"
          />
        </svg>
      </div>

      {/* Decorative Arc - Bottom Right */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-24 h-24 md:w-32 md:h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M 10 50 A 40 40 0 0 0 50 10"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Stats Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  color={stat.color}
                  duration={2000}
                />
              ))}
            </div>
          </div>

          {/* Optional Caption */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              Join thousands of successful students and professionals who have
              transformed their careers with us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
