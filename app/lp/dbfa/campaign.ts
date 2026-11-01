// Single place to edit the campaign's moving parts: seats, intake date, offer.
export const COURSE_TITLE = "Diploma in Business Finance & Accounting";

export const INTAKE = {
  // Class start: Tue 10 Nov 2026, 7:00 pm Singapore time.
  startsAtIso: "2026-11-10T19:00:00+08:00",
  startLabel: "10 November 2026",
  dayLabel: "Every Tuesday",
  timeLabel: "7:00 PM – 10:00 PM",
  durationLabel: "12 Months",
  contactHours: "186 Hours",
  studyMode: "Part Time",
  teachingMode: "Live online classes — join from anywhere",
  deliveryLabel: "Online",
} as const;

export const SEATS = {
  remaining: 10,
  total: 40,
} as const;

export const FEES = {
  courseFee: 1200,
  gst: 108,
  total: 1308,
  monthly: 109,
  months: 12,
  registrationFee: 109,
} as const;

export const REGISTRATION_URL =
  "https://onlineportal.edusphere.edu.sg/ecmt-registration-form";

export const COUNSELLORS = [
  { name: "Riyas", phone: "+65 8182 6551", wa: "6581826551", primary: true },
  { name: "Camillie", phone: "+65 8070 6203", wa: "6580706203", primary: false },
] as const;

export const PRIMARY_COUNSELLOR = COUNSELLORS[0];

export function whatsappLink(wa: string, text: string) {
  return `https://wa.me/${wa}?text=${encodeURIComponent(text)}`;
}

export const MODULES = [
  { code: "DBFA01", title: "Fundamentals of Business Accounting", hours: 31 },
  { code: "DBFA02", title: "Practical Bookkeeping & Accounting Operations", hours: 31 },
  { code: "DBFA03", title: "Business Finance & Cost Management", hours: 31 },
  { code: "DBFA04", title: "Accounting Software Applications", hours: 31 },
  { code: "DBFA05", title: "Payroll Administration & Employment Compliance", hours: 31 },
  { code: "DBFA06", title: "Excel & Digital Tools for Business Finance", hours: 31 },
] as const;

export const CAREERS = [
  "Accountant",
  "Bookkeeper",
  "Accounts Executive",
  "Finance Executive",
  "Payroll Officer",
  "Accounts Assistant",
  "Finance Manager",
  "Cost Accountant",
  "Financial Analyst",
] as const;

export const REQUIREMENTS = [
  { label: "Valid Work Permit", hint: "Or S Pass, EP, Citizen, PR or Dependant Pass" },
  { label: "Passport", hint: "Photo page for registration" },
  { label: "SSC / 10th Std / SPM", hint: "SPM for Malaysian applicants" },
] as const;
