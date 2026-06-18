export type CertificateCourse = {
	title: string;
	subtitle?: string;
	cta: string;
	ctaurl: string;
	image: string;
};

export const certificateCourses: CertificateCourse[] = [
	{
		title: "Certificate in NG (Nasogastric) Tube Feeding",
		cta: "Register Now",
		ctaurl: "https://form.jotform.com/253087866785072",
		image: "/certificate_courses/Certificate in NG (NASOGASTRIC) tube feeding.png",
	},
	{
		title: "International Certificate in Nursing Aide",
		cta: "Learn More",
		ctaurl: "/certificate-in-nursing-aid-in-singapore/",
		image: "/homepage/icna.webp",
	},
	{
		title: "Certificate in Physical and Massage Therapy",
		cta: "Register Now",
		ctaurl: "https://form.jotform.com/253087866785072",
		image: "/certificate_courses/Certificate in Physical and Massage Therapy.png",
	},
	{
		title: "Specialised Certificate in AutoCAD & BIM Applications",
		cta: "Learn More",
		ctaurl: "/certificate-courses-in-singapore/certificate-autocad-bim/",
		image: "/certificate_courses/Certificate in Autocad.png",
	},
	{
		title: "Certificate in Air Conditioning",
		cta: "Register Now",
		ctaurl: "https://form.jotform.com/253087866785072",
		image: "/certificate_courses/Certificate in Air Conditioning.png",
	},
	{
		title: "Certificate in Cafe & Restaurant Management",
		cta: "Register Now",
		ctaurl: "https://form.jotform.com/253087866785072",
		image: "/certificate_courses/Certificate in Cafe _Restaurant Management.png",
	},
	{
		title: "Certificate in Foundation Skills",
		cta: "Learn More",
		ctaurl: "/certificate-courses-in-singapore/certificate-in-foundation-skills/",
		image: "/certificate_courses/Certificate-in-Foundation-Skills.png",
	},
	{
		title: "Professional Certificate in Mechanical and Electrical Engg",
		cta: "Register Now",
		ctaurl: "https://form.jotform.com/253087866785072",
		image: "/certificate_courses/Certificate-in-Foundation-Skills.png",
	},
];

export const certificateCourseTitles = certificateCourses.map(
	(course) => course.title,
);
