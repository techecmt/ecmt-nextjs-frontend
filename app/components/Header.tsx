'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { 
  FaHeartbeat, 
  FaHotel, 
  FaLaptopCode, 
  FaTools, 
  FaBriefcase, 
  FaGraduationCap 
} from 'react-icons/fa';
import { courseData } from '../data/courses';

const menuItems = [
  { name: 'Home', hasDropdown: false, href: '/' },
  { name: 'Courses', hasDropdown: true, href: '#' },
  { name: 'Student Corner', hasDropdown: true, href: '#' },
  { name: 'Policies', hasDropdown: true, href: '#' },
  { name: 'Careers', hasDropdown: true, href: '#' },
  { name: 'About Us', hasDropdown: true, href: '#' },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 overflow-visible">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 h-[72px]">
        
        {/* LOGO */}
        <div className="relative h-[72px] w-[220px] md:w-[260px] flex items-center">
          <Image
            src="/brand/Logo_png_high.png"
            alt="Edusphere College Logo"
            width={260}
            height={260}
            priority
            className="
              absolute
              top-1/2 -translate-y-1/2
              left-0
              object-contain
              w-[180px] h-[180px]
              md:w-[220px] md:h-[220px]
            "
          />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-2xl text-[#1AB69D]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setOpenMenu(item.name)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <a
                href={item.href}
                className={`font-poppins transition-colors flex items-center gap-1 ${
                  item.name === 'Home'
                    ? 'text-[#1AB69D]'
                    : 'text-[#202020] hover:text-[#1AB69D]'
                }`}
              >
                {item.name}
                {item.hasDropdown && <FaChevronDown className="w-3 h-3" />}
              </a>

              {item.name === 'Courses' && openMenu === 'Courses' && (
                <MegaMenu
                  onMouseEnter={() => setOpenMenu('Courses')}
                  onMouseLeave={() => setOpenMenu(null)}
                />
              )}
            </div>
          ))}
        </nav>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-white overflow-y-auto shadow-2xl">
            <nav className="p-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {!item.hasDropdown ? (
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setMobileAccordion(
                            mobileAccordion === item.name ? null : item.name
                          )
                        }
                        className="w-full flex justify-between items-center px-4 py-3 rounded-lg hover:bg-gray-50"
                      >
                        {item.name}
                        <FaChevronDown
                          className={`transition-transform ${
                            mobileAccordion === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {item.name === 'Courses' &&
                        mobileAccordion === 'Courses' && (
                          <MobileCoursesSection />
                        )}
                    </>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

/* ================= MEGA MENU ================= */

function MegaMenu({
  onMouseEnter,
  onMouseLeave,
}: {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const schoolIcons: { [key: string]: React.ReactNode } = {
    'School of Caregiving': <FaHeartbeat className="w-5 h-5" />,
    'School of Hospitality': <FaHotel className="w-5 h-5" />,
    'School of IT': <FaLaptopCode className="w-5 h-5" />,
    'School of Engineering': <FaTools className="w-5 h-5" />,
    'School of Business': <FaBriefcase className="w-5 h-5" />,
    'E-Learning Courses': <FaGraduationCap className="w-5 h-5" />,
  };

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[95vw] max-w-[1100px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-white shadow-lg rounded-lg border border-gray-100 max-h-[80vh] overflow-y-auto">
        <div className="grid grid-cols-3 gap-6 p-6 lg:gap-8 lg:p-8">
          {/* First 4 schools - single column each */}
          {courseData.slice(0, 4).map((school, idx) => (
            <CourseSection
              key={idx}
              school={school}
              icon={schoolIcons[school.title]}
            />
          ))}

          {/* Business school */}
          <CourseSection
            school={courseData[4]}
            icon={schoolIcons[courseData[4].title]}
          />

          {/* E-Learning - spans 2 columns */}
          <div className="col-span-2">
            <div className="mb-4 pb-3 border-b-2 border-[#EE4A62]">
              <div className="flex items-center gap-3">
                <div className="text-[#EE4A62]">
                  {schoolIcons[courseData[5].title]}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#EE4A62]">
                  {courseData[5].title}
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {courseData[5].courses.map((course, idx) => (
                <CourseCard key={idx} {...course} elearning={true} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= COURSE SECTIONS ================= */

function CourseSection({
  school,
  icon,
}: {
  school: any;
  icon: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-4 pb-3 border-b-2" style={{ borderColor: school.color }}>
        <div className="flex items-center gap-3">
          <div style={{ color: school.color }}>
            {icon}
          </div>
          <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: school.color }}>
            {school.title.replace('School of ', '')}
          </h3>
        </div>
      </div>
      <div className="space-y-2">
        {school.courses.map((course: any, idx: number) => (
          <CourseCard key={idx} {...course} />
        ))}
      </div>
    </div>
  );
}

function CourseCard({ title, elearning }: any) {
  return (
    <a
      href="#"
      className="group flex items-start gap-2 py-2 px-1 hover:bg-gray-50 rounded transition-colors"
    >
      <span className="text-[#1AB69D] mt-0.5">›</span>
      <span className="text-sm text-gray-700 group-hover:text-[#1AB69D] transition-colors leading-snug">
        {title}
      </span>
    </a>
  );
}

/* ================= MOBILE COURSES ================= */

function MobileCoursesSection() {
  const [expandedSchool, setExpandedSchool] = React.useState<string | null>(null);

  const schoolIcons: { [key: string]: React.ReactNode } = {
    'School of Caregiving': <FaHeartbeat className="w-4 h-4" />,
    'School of Hospitality': <FaHotel className="w-4 h-4" />,
    'School of IT': <FaLaptopCode className="w-4 h-4" />,
    'School of Engineering': <FaTools className="w-4 h-4" />,
    'School of Business': <FaBriefcase className="w-4 h-4" />,
    'E-Learning Courses': <FaGraduationCap className="w-4 h-4" />,
  };

  const toggleSchool = (schoolTitle: string) => {
    setExpandedSchool(expandedSchool === schoolTitle ? null : schoolTitle);
  };

  return (
    <div className="mt-3 space-y-2">
      {courseData.map((school, idx) => {
        const isExpanded = expandedSchool === school.title;
        return (
          <div key={idx} className="border border-gray-100 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSchool(school.title)}
              className="w-full flex items-center justify-between gap-2 p-3 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <div style={{ color: school.color }}>
                  {schoolIcons[school.title]}
                </div>
                <h3
                  className="text-xs font-bold uppercase tracking-wider text-left"
                  style={{ color: school.color }}
                >
                  {school.title.replace('School of ', '')}
                </h3>
              </div>
              <FaChevronDown
                className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                style={{ color: school.color }}
              />
            </button>
            
            {isExpanded && (
              <div className="px-3 pb-3 pt-1 border-t border-gray-100 bg-gray-50/50">
                <div className="space-y-1">
                  {school.courses.map((course: any, i: number) => (
                    <a
                      key={i}
                      href="#"
                      className="flex items-start gap-2 py-2 px-2 hover:bg-white rounded transition-colors"
                    >
                      <span className="text-[#1AB69D] mt-0.5 text-sm">›</span>
                      <span className="text-xs text-gray-700 leading-snug">
                        {course.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
