'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
import { wsqCourses } from '../data/wsq-courses';

const menuItems = [
  { name: 'Home', hasDropdown: false, href: '/' },
  { name: 'Diploma Courses', hasDropdown: true, href: '#' },
  { name: 'WSQ Courses', hasDropdown: true, href: '#' },
  { name: 'SFARC Courses', hasDropdown: true, href: '#' },
  { name: 'Certificate Courses', hasDropdown: false, href: '/certificate-courses-in-singapore' },
  { name: 'About Us', hasDropdown: false, href: '/about-us' },
  { name: 'Students Affair', hasDropdown: true, href: '#' },
];

const studentAffairsLinks = [
  { label: 'Campus and Facilities', href: '/campus-and-facilities' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Our Teachers', href: '/our-teachers' },
  { label: 'Essential Resources and Support for Students', href: '/essential-resources-and-support-for-students' },
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
              <Link
                href={item.href}
                className={`font-poppins transition-colors flex items-center gap-1 ${
                  item.name === 'Home'
                    ? 'text-[#1AB69D]'
                    : 'text-[#202020] hover:text-[#1AB69D]'
                }`}
              >
                {item.name}
                {item.hasDropdown && <FaChevronDown className="w-3 h-3" />}
              </Link>
              {/* Show MegaMenu for Diploma, SFARC, Certificate; dedicated dropdown for WSQ */}
              {['Diploma Courses', 'SFARC Courses', 'Certificate Courses'].includes(item.name) && openMenu === item.name && (
                <MegaMenu
                  onMouseEnter={() => setOpenMenu(item.name)}
                  onMouseLeave={() => setOpenMenu(null)}
                  menuType={item.name}
                />
              )}
              {item.name === 'WSQ Courses' && openMenu === 'WSQ Courses' && (
                <WsqDropdown
                  onMouseEnter={() => setOpenMenu('WSQ Courses')}
                  onMouseLeave={() => setOpenMenu(null)}
                />
              )}
              {item.name === 'Students Affair' && openMenu === 'Students Affair' && (
                <StudentAffairsDropdown
                  onMouseEnter={() => setOpenMenu('Students Affair')}
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
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
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

                      {/* Show MobileCoursesSection for Diploma Courses, WSQ Courses, SFARC Courses, Certificate Courses */}
                      {['Diploma Courses', 'WSQ Courses', 'SFARC Courses', 'Certificate Courses'].includes(item.name) &&
                        mobileAccordion === item.name && (
                          <MobileCoursesSection menuType={item.name} />
                        )}
                      {item.name === 'Students Affair' && mobileAccordion === 'Students Affair' && (
                        <StudentAffairsMobileList />
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
  menuType,
}: {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  menuType: string;
}) {
  const schoolIcons: { [key: string]: React.ReactNode } = {
    'School of Caregiving': <FaHeartbeat className="w-5 h-5" />,
    'School of Hospitality': <FaHotel className="w-5 h-5" />,
    'School of IT': <FaLaptopCode className="w-5 h-5" />,
    'School of Engineering': <FaTools className="w-5 h-5" />,
    'School of Business': <FaBriefcase className="w-5 h-5" />,
    'E-Learning Courses': <FaGraduationCap className="w-5 h-5" />,
  };

  // Filter courseData based on menuType
    let filteredSchools: typeof courseData = [];
  if (menuType === 'Diploma Courses') {
    filteredSchools = courseData.filter(
      school => school.title.includes('Caregiving') ||
        school.title.includes('Hospitality') ||
        school.title.includes('IT') ||
        school.title.includes('Engineering') ||
        school.title.includes('Business') ||
        school.title.includes('E-Learning')
    );
  } else if (menuType === 'WSQ Courses') {
    filteredSchools = courseData.filter(school => school.title.includes('WSQ'));
  } else if (menuType === 'SFARC Courses') {
    filteredSchools = courseData.filter(school => school.title.includes('SFARC'));
  } else if (menuType === 'Certificate Courses') {
    filteredSchools = courseData.filter(school => school.title.includes('Certificate'));
  }

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[95vw] max-w-[1100px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-white shadow-lg rounded-lg border border-gray-100 max-h-[80vh] overflow-y-auto">
        <div className="grid grid-cols-3 gap-6 p-6 lg:gap-8 lg:p-8">
          {filteredSchools.length > 0 ? (
            filteredSchools.map((school, idx) => (
              <CourseSection
                key={idx}
                school={school}
                icon={schoolIcons[school.title] ?? null}
              />
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500">No courses found.</div>
          )}
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
  icon: React.ReactNode | null;
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

function CourseCard({ title, elearning, url }: any) {
  const href = url || '/contact';
  return (
    <Link
      href={href}
      className="group flex items-start gap-2 py-2 px-1 hover:bg-gray-50 rounded transition-colors"
    >
      <span className="text-[#1AB69D] mt-0.5">›</span>
      <span className="text-sm text-gray-700 group-hover:text-[#1AB69D] transition-colors leading-snug">
        {title}
      </span>
    </Link>
  );
}

/* ================= WSQ DROPDOWN (DESKTOP) ================= */

function WsqDropdown({
  onMouseEnter,
  onMouseLeave,
}: {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const wsqList = wsqCourses;

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[360px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-white shadow-lg rounded-lg border border-gray-100 max-h-[70vh] overflow-y-auto">
        <div className="p-4">
          <h3 className="text-base font-bold mb-2 text-[#1AB69D]">WSQ Courses</h3>
          <div className="flex flex-col gap-2">
            {wsqList.length > 0 ? (
              wsqList.map((course, idx) => (
                <Link
                  key={idx}
                  href={course.href || '/contact'}
                  className="flex items-center gap-2 py-2 px-2 hover:bg-gray-50 rounded transition-colors"
                >
                  <span className="text-[#1AB69D]">›</span>
                  <span className="text-sm text-gray-700 transition-colors leading-snug hover:text-[#1AB69D]">
                    {course.title}
                  </span>
                </Link>
              ))
            ) : (
              <div className="text-sm text-gray-500">No WSQ courses found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= STUDENT AFFAIRS DROPDOWN (DESKTOP) ================= */

function StudentAffairsDropdown({
  onMouseEnter,
  onMouseLeave,
}: {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[320px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-white shadow-lg rounded-lg border border-gray-100 overflow-hidden">
        <div className="p-4 flex flex-col gap-2">
          {studentAffairsLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 py-2 px-2 hover:bg-gray-50 rounded transition-colors"
            >
              <span className="text-[#1AB69D]">›</span>
              <span className="text-sm text-gray-700 leading-snug hover:text-[#1AB69D]">
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= STUDENT AFFAIRS (MOBILE) ================= */

function StudentAffairsMobileList() {
  return (
    <div className="mt-3 space-y-2">
      <div className="border border-gray-100 rounded-lg overflow-hidden">
        <div className="px-3 pb-3 pt-3 bg-gray-50/50">
          <div className="space-y-1">
            {studentAffairsLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-start gap-2 py-2 px-2 hover:bg-white rounded transition-colors"
              >
                <span className="text-[#1AB69D] mt-0.5 text-sm">›</span>
                <span className="text-xs text-gray-700 leading-snug">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= MOBILE COURSES ================= */

function MobileCoursesSection({ menuType }: { menuType: string }) {
  const [expandedSchool, setExpandedSchool] = React.useState<string | null>(null);

  const schoolIcons: { [key: string]: React.ReactNode } = {
    'School of Caregiving': <FaHeartbeat className="w-4 h-4" />,
    'School of Hospitality': <FaHotel className="w-4 h-4" />,
    'School of IT': <FaLaptopCode className="w-4 h-4" />,
    'School of Engineering': <FaTools className="w-4 h-4" />,
    'School of Business': <FaBriefcase className="w-4 h-4" />,
    'E-Learning Courses': <FaGraduationCap className="w-4 h-4" />,
  };

  // WSQ uses flat list; others use grouped courseData
  if (menuType === 'WSQ Courses') {
    const wsqList = wsqCourses;
    return (
      <div className="mt-3 space-y-2">
        <div className="border border-gray-100 rounded-lg overflow-hidden">
          <div className="px-3 pb-3 pt-3 bg-gray-50/50">
            <div className="space-y-1">
              {wsqList.length > 0 ? (
                wsqList.map((course) => (
                  <Link
                    key={course.id}
                    href={course.href || '/contact'}
                    className="flex items-start gap-2 py-2 px-2 hover:bg-white rounded transition-colors"
                  >
                    <span className="text-[#1AB69D] mt-0.5 text-sm">›</span>
                    <span className="text-xs text-gray-700 leading-snug">
                      {course.title}
                    </span>
                  </Link>
                ))
              ) : (
                <div className="text-xs text-gray-500">No WSQ courses found.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Filter courseData based on menuType
  let filteredSchools: typeof courseData = [];
  if (menuType === 'Diploma Courses') {
    filteredSchools = courseData.filter(
      school => school.title.includes('Caregiving') ||
        school.title.includes('Hospitality') ||
        school.title.includes('IT') ||
        school.title.includes('Engineering') ||
        school.title.includes('E-Learning')
    );
  } else if (menuType === 'SFARC Courses') {
    filteredSchools = courseData.filter(school => school.title.includes('SFARC'));
  } else if (menuType === 'Certificate Courses') {
    filteredSchools = courseData.filter(school => school.title.includes('Certificate'));
  }

  return (
    <div className="mt-3 space-y-2">
      {filteredSchools.length > 0 ? (
        filteredSchools.map((school, idx) => {
          const isExpanded = expandedSchool === school.title;
          return (
            <div key={idx} className="border border-gray-100 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedSchool(isExpanded ? null : school.title)}
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
                      <Link
                        key={i}
                        href={course.url || '/contact'}
                        className="flex items-start gap-2 py-2 px-2 hover:bg-white rounded transition-colors"
                      >
                        <span className="text-[#1AB69D] mt-0.5 text-sm">›</span>
                        <span className="text-xs text-gray-700 leading-snug">
                          {course.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })
      ) : (
        <div className="col-span-3 text-center text-gray-500">No courses found.</div>
      )}
    </div>
  );
}
