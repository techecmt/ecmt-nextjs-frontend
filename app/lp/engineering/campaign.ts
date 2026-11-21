// Single place to edit the engineering campaign: courses, intakes, fees, offer.
// Figures mirror the live course pages (/diploma-in-civil-engineering etc.) and
// app/data/batchschedule.ts — update both together.

export const CAMPAIGN_TITLE = "Part-Time Engineering Diplomas";

export const OFFER = {
  // Each visitor gets 24 hours from their first visit. The start time is kept
  // in their browser and never resets, so the deadline is real for that person.
  durationMs: 24 * 60 * 60 * 1000,
  storageKey: "ecmt_lp_engineering_offer_started_at",
  registrationFee: 109,
} as const;

export const GST_NOTE = "All prices include 9% GST.";

export const SCHEDULE = {
  days: "Saturday or Sunday",
  hoursPerWeek: 4,
  slots: ["10 AM – 2 PM", "2 PM – 6 PM", "6 PM – 10 PM"],
} as const;

export const CONTACT = {
  label: "Engineering Admissions",
  phone: "+65 8474 8823",
  wa: "6584748823",
} as const;

export const REGISTRATION_URL =
  "https://onlineportal.edusphere.edu.sg/ecmt-registration-form";

export const CAMPUS_ADDRESS =
  "7500A Beach Road, #05-312 The Plaza, Singapore 199591";

export function whatsappLink(text: string) {
  return `https://wa.me/${CONTACT.wa}?text=${encodeURIComponent(text)}`;
}

// November '26 fee sheet. A course can have more than one option, e.g. DME is
// priced differently for Saturday and Sunday classes.
export type FeeOption = {
  /** Shown as a toggle when a course has several options, e.g. "Saturday class". */
  label: string | null;
  courseFee: number;
  gst: number;
  total: number;
  months: number;
  monthly: number;
};

export type Course = {
  id: "dce" | "dme" | "adme" | "adpc";
  code: string;
  level: "Diploma" | "Advanced Diploma";
  title: string;
  shortTitle: string;
  tagline: string;
  overview: string;
  bestFor: string;
  durationMonths: number;
  hours: number;
  minAge: number;
  entry: string[];
  /** Human label for the next intake; null when the date is not confirmed. */
  nextIntake: string | null;
  modules: { code: string; title: string; hours: number }[];
  careers: string[];
  image: string;
  imageAlt: string;
  fees: FeeOption[];
};

const STANDARD_FEE: FeeOption = {
  label: null,
  courseFee: 2200,
  gst: 198,
  total: 2398,
  months: 8,
  monthly: 299.75,
};

const DIPLOMA_ENTRY = [
  "3 GCE 'O' Levels (incl. English + 2 sciences), SSC / 10th Std, SPM or equivalent",
  "Mature candidates: age 30+ with 8 years' work experience and a relevant certificate",
];

const ADVANCED_ENTRY = [
  "A local diploma, 3 GCE 'A' Levels or an equivalent foreign qualification",
  "A Diploma in Civil or M&E Engineering is a direct pathway",
];

