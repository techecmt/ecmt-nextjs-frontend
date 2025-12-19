'use client';

import React, { useState } from 'react';
import { FaGraduationCap, FaChevronDown, FaChevronUp, FaBook, FaClock } from 'react-icons/fa';

interface Course {
  name: string;
  modules: string[];
}

interface Teacher {
  name: string;
  qualifications: string[];
  deployedMode: string;
  courses: Course[];
}

const teachersData: Teacher[] = [
  {
    name: "Samsudeen Mohamed Tahir",
    qualifications: [
      "Bachelor of Mechanical Engineering",
      "Anna University, India"
    ],
    deployedMode: "Part Time",
    courses: [
      {
        name: "Advanced Diploma in Mechanical & Electrical (M&E) Engineering",
        modules: [
          "ADME1 – M1: Building Automation Technology",
          "ADME2 – M2: Energy Management System",
          "ADME3 – M3: Smart Building Management",
          "ADME4 – M4: Advanced Facilities Management Solutions",
          "ADME5 – M5: Artificial Intelligence & Machine Learning in M&E",
          "ADME6 – M6: Project"
        ]
      },
      {
        name: "Diploma in Mechanical & Electrical (M&E) Engineering",
        modules: [
          "DME1 – M1: Engineering Mathematics",
          "DME2 – M2: Engineering Science",
          "DME3 – M3: Computer-Aided Design",
          "DME4 – M4: M & E Equipment",
          "DME5 – M5: Mechanical & Electrical Services for Building Facilities",
          "DME6 – M6: Workplace Safety & Health"
        ]
      },
      {
        name: "Advanced Diploma in Civil Engineering",
        modules: [
          "ADCE01 – M1: Construction Materials & Testing",
          "ADCE02 – M2: Advanced Foundation Engineering",
          "ADCE03 – M3: Project Management in Planning & Scheduling",
          "ADCE04 – M4: Building Management System",
          "ADCE05 – M5: Facade Engineering",
          "ADCE06 – M6: Green Building & Sustainability"
        ]
      },
      {
        name: "Diploma in Civil Engineering",
        modules: [
          "DCE1 – M1: Engineering Mathematics",
          "DCE2 – M2: Engineering English & Communication",
          "DCE3 – M3: Engineering Drawing & 3D BIM",
          "DCE4 – M4: Soil Investigation & Geotechnical Instrumentation",
          "DCE5 – M5: Structural Design & Engineering",
          "DCE6 – M6: Strength of Materials"
        ]
      },
      {
        name: "Advanced Diploma in Computer Application (Transportation)",
        modules: [
          "ADCA01 – M1: Smart Tunnel Management (M&E)",
          "ADCA02 – M2: Energy Management System"
        ]
      },
      {
        name: "Advanced Diploma in Healthcare Facilities Management",
        modules: [
          "ADHFM01 – M1: Overview of Healthcare Facilities Management",
          "ADHFM03 – M3: Advanced M&E System in Healthcare",
          "ADHFM04 – M4: Energy Management System"
        ]
      },
      {
        name: "Diploma in Logistics & Supply Chain Management",
        modules: [
          "DLSCM1 – M1: Introduction to Logistics & Supply Chain Management",
          "DLSCM2 – M2: Procurement & Sourcing",
          "DLSCM3 – M3: Inventory Management",
          "DLSCM4 – M4: Warehouse & Distribution Management",
          "DLSCM5 – M5: Supply Chain Technology & Information Systems",
          "DLSCM6 – M6: Financial Management for Supply Chains"
        ]
      },
      {
        name: "Diploma in Logistics & Supply Chain Management (E-Learning)",
        modules: [
          "DLSCM1 – M1: Introduction to Logistics & Supply Chain Management",
          "DLSCM2 – M2: Procurement & Sourcing",
          "DLSCM3 – M3: Inventory Management",
          "DLSCM4 – M4: Warehouse & Distribution Management",
          "DLSCM5 – M5: Supply Chain Technology & Information Systems",
          "DLSCM6 – M6: Financial Management for Supply Chains"
        ]
      }
    ]
  },
  {
    name: "Ms. Rajeswarry Gunasundram",
    qualifications: [
      "Bachelor Degree in Hospitality & Tourism Management (Hons)",
      "Management & Science University (MSU), Shah Alam, Malaysia",
      "Master of Business Administration",
      "Kuala Lumpur Metropolitan University College (KLMUC), Kelana Jaya, Malaysia"
    ],
    deployedMode: "Part Time",
    courses: [
      {
        name: "Advanced Diploma in Hospitality Management",
        modules: [
          "ADHM1 – M1: Human Resources Management in Hospitality",
          "ADHM2 – M2: Digital & Social Media Marketing in Hospitality",
          "ADHM3 – M3: Culinary Arts & Management",
          "ADHM4 – M4: Events Planning & Management",
          "ADHM5 – M5: Facilities Management & Operations",
          "ADHM6 – M6: Finance & Accounting in Hospitality",
          "ADHM7 – M7: Project – Case Management"
        ]
      },
      {
        name: "Diploma in Business Administration (E-Learning)",
        modules: [
          "DBA1 – M1: Principles of Management",
          "DBA2 – M2: Effective Business Communication",
          "DBA3 – M3: Principles of Economics",
          "DBA4 – M4: Principles of Finance & Accounting",
          "DBA5 – M5: Sales & Marketing",
          "DBA6 – M6: Human Resource Management"
        ]
      },
      {
        name: "Diploma in Business Administration",
        modules: [
          "DBA1 – M1: Principles of Management",
          "DBA2 – M2: Effective Business Communication",
          "DBA3 – M3: Principles of Economics",
          "DBA4 – M4: Principles of Finance & Accounting",
          "DBA5 – M5: Sales & Marketing",
          "DBA6 – M6: Human Resource Management"
        ]
      },
      {
        name: "Diploma in Hotel & Tourism Management",
        modules: [
          "DHTM1 – M1: Customer Relationship Management",
          "DHTM2 – M2: Room Division Management",
          "DHTM3 – M3: Food & Beverage Management",
          "DHTM4 – M4: Effective Business Communication",
          "DHTM5 – M5: Entrepreneurship in Hospitality",
          "DHTM6 – M6: Waste Management for Hotels & Restaurants"
        ]
      },
      {
        name: "Diploma in Hotel & Tourism Management (E-Learning)",
        modules: [
          "DHTM1 – M1: Customer Relationship Management",
          "DHTM2 – M2: Room Division Management",
          "DHTM3 – M3: Food & Beverage Management",
          "DHTM4 – M4: Effective Business Communication",
          "DHTM5 – M5: Entrepreneurship in Hospitality",
          "DHTM6 – M6: Waste Management for Hotels & Restaurants"
        ]
      },
      {
        name: "Diploma in Human Resource Management",
        modules: [
          "DHRM1 – M1: Principles of Human Resource Management",
          "DHRM2 – M2: Effective Business Communication",
          "DHRM3 – M3: Accounting for Managers",
          "DHRM4 – M4: Organisation Psychology",
          "DHRM5 – M5: Employment Law & Contracts",
          "DHRM6 – M6: Training & Development"
        ]
      },
      {
        name: "Diploma in Human Resource Management (E-Learning)",
        modules: [
          "DHRM1 – M1: Principles of Human Resource Management",
          "DHRM2 – M2: Effective Business Communication",
          "DHRM3 – M3: Accounting for Managers",
          "DHRM4 – M4: Organisation Psychology",
          "DHRM5 – M5: Employment Law & Contracts",
          "DHRM6 – M6: Training & Development"
        ]
      }
    ]
  },
  {
    name: "Dr. Sudhakar Aishwarya",
    qualifications: [
      "Doctor of Philosophy in Management, Alagappa University, India",
      "Master of Business Administration, Annamalai University, India",
      "Bachelor of Engineering (Civil Engineering), Madurai Kamaraj University, India"
    ],
    deployedMode: "Part Time",
    courses: [
      {
        name: "Advanced Diploma in Civil Engineering",
        modules: [
          "ADCE01 – M1: Construction Materials & Testing",
          "ADCE02 – M2: Advanced Foundation Engineering",
          "ADCE03 – M3: Project Management in Planning & Scheduling",
          "ADCE04 – M4: Building Management System",
          "ADCE05 – M5: Facade Engineering",
          "ADCE06 – M6: Green Building & Sustainability"
        ]
      },
      {
        name: "Diploma in Civil Engineering",
        modules: [
          "DCE1 – M1: Engineering Mathematics",
          "DCE2 – M2: Engineering English & Communication",
          "DCE3 – M3: Engineering Drawing & 3D BIM",
          "DCE4 – M4: Soil Investigation & Geotechnical Instrumentation",
          "DCE5 – M5: Structural Design & Engineering",
          "DCE6 – M6: Strength of Materials"
        ]
      },
      {
        name: "Diploma in Logistics & Supply Chain Management",
        modules: [
          "DLSCM1 – M1: Introduction to Logistics & Supply Chain Management",
          "DLSCM2 – M2: Procurement & Sourcing",
          "DLSCM3 – M3: Inventory Management",
          "DLSCM4 – M4: Warehouse & Distribution Management",
          "DLSCM5 – M5: Supply Chain Technology & Information Systems",
          "DLSCM6 – M6: Financial Management for Supply Chains"
        ]
      },
      {
        name: "Diploma in Logistics & Supply Chain Management (E-Learning)",
        modules: [
          "DLSCM1 – M1: Introduction to Logistics & Supply Chain Management",
          "DLSCM2 – M2: Procurement & Sourcing",
          "DLSCM3 – M3: Inventory Management",
          "DLSCM4 – M4: Warehouse & Distribution Management",
          "DLSCM5 – M5: Supply Chain Technology & Information Systems",
          "DLSCM6 – M6: Financial Management for Supply Chains"
        ]
      },
      {
        name: "Advanced Diploma in Mechanical & Electrical (M&E) Engineering",
        modules: [
          "ADME1 – M1: Building Automation Technology",
          "ADME2 – M2: Energy Management System",
          "ADME3 – M3: Smart Building Management",
          "ADME4 – M4: Advanced Facilities Management Solutions",
          "ADME5 – M5: Artificial Intelligence & Machine Learning in M&E",
          "ADME6 – M6: Project"
        ]
      }
    ]
  },
  {
    name: "Haji Noor Mohamed Mursidha",
    qualifications: [],
    deployedMode: "Part Time",
    courses: [
      {
        name: "Advanced Diploma in Hospitality Management",
        modules: [
          "ADHM1 – M1: Human Resources Management in Hospitality",
          "ADHM2 – M2: Digital & Social Media Marketing in Hospitality",
          "ADHM3 – M3: Culinary Arts & Management",
          "ADHM4 – M4: Events Planning & Management",
          "ADHM5 – M5: Facilities Management & Operations",
          "ADHM6 – M6: Finance & Accounting in Hospitality",
          "ADHM7 – M7: Project – Case Management"
        ]
      },
      {
        name: "Diploma in Business Administration",
        modules: [
          "DBA1 – M1: Principles of Management",
          "DBA2 – M2: Effective Business Communication",
          "DBA3 – M3: Principles of Economics",
          "DBA4 – M4: Principles of Finance & Accounting",
          "DBA5 – M5: Sales & Marketing",
          "DBA6 – M6: Human Resource Management"
        ]
      },
      {
        name: "Diploma in Business Administration (E-Learning)",
        modules: [
          "DBA1 – M1: Principles of Management",
          "DBA2 – M2: Effective Business Communication",
          "DBA3 – M3: Principles of Economics",
          "DBA4 – M4: Principles of Finance & Accounting",
          "DBA5 – M5: Sales & Marketing",
          "DBA6 – M6: Human Resource Management"
        ]
      },
      {
        name: "Diploma in Hotel & Tourism Management (E-Learning)",
        modules: [
          "DHTM1 – M1: Customer Relationship Management",
          "DHTM2 – M2: Room Division Management",
          "DHTM3 – M3: Food & Beverage Management",
          "DHTM4 – M4: Effective Business Communication",
          "DHTM5 – M5: Entrepreneurship in Hospitality",
          "DHTM6 – M6: Waste Management for Hotels & Restaurants"
        ]
      },
      {
        name: "Diploma in Hotel & Tourism Management",
        modules: [
          "DHTM1 – M1: Customer Relationship Management",
          "DHTM2 – M2: Room Division Management",
          "DHTM3 – M3: Food & Beverage Management",
          "DHTM4 – M4: Effective Business Communication",
          "DHTM5 – M5: Entrepreneurship in Hospitality",
          "DHTM6 – M6: Waste Management for Hotels & Restaurants"
        ]
      },
      {
        name: "Diploma in Human Resource Management",
        modules: [
          "DHRM1 – M1: Principles of Human Resource Management",
          "DHRM2 – M2: Effective Business Communication",
          "DHRM3 – M3: Accounting for Managers",
          "DHRM4 – M4: Organisation Psychology",
          "DHRM5 – M5: Employment Law & Contracts",
          "DHRM6 – M6: Training & Development"
        ]
      },
      {
        name: "Diploma in Human Resource Management (E-Learning)",
        modules: [
          "DHRM1 – M1: Principles of Human Resource Management",
          "DHRM2 – M2: Effective Business Communication",
          "DHRM3 – M3: Accounting for Managers",
          "DHRM4 – M4: Organisation Psychology",
          "DHRM5 – M5: Employment Law & Contracts",
          "DHRM6 – M6: Training & Development"
        ]
      }
    ]
  },
  {
    name: "Thilagavathy D/o Vellisamy",
    qualifications: [
      "Master in Arts, Counselling",
      "Goldsmith University of London, UK"
    ],
    deployedMode: "Part Time",
    courses: [
      {
        name: "Diploma in Caregiving",
        modules: [
          "DCG1 – M1: Introduction to Health Care & Role of Caregiver",
          "DCG2 – M2: Effective Communication & Interpersonal Skills",
          "DCG3 – M3: Psychosocial Health & Nutrition",
          "DCG4 – M4: New Born & Infant Care",
          "DCG5 – M5: Ageing Process & Promotion of Physical Health",
          "DCG6 – M6: Prevention & Management of Falls"
        ]
      },
      {
        name: "Diploma in Hotel & Tourism Management",
        modules: [
          "DHTM1 – M1: Customer Relationship Management",
          "DHTM2 – M2: Room Division Management",
          "DHTM3 – M3: Food & Beverage Management",
          "DHTM4 – M4: Effective Business Communication",
          "DHTM5 – M5: Entrepreneurship in Hospitality",
          "DHTM6 – M6: Waste Management for Hotels & Restaurants"
        ]
      },
      {
        name: "Advanced Diploma in Nursing Aide",
        modules: [
          "ADNA1 – M1: Healthcare Operations Management",
          "ADNA2 – M2: Introduction to Counselling & Communication",
          "ADNA3 – M3: Exercise Programming & Assessment",
          "ADNA4 – M4: Dementia & Mental Health",
          "ADNA5 – M5: Integrated Care",
          "ADNA6 – M6: Early Intervention for Children with Special Needs",
          "ADNA7 – M7: Project – Case Management"
        ]
      },
      {
        name: "Advanced Diploma in Hospitality Management",
        modules: [
          "ADHM1 – M1: Human Resources Management in Hospitality",
          "ADHM2 – M2: Digital & Social Media Marketing in Hospitality",
          "ADHM3 – M3: Culinary Arts & Management",
          "ADHM4 – M4: Events Planning & Management",
          "ADHM5 – M5: Facilities Management & Operations",
          "ADHM6 – M6: Finance & Accounting in Hospitality",
          "ADHM7 – M7: Project – Case Management"
        ]
      },
      {
        name: "Diploma in Business Administration",
        modules: [
          "DBA1 – M1: Principles of Management",
          "DBA2 – M2: Effective Business Communication",
          "DBA3 – M3: Principles of Economics",
          "DBA4 – M4: Principles of Finance & Accounting",
          "DBA5 – M5: Sales & Marketing",
          "DBA6 – M6: Human Resource Management"
        ]
      },
      {
        name: "Advanced Diploma in Nursing Care Assistant (E-Learning)",
        modules: [
          "ADNCA1 – M1: Principles of Nursing Aide",
          "ADNCA2 – M2: Medical Terminology",
          "ADNCA3 – M3: Basic Human Sciences – Anatomy, Physiology, Pathology",
          "ADNCA4 – M4: Ward Management",
          "ADNCA5 – M5: Community Health Nursing",
          "ADNCA6 – M6: Principle of Medical Transcription"
        ]
      },
      {
        name: "Diploma in Business Administration (E-Learning)",
        modules: [
          "DBA1 – M1: Principles of Management",
          "DBA2 – M2: Effective Business Communication",
          "DBA3 – M3: Principles of Economics",
          "DBA4 – M4: Principles of Finance & Accounting",
          "DBA5 – M5: Sales & Marketing",
          "DBA6 – M6: Human Resource Management"
        ]
      },
      {
        name: "Diploma in Human Resource Management (E-Learning)",
        modules: [
          "DHRM1 – M1: Principles of Human Resource Management",
          "DHRM2 – M2: Effective Business Communication",
          "DHRM3 – M3: Accounting for Managers",
          "DHRM4 – M4: Organisation Psychology",
          "DHRM5 – M5: Employment Law & Contracts",
          "DHRM6 – M6: Training & Development"
        ]
      },
      {
        name: "Diploma in Hotel & Tourism Management (E-Learning)",
        modules: [
          "DHTM1 – M1: Customer Relationship Management",
          "DHTM2 – M2: Room Division Management",
          "DHTM3 – M3: Food & Beverage Management",
          "DHTM4 – M4: Effective Business Communication",
          "DHTM5 – M5: Entrepreneurship in Hospitality",
          "DHTM6 – M6: Waste Management for Hotels & Restaurants"
        ]
      }
    ]
  },
  {
    name: "Sivabaloo S/o Sellayam",
    qualifications: [
      "M.A. Business Administration",
      "University of Hull, UK"
    ],
    deployedMode: "Part Time",
    courses: [
      {
        name: "Diploma in Caregiving",
        modules: [
          "DCG2 – M2: Effective Communication & Interpersonal Skills"
        ]
      },
      {
        name: "Diploma in Hotel & Tourism Management",
        modules: [
          "DHTM1 – M1: Customer Relationship Management",
          "DHTM2 – M2: Room Division Management",
          "DHTM3 – M3: Food & Beverage Management",
          "DHTM4 – M4: Effective Business Communication",
          "DHTM5 – M5: Entrepreneurship in Hospitality",
          "DHTM6 – M6: Waste Management for Hotels & Restaurants"
        ]
      },
      {
        name: "Advanced Diploma in Nursing Aide",
        modules: [
          "ADNA2 – M2: Introduction to Counselling & Communication"
        ]
      },
      {
        name: "Advanced Diploma in Hospitality Management",
        modules: [
          "ADHM1 – M1: Human Resources Management in Hospitality",
          "ADHM2 – M2: Digital & Social Media Marketing in Hospitality",
          "ADHM3 – M3: Culinary Arts & Management",
          "ADHM4 – M4: Events Planning & Management",
          "ADHM5 – M5: Facilities Management & Operations",
          "ADHM6 – M6: Finance & Accounting in Hospitality",
          "ADHM7 – M7: Project – Case Management"
        ]
      },
      {
        name: "Diploma in Business Administration",
        modules: [
          "DBA1 – M1: Principles of Management",
          "DBA2 – M2: Effective Business Communication",
          "DBA3 – M3: Principles of Economics",
          "DBA4 – M4: Principles of Finance & Accounting",
          "DBA5 – M5: Sales & Marketing",
          "DBA6 – M6: Human Resource Management"
        ]
      },
      {
        name: "Diploma in Hotel & Tourism Management (E-Learning)",
        modules: [
          "DHTM1 – M1: Customer Relationship Management",
          "DHTM2 – M2: Room Division Management",
          "DHTM3 – M3: Food & Beverage Management",
          "DHTM4 – M4: Effective Business Communication",
          "DHTM5 – M5: Entrepreneurship in Hospitality",
          "DHTM6 – M6: Waste Management for Hotels & Restaurants"
        ]
      },
      {
        name: "Advanced Diploma in Nursing Care Assistant (E-Learning)",
        modules: [
          "ADNCA1 – M1: Principles of Nursing Aide",
          "ADNCA2 – M2: Medical Terminology",
          "ADNCA3 – M3: Basic Human Sciences – Anatomy, Physiology, Pathology",
          "ADNCA4 – M4: Ward Management",
          "ADNCA5 – M5: Community Health Nursing",
          "ADNCA6 – M6: Principle of Medical Transcription"
        ]
      },
      {
        name: "Diploma in Business Administration (E-Learning)",
        modules: [
          "DBA1 – M1: Principles of Management",
          "DBA2 – M2: Effective Business Communication",
          "DBA3 – M3: Principles of Economics",
          "DBA4 – M4: Principles of Finance & Accounting",
          "DBA5 – M5: Sales & Marketing",
          "DBA6 – M6: Human Resource Management"
        ]
      }
    ]
  }
];

