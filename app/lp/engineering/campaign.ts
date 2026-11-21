// Single place to edit the engineering campaign: courses, fees, entry rules,
// offer and college facts. Intake dates are NOT kept here: they are read from
// app/data/batchschedule.ts so there is only one schedule to update.
//
// Entry rules mirror the "Entry Qualification" blocks on the live course pages
// (/diploma-in-civil-engineering/ etc.). If admissions approve a change, edit
// it here and every section of the page (hero callout, entry block, course
// panel, FAQ) follows.

import { batchScheduleData } from "../../data/batchschedule";

export const CAMPAIGN_TITLE = "Part-Time Engineering Diplomas";

export const PAGE_URL = "https://edusphere.edu.sg/lp/engineering/";

export const COLLEGE = {
  legalName: "Edusphere College of Management and Technology Pte Ltd",
  /** Name used in the trust line (the brief asks for it without "Pte Ltd"). */
  name: "Edusphere College of Management and Technology",
  peiRegNo: "201940174R",
  // Stated on each course page: "'<course>' will be awarded by Edusphere
  // College of Management and Technology Pte Ltd".
  awardingBody: "Edusphere College of Management and Technology Pte Ltd",
  awardingCountry: "Singapore",
  privacyUrl: "/privacy-policy/",
} as const;

/**
 * Registration-fee offer with a FIXED end date (no per-visitor countdown).
 * Leave `endsOn` null to hide the offer everywhere. When set, the notice hides
 * itself automatically after that date (Singapore time).
 */
export const REGISTRATION_FEE = 109;
export const REGISTRATION_OFFER: { intakeLabel: string; endsOn: string | null } = {
  intakeLabel: "November 2026",
  endsOn: null, // e.g. "2026-11-27"
};

export const GST_NOTE = "All prices include 9% GST.";

export const SCHEDULE = {
  days: "Saturday or Sunday",
  hoursPerWeek: 4,
  slots: [
    { label: "Morning", time: "10 AM–2 PM" },
    { label: "Afternoon", time: "2 PM–6 PM" },
    { label: "Evening", time: "6 PM–10 PM" },
  ],
  delivery: "In class at Beach Road",
} as const;

export const CONTACT = {
  label: "Engineering Admissions",
  phone: "+65 8474 8823",
  wa: "6584748823",
} as const;

export const WA_TEXT =
  "Hi, I want to study a part-time engineering diploma. Can you tell me the next class date and fees?";

export const REGISTRATION_URL =
  "https://onlineportal.edusphere.edu.sg/ecmt-registration-form";

export const CAMPUS_ADDRESS =
  "7500A Beach Road, #05-312 The Plaza, Singapore 199591";

