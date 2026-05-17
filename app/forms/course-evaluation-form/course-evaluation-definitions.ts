/** Shared constants for the ECMT Course Evaluation Form layout. */

export const COURSE_OPTIONS = [
  "WSQ - Maximizing Performance: Workplace Optimization through Flexible Work Practices",
  "WSQ - Support Service to Persons with Disabilities",
  "WSQ - Essential Care-giving Skills for Elderly",
  "WSQ - Navigating Service Challenges",
  "WSQ - AI-Driven Communication Strategies to Drive Service Excellence",
  "WSQ - GenAI for Effective Presentations",
  "WSQ - Master Executive Presence in Stakeholder Management",
  "ERF - Certificate in Nursing Aid",
  "ERF - Diploma in Caregiving",
  "ERF - Advanced Diploma in Nursing Aide",
  "ERF - Diploma in Hospitality Management",
  "ERF - Advanced Diploma in Hospitality Management",
  "ERF - Diploma in Civil Engineering",
  "ERF - Advanced Diploma in Civil Engineering",
  "ERF - Diploma in Mechanical and Electrical (M&E) Engineering",
  "ERF - Advanced Diploma in Mechanical and Electrical (M&E) Engineering",
  "ERF - Diploma in Business Administration",
  "ERF - Diploma in Human Resource Management",
  "ERF - Diploma in Logistics and Supply Chain Management",
  "E-Learning - Diploma in Business Administration",
  "E-Learning - Diploma in Hospitality Management",
  "E-Learning - Advanced Diploma in Nursing Care Assistant",
  "E-Learning - Diploma in Human Resource Management",
  "E-Learning - Diploma in Logistics and Supply Chain Management",
] as const;

export const TRUTH_SCALE_COLUMNS = [
  { value: "1", label: "Not true at all" },
  { value: "2", label: "Slightly true" },
  { value: "3", label: "Somewhat true" },
  { value: "4", label: "Mostly true" },
  { value: "5", label: "Completely true" },
] as const;

export const EXTENT_SCALE_COLUMNS = [
  { value: "5", label: "To a Very large extent" },
  { value: "4", label: "To a large extent" },
  { value: "3", label: "To some extent" },
  { value: "2", label: "To a Small Extent" },
  { value: "1", label: "Not at All" },
] as const;

export const SATISFACTION_SCALE_COLUMNS = [
  { value: "1", label: "Very Unsatisfied" },
  { value: "2", label: "Unsatisfied" },
  { value: "3", label: "Neutral" },
  { value: "4", label: "Satisfied" },
  { value: "5", label: "Very Satisfied" },
] as const;

export const TRUTH_SCALE_STATEMENTS = [
  {
    key: "support_from_training_provider",
    text: "The support from the training provider (e.g., registration help, answering questions) was good.",
    required: true,
  },
  {
    key: "topics_matched_course_description",
    text: "The topics in the course matched what was promised in the course description.",
    required: true,
  },
  {
    key: "learned_useful_for_job",
    text: "What I learned in the course is useful for my job.",
    required: true,
  },
  {
    key: "course_materials_helped_me_learn",
    text: "The course materials (slides, notes, etc.) helped me learn.",
    required: true,
  },
  {
    key: "trainer_creative_interesting",
    text: "The trainer used creative and interesting ways to teach.",
    required: true,
  },
  {
    key: "teaching_methods_helped_understand",
    text: "The teaching methods helped me understand and learn well.",
    required: true,
  },
  {
    key: "trainer_subject_knowledge",
    text: "The trainer knew the subject very well.",
    required: true,
  },
  {
    key: "trainer_engaging",
    text: "The trainer made the class interesting and engaging.",
    required: true,
  },
  {
    key: "course_length_right",
    text: "The course length felt just right.",
    required: true,
  },
] as const;

export const SATISFACTION_MATRIX_ROWS = [
  { key: "course_administration", label: "Course Administration" },
  { key: "course_materials", label: "Course Materials" },
  { key: "customer_service", label: "Customer Service" },
  { key: "training_support", label: "Training Support" },
] as const;
