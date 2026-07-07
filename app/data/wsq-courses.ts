export type WsqCourse = {
  id: string;
  title: string;
  imageSrc: string;
  href: string;
  featured?: boolean;
  ctaLabel?: string;
  tag?: string;
  registrationLink?: string;
  description?: string;
  tgsCode?: string;
  duration?: string;
  category?: string;
  courseMode?: string;
};

export const wsqCourses: WsqCourse[] = [
  {
    id: "genai-presentations",
    title: "GenAI for Effective Presentations",
    imageSrc: "/wsq-images/GenAi-presentation-1024x576.jpg.jpeg",
    href: "/wsq-courses/genai-for-effective-presentations/",
    featured: true,
    ctaLabel: "View Course Details",
    tag: "Seats Filling Fast",
    registrationLink: "https://form.jotform.com/252672445341052",
    description:
      "Build presentation confidence with GenAI tools covering content planning, storytelling, and AI-assisted delivery techniques.",
    tgsCode: "TGS-2025055863",
    duration: "16 hours",
    category: "AI & Digital Skills",
    courseMode: "Classroom",
  },
  {
    id: "stakeholder-management",
    title: "Master Executive Presence in Stakeholder Management",
    imageSrc: "/wsq-images/Stakeholder-Management.png",
    href: "/wsq-courses/master-executive-presence-in-stakeholder-management/",
    featured: true,
    ctaLabel: "View Course Details",
    registrationLink: "https://form.jotform.com/252672445341052",
    description:
      "Strengthen executive presence and stakeholder communication with focus on influence, clarity, and professional impact.",
    tgsCode: "TGS-2025056021",
    duration: "16 hours",
    category: "Workplace & Leadership",
    courseMode: "Classroom",
  },
  {
    id: "caregiving-elderly",
    title: "Essential Care-giving Skills for Elderly",
    imageSrc: "/wsq-images/Essential-Care-giving-Skills-for-Elderly.webp",
    href: "/wsq-courses/essential-care-giving-skills-for-elderly/",
    ctaLabel: "Learn More",
    registrationLink: "https://form.jotform.com/252672445341052",
    description:
      "Learn practical eldercare techniques including safety, communication, and day-to-day caregiving support skills.",
    tgsCode: "TGS-2024050827",
    duration: "16.5 hours",
    category: "Caregiving & Community Care",
    courseMode: "Blended",
  },
  {
    id: "workplace-optimization",
    title: "Maximizing Performance: Workplace Optimization through Flexible Work Practices",
    imageSrc: "/wsq-images/image-2.webp",
    href: "/wsq-courses/workplace-optimization-through-flexible-work-practices/",
    ctaLabel: "Learn More",
    registrationLink: "https://form.jotform.com/252672445341052",
    description:
      "Optimize productivity and collaboration through flexible work practices in this WSQ-aligned professional course.",
    tgsCode: "TGS-2024049950",
    duration: "15 hours 50 mins",
    category: "Workplace & Leadership",
    courseMode: "Classroom",
  },
  {
    id: "navigating-service-challenges",
    title: "Navigating Service Challenges",
    imageSrc: "/wsq-images/WSQ-_Navigating-Service-Challenges_-Level-1.webp",
    href: "/wsq-courses/navigating-service-challenges/",
    ctaLabel: "Learn More",
    description:
      "Develop practical skills to resolve service challenges, manage customer expectations, and improve service recovery.",
    tgsCode: "TGS-2024042314",
    duration: "7 hours 40 mins",
    category: "Service Excellence",
    courseMode: "Classroom",
  },
  {
    id: "ai-communication-excellence",
    title: "AI-Driven Communication Strategies to Drive Service Excellence",
    imageSrc: "/wsq-images/pexels-tara-winstead-8386440.jpg.jpeg",
    href: "/wsq-courses/ai-driven-communication-strategies-to-drive-service-excellence/",
    ctaLabel: "Learn More",
    registrationLink: "https://form.jotform.com/252672445341052",
    description:
      "Improve service excellence, customer engagement, and team performance with AI-driven communication strategies.",
    tgsCode: "TGS-2025055862",
    duration: "16 hours",
    category: "AI & Digital Skills",
    courseMode: "Classroom",
  },
  {
    id: "support-persons-with-disabilities",
    title: "Support Service to Persons with Disabilities",
    imageSrc: "/wsq-images/Support-Service-to-Persons-with-Disabilities.webp",
    href: "/wsq-courses/support-service-to-persons-with-disabilities/",
    ctaLabel: "Learn More",
    description:
      "Gain inclusive service and support skills for persons with disabilities with practical workplace application.",
    tgsCode: "TGS-2024050928",
    duration: "16 hours",
    category: "Caregiving & Community Care",
    courseMode: "Classroom",
  },
];

export function getWsqCourses(): WsqCourse[] {
  return wsqCourses;
}

export const WSQ_COURSE_CATEGORIES = [
  "AI & Digital Skills",
  "Service Excellence",
  "Caregiving & Community Care",
  "Workplace & Leadership",
] as const;
