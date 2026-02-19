"use client";

import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="relative bg-gray-100 pt-20 pb-14 mt-20 overflow-hidden">
      {/* Subtle background overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-linear-to-br from-emerald-100 to-teal-50 opacity-40" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-linear-to-br from-violet-100 to-purple-50 opacity-30" />
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-white/60 to-transparent" />
      </div>
      <div className="container mx-auto px-6 relative">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-14">
          {/* Left: Logo & address */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-40 h-24 relative">
                <Image src="/brand/logo.png" alt="Edusphere" fill className="object-contain" />
              </div>
            </div>

            <p className="text-sm text-gray-700 mb-2 leading-relaxed">
              <span className="font-semibold text-gray-900">Address:</span><br />
              7500A Beach Rd, #05-312 THE PLAZA, Singapore 199591
            </p>
            <p className="text-sm text-gray-700"><span className="font-semibold text-gray-900">CPE Reg No:</span> 201940174R</p>
            <p className="text-sm text-gray-700 mt-1"><span className="font-semibold text-gray-900">Validity date:</span> From 28 August 2022 To 27 August 2026</p>
            <p className="text-sm text-gray-700 mt-1"><span className="font-semibold text-gray-900">Our Timing:</span> Mondays – Fridays | 8.30am – 6.00pm </p>

            <div className="mt-4 flex items-center gap-2.5">
              <a aria-label="facebook" target="_blank" rel="noopener noreferrer" className="h-10 px-3.5 rounded-full border border-gray-300 bg-white hover:bg-gray-100 inline-flex items-center gap-2 text-[#4267B2] transition-colors" href="https://www.facebook.com/profile.php?id=100057478838505"><FaFacebookF /><span className="hidden sm:inline text-xs font-medium text-gray-700">Facebook</span></a>
              <a aria-label="instagram" target="_blank" rel="noopener noreferrer" className="h-10 px-3.5 rounded-full border border-gray-300 bg-white hover:bg-gray-100 inline-flex items-center gap-2 text-pink-600 transition-colors" href="https://www.instagram.com/eduspherecollege/"><FaInstagram /><span className="hidden sm:inline text-xs font-medium text-gray-700">Instagram</span></a>
              <a aria-label="tiktok" target="_blank" rel="noopener noreferrer" className="h-10 px-3.5 rounded-full border border-gray-300 bg-white hover:bg-gray-100 inline-flex items-center gap-2 text-gray-900 transition-colors" href="https://www.tiktok.com/@eduspherecollege_sg"><SiTiktok /><span className="hidden sm:inline text-xs font-medium text-gray-700">TikTok</span></a>
              <a aria-label="linkedin" target="_blank" rel="noopener noreferrer" className="h-10 px-3.5 rounded-full border border-gray-300 bg-white hover:bg-gray-100 inline-flex items-center gap-2 text-sky-700 transition-colors" href="https://www.linkedin.com/company/edusphere-college-of-management-and-technology-pte-ltd/"><FaLinkedinIn /><span className="hidden sm:inline text-xs font-medium text-gray-700">LinkedIn</span></a>
              <a aria-label="youtube" target="_blank" rel="noopener noreferrer" className="h-10 px-3.5 rounded-full border border-gray-300 bg-white hover:bg-gray-100 inline-flex items-center gap-2 text-red-600 transition-colors" href="https://www.youtube.com/@EdusphereCollegeSG"><FaYoutube /><span className="hidden sm:inline text-xs font-medium text-gray-700">YouTube</span></a>
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xl font-bold mb-4 text-gray-900 font-spartan">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-700">
              <a href="#" className="hover:text-[#1AB69D] transition-colors">Home</a>
              <a href="#" className="hover:text-[#1AB69D] transition-colors">WSQ Courses</a>
              <a href="#" className="hover:text-[#1AB69D] transition-colors">Diploma Courses</a>
              <a href="#" className="hover:text-[#1AB69D] transition-colors">SFARC Courses</a>
              <a href="#" className="hover:text-[#1AB69D] transition-colors">Advanced Diploma</a>
              <a href="#" className="hover:text-[#1AB69D] transition-colors">Certificate Courses</a>
            </div>
          </div>

          {/* Right: Get Updates */}
          <div className="md:col-span-3">
            <h4 className="text-xl font-bold mb-4 text-gray-900 font-spartan">Get updates</h4>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3 border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1AB69D] focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1AB69D] focus:border-transparent"
              />
              <button className="w-full rounded-xl bg-linear-to-r from-[#1AB69D] to-[#31B979] text-white py-3 font-semibold shadow-sm hover:shadow-md transition-shadow">
                Join Now
              </button>
            </form>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="mb-12">
          <h4 className="text-center text-2xl font-bold text-gray-900 mb-6 font-spartan">CONTACT INFORMATION</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white/90 border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h5 className="font-semibold text-gray-900 mb-3 text-lg">Reach Out for Diploma Courses</h5>
              <a className="flex items-center gap-2 text-gray-900 mb-3" href="tel:+6591254523">
                <FaWhatsapp className="text-xl" /> (+65) 9125 4523
              </a>
              <a className="flex items-center gap-2 text-gray-900" href="mailto:admin@edusphere.edu.sg">
                <FaEnvelope className="text-xl" /> <span className="text-[#EE4A62]">admin@edusphere.edu.sg</span>
              </a>
            </div>

            <div className="bg-white/90 border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h5 className="font-semibold text-gray-900 mb-3 text-lg">Reach Out for WSQ Courses</h5>
              <a className="flex items-center gap-2 text-gray-900 mb-3" href="tel:+6582215143">
                <FaWhatsapp className="text-xl" /> (+65) 8221 5143
              </a>
              <a className="flex items-center gap-2 text-gray-900" href="mailto:training@edusphere.edu.sg">
                <FaEnvelope className="text-xl" /> <span className="text-[#EE4A62]">training@edusphere.edu.sg</span>
              </a>
            </div>

            <div className="bg-white/90 border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h5 className="font-semibold text-gray-900 mb-3 text-lg">Management Contact</h5>
              <a className="flex items-center gap-2 text-gray-900 mb-3" href="tel:+6582200095">
                <FaWhatsapp className="text-xl" /> (+65) 8220 0095
              </a>
              <a className="flex items-center gap-2 text-gray-900" href="mailto:info@edusphere.edu.sg">
                <FaEnvelope className="text-xl" /> <span className="text-[#EE4A62]">info@edusphere.edu.sg</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>Copyright © 2025 <span className="text-[#1AB69D]">Edusphere College of Management and Technology</span> · Developed by <span className="text-gray-900 font-semibold">ECMT</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
