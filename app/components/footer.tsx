"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const contactCards = [
  {
    title: "Diploma Courses",
    phone: { display: "(+65) 9125 4523", href: "https://wa.me/6591254523" },
    email: "admin@edusphere.edu.sg",
  },
  {
    title: "WSQ Courses",
    phone: { display: "(+65) 8221 5143", href: "https://wa.me/6582215143" },
    email: "training@edusphere.edu.sg",
  },
  {
    title: "Management",
    phone: { display: "(+65) 8220 0095", href: "https://wa.me/6582200095" },
    email: "info@edusphere.edu.sg",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "WSQ Courses", href: "/wsq-courses" },
  { label: "Certificate Courses", href: "/certificate-courses-in-singapore" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Teachers", href: "/our-teachers" },
  { label: "Campus & Facilities", href: "/campus-and-facilities" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "FAQ", href: "/faq" },
  { label: "Student Resources", href: "/essential-resources-and-support-for-students" },
];

const socialLinks = [
  { label: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=100057478838505", color: "text-[#4267B2]" },
  { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/eduspherecollege/", color: "text-pink-600" },
  { label: "TikTok", icon: SiTiktok, href: "https://www.tiktok.com/@eduspherecollege_sg", color: "text-gray-900" },
  { label: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/company/edusphere-college-of-management-and-technology-pte-ltd/", color: "text-sky-700" },
  { label: "YouTube", icon: FaYoutube, href: "https://www.youtube.com/@EdusphereCollegeSG", color: "text-red-600" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 pt-16 pb-10 mt-16 overflow-hidden">
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#1AB69D]/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#1AB69D]/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative">
        {/* Contact Cards */}
        <div className="mb-14">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-8 font-spartan tracking-tight">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#1AB69D] bg-[#1AB69D]/10 rounded-full px-3 py-1 mb-3">
                  {card.title}
                </span>
                <a
                  className="flex items-center gap-3 text-sm text-gray-800 hover:text-[#1AB69D] transition-colors mb-2.5"
                  href={card.phone.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-lg text-green-500 shrink-0" />
                  {card.phone.display}
                </a>
                <a
                  className="flex items-center gap-3 text-sm text-gray-800 hover:text-[#1AB69D] transition-colors"
                  href={`mailto:${card.email}`}
                >
                  <FaEnvelope className="text-lg text-[#EE4A62] shrink-0" />
                  {card.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Logo & Address */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-5">
              <div className="w-36 h-20 relative">
                <Image src="/brand/logo.png" alt="Edusphere College" fill className="object-contain" />
              </div>
            </Link>

            <div className="space-y-2.5 text-sm text-gray-600">
              <p className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-[#1AB69D] mt-0.5 shrink-0" />
                <span>7500A Beach Rd, #05-312 THE PLAZA,<br />Singapore 199591</span>
              </p>
              <p className="flex items-start gap-2.5">
                <FaClock className="text-[#1AB69D] mt-0.5 shrink-0" />
                <span>Mon – Fri | 8:30 AM – 6:00 PM</span>
              </p>
            </div>

            <div className="mt-3 space-y-1 text-xs text-gray-500">
              <p><span className="font-medium text-gray-700">PEI Reg No:</span> 201940174R</p>
              <p><span className="font-medium text-gray-700">Valid:</span> 28 Aug 2022 – 27 Aug 2026</p>
            </div>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.href}
                  className={`h-9 w-9 rounded-full border border-gray-200 bg-white hover:bg-gray-50 inline-flex items-center justify-center ${social.color} transition-colors`}
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h3 className="text-base font-bold text-gray-900 mb-4 font-spartan">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-[#1AB69D] transition-colors py-0.5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h3 className="text-base font-bold text-gray-900 mb-4 font-spartan">Stay Updated</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get the latest updates on courses, events, and career tips.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                autoComplete="name"
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                autoComplete="email"
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1AB69D]/30 focus:border-[#1AB69D] transition-all"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-[#1AB69D] text-white py-2.5 text-sm font-semibold hover:bg-[#16917f] active:scale-[0.98] transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} <span className="text-[#1AB69D] font-medium">Edusphere College of Management and Technology</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-[#1AB69D] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-[#1AB69D] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