export function whatsappLink(text: string = WA_TEXT) {
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

export type EntryRules = {
  /** Academic route, in simple English. */
  academic: string[];
  /** Mature-candidate route exactly as the course page allows it, in simple English. */
  mature: string[];
  /**
   * True only when the course page allows "age 30+ with 8 years of work" with
   * NO certificate. Drives every "no certificate needed" claim on the page.
   */
  matureNoCertificate: boolean;
};

export type Course = {
  id: "dce" | "dme" | "adme" | "adpc";
  code: string;
  level: "Diploma" | "Advanced Diploma";
  /** Must match the course name in app/data/batchschedule.ts. */
  title: string;
  shortTitle: string;
  overview: string;
  bestFor: string;
  durationMonths: number;
  hours: number;
  /** How the weekly load is described (from the timetable: 4-hour slots). */
  weeklyLoad: string;
  minAge: number;
  entry: EntryRules;
  /** Live course page; holds the full withdrawal and refund table. */
  pageUrl: string;
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

// DCE and DME course pages: 3 GCE 'O' levels or International Secondary incl.
// English + 2 sciences; mature = 30+ with 8 years' work AND another relevant
// certificate.
const DIPLOMA_ENTRY: EntryRules = {
  academic: [
    "SSC, SPM, 10th Std, GCE 'O' Level or a similar school certificate",
    "It should include English and 2 science subjects",
  ],
  mature: ["Age 30 or above, with at least 8 years of work, and another work-related certificate"],
  matureNoCertificate: false,
};

const EIGHT_MONTH_LOAD = "4 hours a week, one day only";

export const COURSES: Course[] = [
  {
    id: "dce",
    code: "DCE",
    level: "Diploma",
    title: "Diploma in Civil Engineering",
    shortTitle: "Civil Engineering",
    overview:
      "Learn how buildings and roads are designed and built. You learn drawing, 3D BIM (building models on a computer), soil testing and structures.",
    bestFor: "For construction workers who want site, drawing or BIM jobs.",
    durationMonths: 8,
    hours: 144,
    weeklyLoad: EIGHT_MONTH_LOAD,
    minAge: 18,
    entry: DIPLOMA_ENTRY,
    pageUrl: "/diploma-in-civil-engineering/",
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
    image: "/lp_images/engineering/course-dce.webp",
    imageAlt: "Civil engineering site with a building frame under construction",
    fees: [STANDARD_FEE],
  },
  {
    id: "dme",
    code: "DME",
    level: "Diploma",
    title: "Diploma in Mechanical & Electrical (M&E) Engineering",
    shortTitle: "M&E Engineering",
    overview:
      "M&E means Mechanical & Electrical. Learn the systems that run a building: power, air-con, pumps and safety. You also learn CAD (drawing on a computer).",
    bestFor: "For technicians who want to work in Mechanical & Electrical (M&E).",
    durationMonths: 8,
    hours: 144,
    weeklyLoad: EIGHT_MONTH_LOAD,
    minAge: 16,
    entry: DIPLOMA_ENTRY,
    pageUrl: "/diploma-in-mechanical-and-electrical-engineering/",
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
    image: "/lp_images/engineering/course-dme.webp",
    imageAlt: "Mechanical and electrical equipment in a building plant room",
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
    overview:
      "The next step after an M&E diploma. Learn smart buildings, building automation and energy saving. These skills help you lead a team.",
    bestFor: "For diploma holders who want to become a supervisor.",
    durationMonths: 8,
    hours: 144,
    weeklyLoad: EIGHT_MONTH_LOAD,
    minAge: 18,
    // Course page: local diploma / 3 'A' levels / equivalent; mature = another
    // relevant certificate with 3 years' relevant work.
    entry: {
      academic: ["A diploma, 3 GCE 'A' Levels, or a similar qualification"],
      mature: ["Or: a work-related certificate and 3 years of related work"],
      matureNoCertificate: false,
    },
    pageUrl: "/advanced-diploma-in-mechanical-and-electrical-engineering/",
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
    image: "/lp_images/engineering/course-adme.webp",
    imageAlt: "Engineer checking a smart building control system",
    fees: [STANDARD_FEE],
  },
  {
    id: "adpc",
    code: "ADPC",
    level: "Advanced Diploma",
    title: "Advanced Diploma in Project Coordinator (Building Services & Fire Safety)",
    shortTitle: "Project Coordinator",
    overview:
      "Learn to coordinate building work: air-con, water, electrical and fire safety. You also learn project planning and green buildings.",
    bestFor: "For experienced site staff who want to coordinate projects.",
    durationMonths: 12,
    hours: 186,
    weeklyLoad: "About 4 hours a week",
    minAge: 21,
    // Course page: local diploma / 3 'A' levels / equivalent; mature = 30 years
    // old with 8 years of working experience, OR 30 with 3 years' relevant
    // work plus relevant qualifications (case by case).
    entry: {
      academic: ["A diploma, 3 GCE 'A' Levels, or a similar qualification"],
      mature: [
        "Or: age 30 or above, with at least 8 years of work",
        "Or: age 30 or above, with 3 years of related work and a related certificate (we check each case)",
      ],
      matureNoCertificate: true,
    },
    pageUrl: "/advanced-diploma-in-engineering-coordinator/",
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
    image: "/lp_images/engineering/course-adpc.webp",
    imageAlt: "Project coordinator reviewing building services drawings on site",
    fees: [
      { label: null, courseFee: 2200, gst: 198, total: 2398, months: 12, monthly: 199.83 },
    ],
  },
];

export function findCourse(id: string | null | undefined) {
  return COURSES.find((course) => course.id === id?.toLowerCase()) ?? null;
}

// ---------------------------------------------------------------------------
// Money
// ---------------------------------------------------------------------------

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

/** "S$2,398", or "S$1,962–S$2,398" when a course has several fee options. */
export function totalLabel(course: Course) {
  const totals = course.fees.map((option) => option.total);
  const low = Math.min(...totals);
  const high = Math.max(...totals);
  return low === high ? `S$${formatMoney(low)}` : `S$${formatMoney(low)}–S$${formatMoney(high)}`;
}

export const LOWEST_MONTHLY = formatMoney(
  Math.min(...COURSES.map((course) => cheapestFee(course).monthly)),
);

const durations = COURSES.map((course) => course.durationMonths);
export const MIN_MONTHS = Math.min(...durations);
export const MAX_MONTHS = Math.max(...durations);
const ages = COURSES.map((course) => course.minAge);
export const MIN_AGE = Math.min(...ages);
export const MAX_MIN_AGE = Math.max(...ages);

// ---------------------------------------------------------------------------
// Entry rules
// ---------------------------------------------------------------------------

/** Courses that accept "30+ with 8 years of work" with no certificate. */
export const NO_CERT_COURSES = COURSES.filter((course) => course.entry.matureNoCertificate);
export const ALL_COURSES_NO_CERT = NO_CERT_COURSES.length === COURSES.length;

/** "Project Coordinator (ADPC)" / "Civil Engineering (DCE) and …" */
export function listCourses(courses: Course[]) {
  const names = courses.map((course) => `${course.shortTitle} (${course.code})`);
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

// ---------------------------------------------------------------------------
// Intakes (from app/data/batchschedule.ts)
// ---------------------------------------------------------------------------

const MONTHS: Record<string, string> = {
  Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
  Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
};

/** "29-Nov-2026" -> "2026-11-29" */
function toIso(date: string) {
  const [day, month, year] = date.split("-");
  if (!day || !MONTHS[month] || !year) return null;
  return `${year}-${MONTHS[month]}-${day.padStart(2, "0")}`;
}

/** Today's date in Singapore as "YYYY-MM-DD". */
export function singaporeToday(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Singapore" }).format(now);
}

/** "2026-11-29" -> "29 Nov 2026" */
export function formatIntake(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

/** Next start date on or after `today` for a course, or null when none is scheduled. */
export function nextIntakeIso(course: Course, today: string) {
  const row = batchScheduleData.find((item) => item.courseName === course.title);
  if (!row) return null;
  const dates = Object.values(row)
    .flatMap((value) => (typeof value === "object" && value.startDate ? [toIso(value.startDate)] : []))
    .filter((iso): iso is string => iso !== null && iso >= today)
    .sort();
  return dates[0] ?? null;
}

/** Display label per course id, e.g. { dce: "29 Nov 2026", adme: null }. */
export type IntakeLabels = Record<Course["id"], string | null>;

export function intakeLabels(today: string): IntakeLabels {
  return Object.fromEntries(
    COURSES.map((course) => {
      const iso = nextIntakeIso(course, today);
      return [course.id, iso ? formatIntake(iso) : null];
    }),
  ) as IntakeLabels;
}

/** Earliest upcoming intake across all four courses, as a label. */
export function earliestIntakeLabel(today: string) {
  const dates = COURSES.map((course) => nextIntakeIso(course, today))
    .filter((iso): iso is string => Boolean(iso))
    .sort();
  return dates[0] ? formatIntake(dates[0]) : null;
}

export const OPENING_SOON = "Opening soon";
