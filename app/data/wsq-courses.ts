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
    href: "#",
    featured: true,
    ctaLabel: "View Course Details",
  },
  {
    id: "caregiving-elderly",
    title: "Essential Care-giving Skills for Elderly",
    imageSrc: "/wsq-images/Essential-Care-giving-Skills-for-Elderly.webp",
    href: "#",
    ctaLabel: "Learn More",
  },
  {
    id: "workplace-optimization",
    title: "Maximizing Performance: Workplace Optimization through Flexible Work Practices",
    imageSrc: "/wsq-images/image-2.webp",
    href: "#",
    ctaLabel: "Learn More",
  },
  {
    id: "navigating-service-challenges",
    title: "Navigating Service Challenges",
    imageSrc: "/wsq-images/WSQ-_Navigating-Service-Challenges_-Level-1.webp",
    href: "#",
    ctaLabel: "Learn More",
  },
  {
    id: "ai-communication-excellence",
    title: "AI-Driven Communication Strategies to Drive Service Excellence",
    imageSrc: "/wsq-images/pexels-tara-winstead-8386440.jpg.jpeg",
    href: "#",
    ctaLabel: "Learn More",
  },
  {
    id: "support-persons-with-disabilities",
    title: "Support Service to Persons with Disabilities",
    imageSrc: "/wsq-images/Support-Service-to-Persons-with-Disabilities.webp",
    href: "#",
    ctaLabel: "Learn More",
  },
  {
    id: "support-pesarsons-with-disabilities",
    title: "Support SasasXXXXXXXXxervice to Persons with Disabilities",
    imageSrc: "/wsq-images/Support-Service-to-Persons-with-Disabilities.webp",
    href: "#",
    ctaLabel: "Learn More",
  },
];

export function getWsqCourses(): WsqCourse[] {
  return wsqCourses;
}
