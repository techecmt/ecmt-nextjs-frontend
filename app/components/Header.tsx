'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';
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
  { name: 'About Us', hasDropdown: true, href: '/about-us' },
  { name: 'Students Affair', hasDropdown: true, href: '/students-affair' },
  { name: 'Diploma Courses', hasDropdown: true, href: '#' },
  { name: 'WSQ Courses', hasDropdown: true, href: '/wsq-courses' },
  { name: 'Certificate Courses', hasDropdown: false, href: '/certificate-courses-in-singapore' },
];

const aboutUsLinks = [
  { label: 'Who Are We', href: '/about-us' },
  { label: 'Our Team', href: '/about-us#our-team' },
  { label: 'Our Campus', href: '/campus-and-facilities' },
  { label: 'Our Teachers', href: '/our-teachers' },
  { label: 'Our A&E Board Members', href: '/about-us#academic-examination-board' },
  { label: 'Contact Us', href: '/contact-us' },
];

const studentAffairsFormsLinks = [
  { label: 'Course Evaluation Form', href: '/forms/course-evaluation-form' },
];

const studentAffairsLinks = [
  { label: 'Contact', href: '/contact-us' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Newsroom', href: '/newsroom' },
  { label: 'Fee Protection Scheme', href: '/fee-protection-scheme' },
  { label: 'Essential Resources and Support for Students', href: '/essential-resources-and-support-for-students' },
  { label: 'Student Contract', href: '/essential-resources-and-support-for-students#student-contract' },
  { label: 'Attendance Policy', href: '/essential-resources-and-support-for-students#attendance-policy' },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const original = document.body.style.overflow;
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = original || '';
    }
    return () => {
      document.body.style.overflow = original || '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-50 overflow-visible transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm border-b border-gray-100'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 h-[84px]">

        {/* LOGO — click to go Home */}
        <Link href="/" aria-label="Go to homepage" className="flex h-[84px] items-center shrink-0">
          <Image
            src="/brand/Logo_png_high.png"
            alt="Edusphere College Logo"
            width={1024}
            height={211}
            priority
            className="h-12 w-auto object-contain md:h-14"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-2xl text-[#1AB69D] p-2 -mr-2 rounded-lg hover:bg-[#1AB69D]/10 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setOpenMenu(item.name)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className={`
                  relative font-medium text-[0.875rem] tracking-wide px-3 py-2 rounded-lg
                  flex items-center gap-1.5 transition-all duration-200
                  after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px]
                  after:rounded-full after:transition-all after:duration-200
                  ${
                    openMenu === item.name
                      ? 'text-[#1AB69D] bg-[#1AB69D]/5 after:bg-[#1AB69D] after:opacity-100'
                      : 'text-[#2d2d2d] hover:text-[#1AB69D] hover:bg-[#1AB69D]/5 after:opacity-0 hover:after:opacity-100 after:bg-[#1AB69D]'
                  }
                `}
              >
                {item.name}
                {item.hasDropdown && (
                  <FaChevronDown
                    className={`w-2.5 h-2.5 transition-transform duration-200 ${
                      openMenu === item.name ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </Link>

              {item.name === 'Diploma Courses' && openMenu === item.name && (
                <MegaMenu
                  onMouseEnter={() => setOpenMenu(item.name)}
                  onMouseLeave={() => setOpenMenu(null)}
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
                  formsLinks={studentAffairsFormsLinks}
                  links={studentAffairsLinks}
                  onMouseEnter={() => setOpenMenu('Students Affair')}
                  onMouseLeave={() => setOpenMenu(null)}
                />
              )}
              {item.name === 'About Us' && openMenu === 'About Us' && (
                <SimpleLinksDropdown
                  links={aboutUsLinks}
                  onMouseEnter={() => setOpenMenu('About Us')}
                  onMouseLeave={() => setOpenMenu(null)}
                />
              )}
            </div>
          ))}

          {/* CTA Button */}
          <Link
            href="https://onlineportal.edusphere.edu.sg/login"
            className="ml-3 px-5 py-2 bg-[#1AB69D] text-white text-sm font-semibold rounded-full hover:bg-[#159b85] transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Student Portal
          </Link>
        </nav>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden fixed inset-x-0 top-[84px] bottom-0 bg-white overflow-y-auto overscroll-contain shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
          >
            <nav className="p-4 pb-10 space-y-1">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {!item.hasDropdown ? (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-xl font-medium text-[#2d2d2d] hover:bg-[#1AB69D]/8 hover:text-[#1AB69D] transition-colors"
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
                        className={`w-full flex justify-between items-center px-4 py-3 rounded-xl font-medium transition-colors ${
                          mobileAccordion === item.name
                            ? 'bg-[#1AB69D]/10 text-[#1AB69D]'
                            : 'text-[#2d2d2d] hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                        <FaChevronDown
                          className={`transition-transform duration-200 ${
                            mobileAccordion === item.name ? 'rotate-180 text-[#1AB69D]' : ''
                          }`}
                        />
                      </button>

                      {['Diploma Courses', 'WSQ Courses'].includes(item.name) &&
                        mobileAccordion === item.name && (
                          <MobileCoursesSection menuType={item.name} onLinkClick={() => setMobileMenuOpen(false)} />
                        )}
                      {item.name === 'Students Affair' && mobileAccordion === 'Students Affair' && (
                        <StudentAffairsMobileList
                          formsLinks={studentAffairsFormsLinks}
                          links={studentAffairsLinks}
                          onLinkClick={() => setMobileMenuOpen(false)}
                        />
                      )}
                      {item.name === 'About Us' && mobileAccordion === 'About Us' && (
                        <SimpleLinksMobileList links={aboutUsLinks} onLinkClick={() => setMobileMenuOpen(false)} />
                      )}
                    </>
                  )}
                </div>
              ))}

              <div className="pt-3 px-4">
                <Link
                  href="https://onlineportal.edusphere.edu.sg/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center py-3 bg-[#1AB69D] text-white font-semibold rounded-full hover:bg-[#159b85] transition-colors"
                >
                  Student Portal
                </Link>
              </div>
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
  const categoryIcons: { [key: string]: React.ReactNode } = {
    'Caregiving Courses': <FaHeartbeat className="w-5 h-5" />,
    'Hospitality Courses': <FaHotel className="w-5 h-5" />,
    'IT Courses': <FaLaptopCode className="w-5 h-5" />,
    'Engineering Courses': <FaTools className="w-5 h-5" />,
    'Business Courses': <FaBriefcase className="w-5 h-5" />,
    'E-Learning Courses': <FaGraduationCap className="w-5 h-5" />,
  };

  const filteredCategories = courseData.filter(
    category =>
      category.title.includes('Caregiving') ||
      category.title.includes('Hospitality') ||
      category.title.includes('IT') ||
      category.title.includes('Engineering') ||
      category.title.includes('Business') ||
      category.title.includes('E-Learning')
  );

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[95vw] max-w-[1100px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-white shadow-xl rounded-2xl border border-gray-100 max-h-[80vh] overflow-y-auto">
        <div className="grid grid-cols-3 gap-6 p-6 lg:gap-8 lg:p-8">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, idx) => (
              <CourseSection
                key={idx}
                category={category}
                icon={categoryIcons[category.title] ?? null}
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
  category,
  icon,
}: {
  category: any;
  icon: React.ReactNode | null;
}) {
  return (
    <div>
      <div className="mb-4 pb-3 border-b-2" style={{ borderColor: category.color }}>
        <div className="flex items-center gap-3">
          <div style={{ color: category.color }}>
            {icon}
          </div>
          <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: category.color }}>
            {category.title}
          </h3>
        </div>
      </div>
      <div className="space-y-2">
        {category.courses.map((course: any, idx: number) => (
          <CourseCard key={idx} {...course} />
        ))}
      </div>
    </div>
  );
}

function CourseCard({ title, elearning, isNew, url }: any) {
  const href = url || '/contact-us';
  return (
    <Link
      href={href}
      className="group flex items-start gap-2 py-2 px-1 hover:bg-gray-50 rounded transition-colors"
    >
      <span className="text-[#1AB69D] mt-0.5">›</span>
      <span className="text-sm text-gray-700 group-hover:text-[#1AB69D] transition-colors leading-snug">
        {title}
      </span>
      {isNew && (
        <span className="ml-1 shrink-0 self-center animate-pulse px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-[#EE4A62] text-white uppercase tracking-wide">
          New
        </span>
      )}
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
      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[360px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-white shadow-xl rounded-2xl border border-gray-100 max-h-[70vh] overflow-y-auto">
        <div className="p-5">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#1AB69D] mb-3 px-1">WSQ Courses</h3>
          <div className="flex flex-col gap-0.5">
            {wsqList.length > 0 ? (
              wsqList.map((course, idx) => (
                <Link
                  key={idx}
                  href={course.href || '/contact-us'}
                  className="flex items-center gap-2 py-2 px-2 hover:bg-[#1AB69D]/6 rounded-lg transition-colors group"
                >
                  <span className="text-[#1AB69D] font-bold text-base leading-none">›</span>
                  <span className="text-sm text-gray-700 group-hover:text-[#1AB69D] transition-colors leading-snug">
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

/* ================= STUDENTS AFFAIR (FORMS + LINKS) ================= */

function StudentAffairsDropdown({
  formsLinks,
  links,
  onMouseEnter,
  onMouseLeave,
}: {
  formsLinks: { label: string; href: string }[];
  links: { label: string; href: string }[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const linkClasses =
    'flex items-center gap-2 py-2 px-2 hover:bg-[#1AB69D]/6 rounded-lg transition-colors group';

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-60"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex rounded-2xl border border-gray-100 bg-white shadow-xl">
        {/* Primary panel — Forms is drill entry only; links open in submenu */}
        <div className="w-[288px] shrink-0 border-r border-gray-100 py-4 pl-4 pr-4">
          <div className="group/stuforms relative">
            <div
              className="flex cursor-default items-center justify-between gap-2 rounded-lg bg-[#1AB69D]/5 px-2 py-2.5 text-[#1AB69D]"
            >
              <span className="text-xs font-bold uppercase tracking-widest">Forms</span>
              <FaChevronRight
                className="h-3 w-3 transition-transform duration-200 group-hover/stuforms:translate-x-0.5"
                aria-hidden="true"
              />
            </div>
            {/* Fly-out submenu — overlaps parent slightly so pointer path does not flicker */}
            <div
              role="presentation"
              className="absolute left-full top-0 z-70 -ml-2 pt-1 pl-4 invisible opacity-0 pointer-events-none overflow-visible transition-opacity duration-150 group-hover/stuforms:visible group-hover/stuforms:opacity-100 group-hover/stuforms:pointer-events-auto"
            >
              <div className="min-w-[280px] rounded-2xl border border-gray-100 bg-white py-3 pl-4 pr-5 shadow-xl">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#1AB69D]/80">
                  Forms
                </p>
                <nav className="mt-2 flex flex-col gap-0.5" aria-label="Student affair forms">
                  {formsLinks.map((link) => (
                    <Link key={link.href} href={link.href} className={linkClasses}>
                      <span className="text-[#1AB69D] text-base font-bold leading-none">›</span>
                      <span className="text-sm leading-snug text-gray-700 transition-colors group-hover:text-[#1AB69D]">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-0.5 border-t border-gray-100 pt-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={linkClasses}>
                <span className="text-[#1AB69D] text-base font-bold leading-none">›</span>
                <span className="text-sm leading-snug text-gray-700 transition-colors group-hover:text-[#1AB69D]">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StudentAffairsMobileList({
  formsLinks,
  links,
  onLinkClick,
}: {
  formsLinks: { label: string; href: string }[];
  links: { label: string; href: string }[];
  onLinkClick: () => void;
}) {
  const [formsExpanded, setFormsExpanded] = React.useState(false);

  return (
    <div className="mt-3 space-y-2">
      <div className="border border-gray-100 rounded-lg bg-gray-50/50 px-3 py-2 overflow-hidden">
        <button
          type="button"
          aria-expanded={formsExpanded}
          onClick={() => setFormsExpanded((v) => !v)}
          className={`flex w-full items-center justify-between gap-2 rounded-lg px-2 py-3 text-left text-sm font-semibold transition-colors ${
            formsExpanded ? 'bg-[#1AB69D]/10 text-[#1AB69D]' : 'bg-white text-gray-800 hover:bg-gray-50'
          }`}
        >
          Forms
          <FaChevronDown
            className={`shrink-0 text-xs transition-transform duration-200 ${
              formsExpanded ? 'rotate-180 text-[#1AB69D]' : 'text-gray-500'
            }`}
          />
        </button>
        {formsExpanded && (
          <div className="mt-2 space-y-1 border-l-2 border-[#1AB69D]/30 pl-4 ml-2 pb-2">
            {formsLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onLinkClick}
                className="flex items-start gap-2 rounded-md py-2 pr-2 transition-colors hover:bg-white"
              >
                <span className="mt-0.5 text-sm font-bold text-[#1AB69D]">›</span>
                <span className="text-xs leading-snug text-gray-700">{link.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="border border-gray-100 rounded-lg px-3 py-3 bg-gray-50/50 overflow-hidden">
        <div className="space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onLinkClick}
              className="flex items-start gap-2 py-2 px-2 rounded-md transition-colors hover:bg-white"
            >
              <span className="text-[#1AB69D] mt-0.5 text-sm">›</span>
              <span className="text-xs text-gray-700 leading-snug">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= SIMPLE LINKS DROPDOWN (DESKTOP) ================= */

function SimpleLinksDropdown({
  links,
  onMouseEnter,
  onMouseLeave,
}: {
  links: { label: string; href: string }[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[320px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden">
        <div className="p-4 flex flex-col gap-0.5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 py-2 px-2 hover:bg-[#1AB69D]/6 rounded-lg transition-colors group"
            >
              <span className="text-[#1AB69D] font-bold text-base leading-none">›</span>
              <span className="text-sm text-gray-700 group-hover:text-[#1AB69D] transition-colors leading-snug">
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= SIMPLE LINKS (MOBILE) ================= */

function SimpleLinksMobileList({ links, onLinkClick }: { links: { label: string; href: string }[]; onLinkClick: () => void }) {
  return (
    <div className="mt-3 space-y-2">
      <div className="border border-gray-100 rounded-lg overflow-hidden">
        <div className="px-3 pb-3 pt-3 bg-gray-50/50">
          <div className="space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onLinkClick}
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

function MobileCoursesSection({ menuType, onLinkClick }: { menuType: string; onLinkClick: () => void }) {
  const [expandedCategory, setExpandedCategory] = React.useState<string | null>(null);

  const categoryIcons: { [key: string]: React.ReactNode } = {
    'Caregiving Courses': <FaHeartbeat className="w-4 h-4" />,
    'Hospitality Courses': <FaHotel className="w-4 h-4" />,
    'IT Courses': <FaLaptopCode className="w-4 h-4" />,
    'Engineering Courses': <FaTools className="w-4 h-4" />,
    'Business Courses': <FaBriefcase className="w-4 h-4" />,
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
                    href={course.href || '/contact-us'}
                    onClick={onLinkClick}
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

  const filteredCategories =
    menuType === 'Diploma Courses'
      ? courseData.filter(
          category =>
            category.title.includes('Caregiving') ||
            category.title.includes('Hospitality') ||
            category.title.includes('IT') ||
            category.title.includes('Engineering') ||
            category.title.includes('Business') ||
            category.title.includes('E-Learning')
        )
      : [];

  const renderCategoryBlock = (category: typeof courseData[0], idx: number) => {
    const isExpanded = expandedCategory === category.title;
    return (
      <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden">
        <button
          onClick={() => setExpandedCategory(isExpanded ? null : category.title)}
          className="w-full flex items-center justify-between gap-2 p-3 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <div style={{ color: category.color }}>{categoryIcons[category.title]}</div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-left" style={{ color: category.color }}>
              {category.title}
            </h3>
          </div>
          <FaChevronDown
            className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
            style={{ color: category.color }}
          />
        </button>
        {isExpanded && (
          <div className="px-3 pb-3 pt-1 border-t border-gray-100 bg-gray-50/50">
            <div className="space-y-1">
              {category.courses.map((course: any, i: number) => (
                <Link
                  key={i}
                  href={course.url || '/contact-us'}
                  onClick={onLinkClick}
                  className="flex items-start gap-2 py-2 px-2 hover:bg-white rounded-lg transition-colors"
                >
                  <span className="text-[#1AB69D] mt-0.5 text-sm font-bold">›</span>
                  <span className="text-xs text-gray-700 leading-snug">{course.title}</span>
                  {course.isNew && (
                    <span className="ml-1 shrink-0 self-center animate-pulse px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-[#EE4A62] text-white uppercase tracking-wide">
                      New
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="mt-3 space-y-2">
      {filteredCategories.length > 0 ? (
        filteredCategories.map((category, idx) => renderCategoryBlock(category, idx))
      ) : (
        <div className="text-center text-gray-500 text-sm py-4">No courses found.</div>
      )}
    </div>
  );
}
