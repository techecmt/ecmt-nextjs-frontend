import type { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutCollegeReg from "./components/aboutcollege_reg";
import CourseList from "./components/course";
import ContactForm from "./components/contactform";
import GoogleCarousel from "./components/GoogleCarousel";
import BatchSchedule from "./components/batchschedule";
import ScoreCard from "./components/scorecard";

export const metadata: Metadata = {
  title: "Edusphere College of Management and Technology | Singapore",
  description: "Enroll in private diploma programs and WSQ courses at Edusphere College. We offer part-time diplomas in Engineering, IT, Business, Hospitality, Caregiving & more in Singapore.",
  openGraph: {
    title: "Edusphere College of Management and Technology | Singapore",
    description: "Enroll in private diploma programs and WSQ courses at Edusphere College. We offer part-time diplomas in Engineering, IT, Business, Hospitality, Caregiving & more.",
    url: "https://www.edusphere.edu.sg",
    siteName: "Edusphere College of Management and Technology",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diploma & Advanced Diploma Courses in Singapore | Edusphere",
    description: "Enroll in private diploma programs and WSQ courses at Edusphere College. Part-time diplomas in Engineering, IT, Business & more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.edusphere.edu.sg",
  },
};

export default function Home() {
  // Organization Schema (JSON-LD)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "CollegeOrUniversity"],
    "name": "Edusphere College of Management and Technology Pte Ltd",
    "alternateName": "Edusphere College",
    "url": "https://www.edusphere.edu.sg",
    "logo": "https://www.edusphere.edu.sg/homepage/logoimage.png",
    "description": "Private educational institution in Singapore offering diploma programs and WSQ courses in Engineering, IT, Business, Hospitality, and Caregiving.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7500A Beach Road, #05-312 THE PLAZA",
      "addressLocality": "Singapore",
      "postalCode": "199591",
      "addressCountry": "SG"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+65-8220-0095",
        "contactType": "customer service",
        "areaServed": "SG",
        "availableLanguage": ["English"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+65-9125-4523",
        "contactType": "admissions",
        "areaServed": "SG",
        "availableLanguage": ["English"]
      }
    ],
    "email": "info@edusphere.edu.sg",
    "sameAs": [
      "https://www.facebook.com/eduspherecollege",
      "https://www.linkedin.com/company/edusphere-college",
      "https://www.instagram.com/eduspherecollege"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      
      <Header />
      <Hero />
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Students Say
            </h2>
            <p className="text-md md:text-lg text-gray-600 mt-2">
              Real stories from learners who have grown with us.
            </p>
          </div>
          <GoogleCarousel />
        </div>
      </section>
      <AboutCollegeReg />
      <section id="courses">
        <CourseList />
      </section>
      <section id="scedule">
        <BatchSchedule />
      </section>
      <ScoreCard />
      <ContactForm />
      
    </div>
  );
}
