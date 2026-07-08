export type BlogPost = {
	title: string;
	description: string;
	slug: string;
	image: string;
	date: string;
	category: string;
};

/**
 * Single source of truth for blog posts. Used by the blog index (/blog) and the
 * "Related articles" block on each post, so every published post is reachable
 * through internal links (no orphans) and crawlers can move post-to-post.
 * Order = newest first.
 */
export const blogPosts: BlogPost[] = [
	{
		title: "50 Engineering Manager Interview Questions & Answers in Singapore (2026)",
		description:
			"Prepare for your Engineering Manager interview in Singapore with 50 essential questions and answers covering team leadership, project delivery, technical decision-making, stakeholder management, and people development.",
		slug: "engineering-manager-interview-questions",
		image: "/homepage/adec-hero.jpg",
		date: "30 Jun, 2026",
		category: "Interview Preparation",
	},
	{
		title:
			"What's Next After Your Civil Engineering Diploma? The Course That Builds Your Career",
		description:
			"Explore why the Advanced Diploma in Engineering Coordinator (Building Services & Fire Safety) is a strong next step after a Diploma in Civil Engineering in Singapore.",
		slug: "whats-next-after-dce",
		image: "/homepage/adec-card.jpg",
		date: "10 Jun, 2026",
		category: "Career Guidance",
	},
	{
		title: "Top 50 Engineering Coordinator Interview Questions in Singapore (2025)",
		description:
			"Preparing for an Engineering Coordinator interview in Singapore? Get the top 50 most asked questions with expert answers — covering project management, safety, stakeholder communication, and BCA regulations.",
		slug: "interview-questions-engineering-coordinator",
		image: "/homepage/adec-card.jpg",
		date: "01 Jun, 2025",
		category: "Interview Preparation",
	},
	{
		title: "60 Accountant Interview Questions & Answers in Singapore (2026)",
		description:
			"Prepare for your accounting interview in Singapore with 60 essential questions and answers covering financial reporting, taxation, auditing, GST, SFRS, and more.",
		slug: "accountant-interview-questions",
		image: "/homepage/dbfa-cover.jpg",
		date: "31 Mar, 2026",
		category: "Interview Preparation",
	},
	{
		title: "50 Maid Interview Questions & Answers in Singapore (2026)",
		description:
			"Prepare for your maid or domestic helper interview in Singapore with 50 essential questions and answers covering caregiving, housekeeping, childcare, eldercare, cooking, and employment regulations.",
		slug: "maid-interview-questions",
		image: "/homepage/addipcaregiving.jpg",
		date: "05 Apr, 2026",
		category: "Interview Preparation",
	},
	{
		title: "50 Waiter & Waitress Interview Questions & Answers in Singapore (2026)",
		description:
			"Ace your waiter or waitress interview in Singapore with 50 essential questions and answers covering customer service, F&B knowledge, restaurant operations, and career growth tips.",
		slug: "waiter-waitress-interview-questions-and-answers",
		image: "/homepage/addipcaregiving.jpg",
		date: "05 Apr, 2026",
		category: "Interview Preparation",
	},
];
