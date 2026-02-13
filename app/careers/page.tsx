"use client";

import React from "react";
import Image from "next/image";
import ContactForm from "../components/contactform";
import { 
    Award, Users, TrendingUp, Heart, 
    Briefcase, GraduationCap, 
    UserPlus, BookOpen,
    CheckCircle, Clock, DollarSign,
    Lightbulb, Target, Star
} from "lucide-react";

const benefits = [
    {
        icon: <DollarSign className="w-8 h-8" />,
        title: "Competitive Salary",
        description: "Market-competitive compensation packages with performance-based bonuses"
    },
    {
        icon: <GraduationCap className="w-8 h-8" />,
        title: "Professional Development",
        description: "Continuous learning opportunities, workshops, and sponsored certifications"
    },
    {
        icon: <Heart className="w-8 h-8" />,
        title: "Health & Wellness",
        description: "Comprehensive medical benefits and wellness programs for your well-being"
    },
    {
        icon: <Clock className="w-8 h-8" />,
        title: "Work-Life Balance",
        description: "Flexible working arrangements and generous leave policies"
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Collaborative Culture",
        description: "Work with passionate professionals in a supportive team environment"
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Career Growth",
        description: "Clear career progression paths and internal promotion opportunities"
    }
];

const values = [
    {
        icon: <Lightbulb className="w-6 h-6" />,
        title: "Innovation",
        description: "We embrace new ideas and encourage creative problem-solving"
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: "Excellence",
        description: "We strive for the highest standards in everything we do"
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Collaboration",
        description: "We believe in working together to achieve common goals"
    },
    {
        icon: <Star className="w-6 h-6" />,
        title: "Integrity",
        description: "We maintain honesty and transparency in all our interactions"
    }
];

export default function Careers() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#1AB69D]/5 via-white to-[#EE4A62]/5 py-16 md:py-24">
                <div className="absolute top-0 right-0 opacity-20">
                    <Image src="/brand/shape-04.png" alt="" width={300} height={300} />
                </div>
                <div className="absolute bottom-0 left-0 opacity-10">
                    <Image src="/brand/shape-01.png" alt="" width={200} height={200} />
                </div>
                
                <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1AB69D]/10 text-[#1AB69D] rounded-full text-sm font-semibold">
                                <Briefcase className="w-4 h-4" />
                                Join Our Team
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Build Your Career at <span className="text-[#EE4A62]">Edusphere</span>
                            </h1>
                            
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                Join a passionate team dedicated to transforming lives through education. 
                                We're looking for talented individuals who share our vision of excellence and innovation.
                            </p>

                            <div className="flex flex-wrap gap-8 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#1AB69D]/10 rounded-lg flex items-center justify-center">
                                        <Users className="w-6 h-6 text-[#1AB69D]" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">50+</div>
                                        <div className="text-sm text-gray-500">Team Members</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-[#EE4A62]/10 rounded-lg flex items-center justify-center">
                                        <Award className="w-6 h-6 text-[#EE4A62]" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-gray-900">15+</div>
                                        <div className="text-sm text-gray-500">Years Excellence</div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <a
                                    href="#open-positions"
                                    className="inline-flex items-center gap-2 bg-[#1AB69D] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#16917f] transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                                >
                                    View Open Positions
                                    <BookOpen className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div className="relative">
                           
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#1AB69D]/20 rounded-full blur-2xl"></div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#EE4A62]/20 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-sm font-bold tracking-widest text-[#EE4A62] uppercase mb-3">
                            Why Work With Us
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Make a Difference Every Day
                        </h3>
                        <p className="text-gray-600 text-lg">
                            At Edusphere, we believe that great education starts with great educators and support staff. 
                            Join us in our mission to empower the next generation of professionals.
                        </p>
                    </div>

                    {/* Company Values */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {values.map((value, idx) => (
                            <div 
                                key={idx}
                                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 bg-[#1AB69D]/10 rounded-lg flex items-center justify-center mb-4 text-[#1AB69D]">
                                    {value.icon}
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                                <p className="text-sm text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-sm font-bold tracking-widest text-[#EE4A62] uppercase mb-3">
                            Employee Benefits
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What We Offer
                        </h3>
                        <p className="text-gray-600 text-lg">
                            We invest in our people because we know that when our team thrives, our students succeed.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div 
                                key={idx}
                                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1AB69D]/10 to-[#EE4A62]/10 rounded-xl flex items-center justify-center mb-4 text-[#1AB69D]">
                                    {benefit.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="open-positions" className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        
                        
                    </div>

                    {/* Interested in Joining */}
                    <div className="bg-gradient-to-br from-[#1AB69D]/5 to-[#EE4A62]/5 rounded-2xl p-8 md:p-12 text-center border border-gray-100">
                        <div className="w-20 h-20 bg-[#1AB69D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Briefcase className="w-10 h-10 text-[#1AB69D]" />
                        </div>
                        <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Interested in Joining Edusphere?
                        </h4>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
                            We're always looking for talented individuals to join our team across various departments including 
                            Academic, Marketing, IT, Human Resources, and Student Services. Send us your resume and 
                            let us know how you can contribute to our mission of transforming lives through education.
                        </p>
                        <a
                            href="#apply"
                            className="inline-flex items-center gap-2 bg-[#1AB69D] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#16917f] transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                        >
                            Submit Your Resume
                            <UserPlus className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-sm font-bold tracking-widest text-[#EE4A62] uppercase mb-3">
                            How It Works
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Application Process
                        </h3>
                        <p className="text-gray-600 text-lg">
                            Our streamlined recruitment process ensures a smooth and transparent experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="relative">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <div className="w-16 h-16 bg-[#1AB69D] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                    1
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Apply Online</h4>
                                <p className="text-sm text-gray-600">Submit your application through our contact form below</p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <div className="w-16 h-16 bg-[#1AB69D] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                    2
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Initial Screening</h4>
                                <p className="text-sm text-gray-600">Our HR team reviews your application and qualifications</p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <div className="w-16 h-16 bg-[#1AB69D] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                    3
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Interview</h4>
                                <p className="text-sm text-gray-600">Meet with our team to discuss your experience and fit</p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <div className="w-16 h-16 bg-[#1AB69D] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                    4
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Offer & Onboarding</h4>
                                <p className="text-sm text-gray-600">Receive offer and join our team with comprehensive onboarding</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 bg-white rounded-xl p-8 border border-gray-100">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">What to Include in Your Application</h4>
                        <ul className="grid md:grid-cols-2 gap-3">
                            <li className="flex items-center gap-2 text-gray-600">
                                <CheckCircle className="w-5 h-5 text-[#1AB69D] shrink-0" />
                                Updated resume/CV
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                                <CheckCircle className="w-5 h-5 text-[#1AB69D] shrink-0" />
                                Cover letter (optional but recommended)
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                                <CheckCircle className="w-5 h-5 text-[#1AB69D] shrink-0" />
                                Relevant certifications
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                                <CheckCircle className="w-5 h-5 text-[#1AB69D] shrink-0" />
                                Portfolio (if applicable)
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

         
        </main>
    );
}