export const COURSES: Course[] = [
  {
    id: "dce",
    code: "DCE",
    level: "Diploma",
    title: "Diploma in Civil Engineering",
    shortTitle: "Civil Engineering",
    tagline: "From site work to site and design roles",
    overview:
      "Structural design, soil investigation, strength of materials and 3D BIM — the core of how Singapore's buildings and infrastructure are designed and built.",
    bestFor: "Construction workers moving into site, BIM and design roles",
    durationMonths: 8,
    hours: 144,
    minAge: 18,
    entry: DIPLOMA_ENTRY,
    nextIntake: "29 November 2026",
    modules: [
      { code: "DCE01", title: "Engineering Mathematics", hours: 24 },
      { code: "DCE02", title: "Engineering English & Communication", hours: 24 },
      { code: "DCE03", title: "Engineering Drawing & 3D Building Information Modelling", hours: 24 },
      { code: "DCE04", title: "Soil Investigation & Geotechnical Instrumentation", hours: 24 },
      { code: "DCE05", title: "Structural Design & Engineering", hours: 24 },
      { code: "DCE06", title: "Strength of Materials", hours: 24 },
    ],
    careers: [
      "Site Supervisor",
      "Assistant Civil Engineer",
      "BIM Modeller",
      "Civil Draughtsperson",
      "QA/QC Inspector",
    ],
    image: "/homepage/dipcivil.jpg",
    imageAlt: "Civil engineering site with structural framework under construction",
    fees: [STANDARD_FEE],
  },
  {
    id: "dme",
    code: "DME",
    level: "Diploma",
    title: "Diploma in Mechanical & Electrical (M&E) Engineering",
    shortTitle: "M&E Engineering",
    tagline: "Building services, equipment and CAD",
    overview:
      "The mechanical and electrical systems that run modern buildings — M&E equipment, building services, CAD and workplace safety.",
    bestFor: "Technicians and site workers stepping up to M&E roles",
    durationMonths: 8,
    hours: 144,
    minAge: 16,
    entry: DIPLOMA_ENTRY,
    nextIntake: "28 November 2026",
    modules: [
      { code: "ME01", title: "Engineering Mathematics", hours: 24 },
      { code: "ME02", title: "Engineering Science", hours: 24 },
      { code: "ME03", title: "Computer-Aided Design", hours: 24 },
      { code: "ME04", title: "M&E Equipment", hours: 24 },
      { code: "ME05", title: "Mechanical & Electrical Services for Building Facilities", hours: 24 },
      { code: "ME06", title: "Workplace Safety & Health", hours: 24 },
    ],
    careers: [
      "M&E Technician",
      "Assistant M&E Engineer",
      "Building Services Technician",
      "CAD Draughtsperson",
      "M&E Site Supervisor",
    ],
    image: "/homepage/dipmech.webp",
    imageAlt: "Mechanical and electrical engineering equipment in a building plant room",
    fees: [
      { ...STANDARD_FEE, label: "Saturday class" },
      { label: "Sunday class", courseFee: 1800, gst: 162, total: 1962, months: 8, monthly: 245.25 },
    ],
  },
  {
    id: "adme",
    code: "ADME",
    level: "Advanced Diploma",
    title: "Advanced Diploma in Mechanical & Electrical (M&E) Engineering",
    shortTitle: "Advanced M&E Engineering",
    tagline: "Smart buildings, automation and AI in M&E",
    overview:
      "The upgrade path for M&E diploma holders: building automation, energy management, smart buildings and AI — skills for supervisory and managerial roles.",
    bestFor: "Diploma holders moving into supervisory and managerial roles",
    durationMonths: 8,
    hours: 144,
    minAge: 18,
    entry: ADVANCED_ENTRY,
    // No confirmed date in batchschedule.ts yet. Set a label such as
    // "10 January 2027" once admissions confirm it.
    nextIntake: null,
    modules: [
      { code: "ADME01", title: "Building Automation Technology", hours: 24 },
      { code: "ADME02", title: "Energy Management System", hours: 24 },
      { code: "ADME03", title: "Smart Building Management", hours: 24 },
      { code: "ADME04", title: "Advanced Facilities Management Solutions", hours: 24 },
      { code: "ADME05", title: "AI & Machine Learning in M&E", hours: 24 },
      { code: "ADME06", title: "Project", hours: 24 },
    ],
    careers: [
      "M&E Supervisor",
      "Facilities Executive",
      "BMS Executive",
      "Energy Management Executive",
      "M&E Engineer",
    ],
    image: "/homepage/admech.webp",
    imageAlt: "Engineer reviewing smart building automation systems",
    fees: [STANDARD_FEE],
  },
  {
    id: "adpc",
    code: "ADPC",
    level: "Advanced Diploma",
    title: "Advanced Diploma in Project Coordinator (Building Services & Fire Safety)",
    shortTitle: "Project Coordinator",
    tagline: "Coordinate building services and fire safety",
    overview:
      "Lead coordination across ACMV, plumbing, electrical and fire safety systems, with project management and green-building practice built in.",
    bestFor: "Experienced site staff moving into coordination roles",
    durationMonths: 12,
    hours: 186,
    minAge: 21,
    entry: [
      "A local diploma, 3 GCE 'A' Levels or an equivalent foreign qualification",
      "Mature candidates with relevant working experience are considered",
    ],
    nextIntake: "13 December 2026",
    modules: [
      { code: "ADPC01", title: "Engineering Coordination & Project Management", hours: 31 },
      { code: "ADPC02", title: "Air-conditioning & Mechanical Ventilation", hours: 31 },
      { code: "ADPC03", title: "Water, Sanitary & Gas Services", hours: 31 },
      { code: "ADPC04", title: "Building Electrical Systems & Design", hours: 31 },
      { code: "ADPC05", title: "Fire Safety Management", hours: 31 },
      { code: "ADPC06", title: "Intelligent & Green Buildings", hours: 31 },
    ],
    careers: [
      "Project Coordinator",
      "M&E Coordinator",
      "Fire Safety Coordinator",
      "Building Services Executive",
      "Facilities Executive",
    ],
    image: "/homepage/adec-card.jpg",
    imageAlt: "Project coordinator reviewing building services drawings on site",
    fees: [
      { label: null, courseFee: 2200, gst: 198, total: 2398, months: 12, monthly: 199.83 },
    ],
  },
];

export const COURSE_IDS = COURSES.map((course) => course.id);

export function findCourse(id: string | null | undefined) {
  return COURSES.find((course) => course.id === id?.toLowerCase()) ?? null;
}

export function formatMoney(value: number) {
  return value.toLocaleString("en-SG", {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

/** The cheapest fee option for a course, used for "from S$x/month" labels. */
export function cheapestFee(course: Course) {
  return course.fees.reduce((low, option) => (option.monthly < low.monthly ? option : low));
}

/** "S$299.75" for one option, "from S$245.25" when a course has several. */
export function monthlyLabel(course: Course) {
  const prefix = course.fees.length > 1 ? "from " : "";
  return `${prefix}S$${formatMoney(cheapestFee(course).monthly)}`;
}

export const LOWEST_MONTHLY = formatMoney(
  Math.min(...COURSES.map((course) => cheapestFee(course).monthly)),
);
