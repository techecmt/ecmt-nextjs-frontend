export type Course = {
  title: string;
  mode?: string;
  duration: string;
  elearning?: boolean;
  image?: string;
};

export type School = {
  title: string;
  color: string;
  courses: Course[];
};

export const courseData: School[] = [
  {
    title: "School of Caregiving",
    color: "#1AB69D",
    courses: [
      {
        title: "Diploma in Caregiving",
        mode: "Part Time",
        duration: "08 Months",
        image: "/homepage/dipcaregiving.webp",
      },
      {
        title: "Advanced Diploma in Nursing Aide",
        mode: "Part Time",
        duration: "10 Months",
        image: "/homepage/addipcaregiving.webp",
      },
      {
        title: "International Certificate in Nursing Aid",
        mode: "Part Time",
        duration: "12 Weeks",
        image: "/homepage/dipcaregiving.webp",
      },
      {
        title: "CPR + AED Training",
        mode: "Classroom",
        duration: "4 Hours",
        image: "/homepage/cprAEDwebHero.jpg.jpeg",
      },
    ],
  },
  {
    title: "School of Hospitality",
    color: "#1AB69D",
    courses: [
      {
        title: "Diploma in Hotel and Tourism Management",
        mode: "Part Time",
        duration: "08 Months",
        image: "/homepage/diphospital.webp",
      },
      {
        title: "Advanced Diploma in Hospitality Management",
        mode: "Part Time",
        duration: "10 Months",
        image: "/homepage/addiphospital.webp",
      },
    ],
  },
  {
    title: "School of IT",
    color: "#1AB69D",
    courses: [
      {
        title: "Advanced Diploma in Computer Application (Transportation)",
        mode: "Part Time",
        duration: "08 Months",
        image: "/homepage/computerapptransport.webp",
      },
    ],
  },
  {
    title: "School of Engineering",
    color: "#1AB69D",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        mode: "Part Time",
        duration: "08 Months",
        image: "/homepage/dipcivil.webp",
      },
      {
        title: "Advanced Diploma in Civil Engineering",
        mode: "Part Time",
        duration: "08 Months",
        image: "/homepage/ADcivil.webp",
      },
      {
        title: "Diploma in M&E Engineering",
        mode: "Part Time",
        duration: "08 Months",
        image: "/homepage/dipmech.webp",
      },
      {
        title: "Advanced Diploma in M&E Engineering",
        mode: "Part Time",
        duration: "08 Months",
        image: "/homepage/admech.webp",
      },
      {
        title: "Advanced Diploma in Healthcare Facilities Management",
        mode: "Part Time",
        duration: "08 Months",
        image: "/homepage/healthcarefacity.jpg.jpeg",
      },
    ],
  },
  {
    title: "School of Business",
    color: "#1AB69D",
    courses: [
      {
        title: "Diploma in Business Administration",
        mode: "Part Time",
        duration: "08 Months",
        image: "/homepage/dipbusiness_adminstartion.webp",
      },
      {
        title: "Diploma in Human Resource Management",
        mode: "Part Time",
        duration: "08 Months",
        image: "/homepage/dipHR.webp",
      },
      {
        title: "Diploma in Retail & E-Commerce",
        mode: "Part Time",
        duration: "12 Months",
        image: "/homepage/retail_commercehomePage_nav.webp",
      },
      {
        title: "Diploma in Logistics & Supply Chain",
        mode: "Part Time",
        duration: "12 Months",
        image: "/homepage/logisticshomePage_nav.webp",
      },
    ],
  },
  {
    title: "E-Learning Courses",
    color: "#EE4A62",
    courses: [
      {
        title: "Diploma in Logistics & Supply Chain (E-Learning)",
        mode: "Part Time",
        duration: "12 Months",
        elearning: true,
        image: "/homepage/logisticsElearnhomePage_nav.webp",
      },
      {
        title: "Diploma in Retail & E-Commerce (E-Learning)",
        mode: "Part Time",
        duration: "12 Months",
        elearning: true,
        image: "/homepage/retail_commercehomePage_nav.webp",
      },
      {
        title: "Diploma in Business Administration (E-Learning)",
        mode: "Part Time",
        duration: "08 Months",
        elearning: true,
        image: "/homepage/dipbusiness_adminstartion.webp",
      },
      {
        title: "Diploma in Hotel & Tourism (E-Learning)",
        mode: "Part Time",
        duration: "08 Months",
        elearning: true,
        image: "/homepage/elearnhotelmangeS.webp",
      },
      {
        title: "Advanced Diploma in Nursing Care (E-Learning)",
        mode: "Part Time",
        duration: "08 Months",
        elearning: true,
        image: "/homepage/elearnnursing.webp",
      },
      {
        title: "Diploma in Human Resource (E-Learning)",
        mode: "Part Time",
        duration: "08 Months",
        elearning: true,
        image: "/homepage/dipHR.webp",
      },
      {
        title: "Diploma in Information Technology (E-Learning)",
        mode: "Part Time",
        duration: "08 Months",
        elearning: true,
        image: "/homepage/computerapptransport.webp",
      },
    ],
  },
];