function TeacherCard({ teacher }: { teacher: Teacher }) {
  const [expandedCourses, setExpandedCourses] = useState<{ [key: number]: boolean }>({});

  const toggleCourse = (index: number) => {
    setExpandedCourses(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 border-gray-100 hover:border-[#1AB69D]/30">
      {/* Teacher Header */}
      <div className="flex items-start gap-4 mb-6 pb-6 border-b-2 border-gray-100">
        <div className="w-16 h-16 bg-gradient-to-br from-[#1AB69D] to-[#16a890] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
          <FaGraduationCap className="text-white text-2xl" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{teacher.name}</h3>
          {teacher.qualifications.length > 0 && (
            <div className="space-y-1">
              {teacher.qualifications.map((qual, idx) => (
                <p key={idx} className="text-sm text-gray-600">{qual}</p>
              ))}
            </div>
          )}
          <div className="flex items-center gap-2 mt-3">
            <FaClock className="text-[#EE4A62] text-sm" />
            <span className="text-sm font-medium text-gray-700">{teacher.deployedMode}</span>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <FaBook className="text-[#1AB69D]" />
          <h4 className="text-lg font-bold text-gray-900">Courses & Modules</h4>
          <span className="ml-auto text-sm font-semibold text-[#1AB69D] bg-[#1AB69D]/10 px-3 py-1 rounded-full">
            {teacher.courses.length} {teacher.courses.length === 1 ? 'Course' : 'Courses'}
          </span>
        </div>

        <div className="space-y-3">
          {teacher.courses.map((course, idx) => (
            <div key={idx} className="border-2 border-gray-100 rounded-lg overflow-hidden hover:border-[#1AB69D]/30 transition-colors">
              <button
                onClick={() => toggleCourse(idx)}
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
              >
                <span className="font-semibold text-gray-900 text-sm pr-4">{course.name}</span>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs text-gray-500 font-medium">{course.modules.length} modules</span>
                  {expandedCourses[idx] ? (
                    <FaChevronUp className="text-[#1AB69D] w-4 h-4" />
                  ) : (
                    <FaChevronDown className="text-gray-400 w-4 h-4" />
                  )}
                </div>
              </button>

              {expandedCourses[idx] && (
                <div className="p-4 bg-white border-t-2 border-gray-100 animate-fadeIn">
                  <ul className="space-y-2">
                    {course.modules.map((module, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="w-2 h-2 bg-[#EE4A62] rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function OurTeachersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1AB69D] to-[#16a085] pt-32 pb-16 px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <FaGraduationCap className="w-4 h-4" />
            Meet Our Faculty
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-spartan">
            Our Teachers
          </h1>

          <p className="text-lg text-white/95 leading-relaxed font-poppins max-w-3xl mx-auto">
            At Edusphere College of Management and Technology, our faculty members are the heart of our academic community. We believe that exceptional teaching is vital for fostering a stimulating learning environment that encourages student success. Our teachers are not only experts in their respective fields but also dedicated mentors who inspire and guide students on their educational journeys.
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16 px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teachersData.map((teacher, idx) => (
              <TeacherCard key={idx} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-spartan">
            Ready to Learn from the Best?
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-poppins">
            Join Edusphere College and experience world-class education from our dedicated faculty members.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-[#1AB69D] to-[#16a890] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Enroll Now →
            </button>
            <button className="px-8 py-4 bg-white text-[#1AB69D] font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-[#1AB69D]">
              View All Courses
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
