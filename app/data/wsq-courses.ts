export type WsqCourse = {
  id: string;
  title: string;
  imageSrc: string;
  href: string;
  featured?: boolean;
  ctaLabel?: string;
  tag?: string;
};

export const wsqCourses: WsqCourse[] = [
  {
    id: "genai-presentations",
    title: "GenAI for Effective Presentations",
    imageSrc: "/wsq-images/GenAi-presentation-1024x576.jpg.jpeg",
    href: "/wsq-courses/genai-for-effective-presentations",
    featured: true,
    ctaLabel: "View Course Details",
    tag: "Seats Filling Fast",
  },
  {
    id: "stakeholder-management",
    title: "Master Executive Presence in Stakeholder Management",
    imageSrc: "/wsq-images/Stakeholder-Management.png",
    href: "/wsq-courses/master-executive-presence-in-stakeholder-management/",
    featured: true,
    ctaLabel: "View Course Details",
  },
  {
    id: "caregiving-elderly",
    title: "Essential Care-giving Skills for Elderly",
    imageSrc: "/wsq-images/Essential-Care-giving-Skills-for-Elderly.webp",
    href: "/wsq-courses/essential-care-giving-skills-for-elderly/",
    ctaLabel: "Learn More",
  },
  {
    id: "workplace-optimization",
    title: "Maximizing Performance: Workplace Optimization through Flexible Work Practices",
    imageSrc: "/wsq-images/image-2.webp",
    href: "/wsq-courses/workplace-optimization-through-flexible-work-practices",
    ctaLabel: "Learn More",
  },
  {
    id: "navigating-service-challenges",
    title: "Navigating Service Challenges",
    imageSrc: "/wsq-images/WSQ-_Navigating-Service-Challenges_-Level-1.webp",
    href: "/wsq-courses/navigating-service-challenges/",
    ctaLabel: "Learn More",
  },
  {
    id: "ai-communication-excellence",
    title: "AI-Driven Communication Strategies to Drive Service Excellence",
    imageSrc: "/wsq-images/pexels-tara-winstead-8386440.jpg.jpeg",
    href: "/wsq-courses/ai-driven-communication-strategies-to-drive-service-excellence/",
    ctaLabel: "Learn More",
  },
  {
    id: "support-persons-with-disabilities",
    title: "Support Service to Persons with Disabilities",
    imageSrc: "/wsq-images/Support-Service-to-Persons-with-Disabilities.webp",
    href: "/wsq-courses/support-service-to-persons-with-disabilities/",
    ctaLabel: "Learn More",
  },
  
];

export function getWsqCourses(): WsqCourse[] {
  return wsqCourses;
}
