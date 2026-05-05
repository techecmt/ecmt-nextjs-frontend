export type NewsEvent = {
  id: string;
  title: string;
  description?: string;
  /** ISO date YYYY-MM-DD */
  date: string;
  location?: string;
  images: string[];
};

const may3Images = Array.from(
  { length: 55 },
  (_, i) => `/newsroom/3rdmay2026/03may-26 (${i + 1}).jpeg`
);

export const newsEvents: NewsEvent[] = [
  {
    id: "student-orientation-may-2026",
    title: "Student Orientation - 3rd May 2026",
    description:
      "We warmly welcomed our May 2026 intake to the Edusphere College family! New students from our Diploma, Advanced Diploma and Certificate programmes gathered on campus for a vibrant orientation day — meeting their classmates, connecting with faculty, exploring facilities, and gearing up for an exciting academic journey ahead.",
    date: "2026-05-03",
    location: "Edusphere College Campus, Singapore",
    images: may3Images,
  },
];

export function groupEventsByYearMonth(events: NewsEvent[]) {
  const sorted = [...events].sort((a, b) => (a.date < b.date ? 1 : -1));
  const groups: Record<string, Record<string, NewsEvent[]>> = {};
  for (const ev of sorted) {
    const d = new Date(ev.date);
    const year = String(d.getFullYear());
    const month = d.toLocaleString("en-US", { month: "long" });
    groups[year] ??= {};
    groups[year][month] ??= [];
    groups[year][month].push(ev);
  }
  return groups;
}

export function formatEventDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
