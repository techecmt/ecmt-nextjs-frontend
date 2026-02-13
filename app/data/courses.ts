export type Course = {
  title: string;
  mode?: string;
  duration: string;
  elearning?: boolean;
  image?: string;
  url?: string;
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
        url: "/diploma-in-caregiving",
      },
      {
        title: "Advanced Diploma in Nursing Aide",
        mode: "Part Time",
        duration: "10 Months",
        image: "/homepage/addipcaregiving.webp",
        url: "/advanced-diploma-nursing-aide",
      },
      {
        title: "International Certificate in Nursing Aid",
        mode: "Part Time",
        duration: "12 Weeks",
        image: "/homepage/dipcaregiving.webp",
        url: "/certificate-in-nursing-aid-in-singapore",
      },
      {
        title: "CPR + AED Training",
        mode: "Classroom",
        duration: "4 Hours",
        image: "/homepage/cprAEDwebHero.jpg.jpeg",
        url: "/cpr-and-aed-training",
      },
    ],
  },
  {
    title: "School of Hospitality",
    color: "#1AB69D",
    courses: [
      {
        title: "Diploma in Hospital Management",
        mode: "Part Time",
        duration: "08 Months",
        image: "/homepage/diphospital.webp",
        url: "/diploma-in-hospital-management",
      },
      {
        title: "Advanced Diploma in Hospitality Management",
        mode: "Part Time",
        duration: "10 Months",
        image: "/homepage/addiphospital.webp",
        url: "/advanced-diploma-in-hospitality-management",
      },
    ],
  },
  {
    title: "School of IT",
    color: "#1AB69D",
    courses: [
      {
        title: "Diploma in Information Technology",
        mode: "Part Time",
        duration: "08 Months",
        image: "/homepage/dit-el.png",
        url: "/diploma-in-information-technology",
      },
      {
        title: "Advanced Diploma in Computer Application (Transportation)",
        mode: "Part Time",
        duration: "08 Months",
        image: "/homepage/computerapptransport.webp",
        url: "/advanced-diploma-in-computer-application-transportation",
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
        url: "/diploma-in-civil-engineering",
      },
      {
        title: "Advanced Diploma in Civil Engineering",
        mode: "Part Time",
        duration: "08 Months",
        image: "/homepage/ADcivil.webp",
        url: "/advanced-diploma-in-civil-engineering",
      },
      {
        title: "Diploma in M&E Engineering",
        mode: "Part Time",
        duration: "08 Months",
        image: "/homepage/dipmech.webp",
        url: "/diploma-in-mechanical-and-electrical-engineering",
      },
      {
        title: "Advanced Diploma in M&E Engineering",
        mode: "Part Time",
        duration: "08 Months",
        image: "/homepage/admech.webp",
        url: "/advanced-diploma-in-mechanical-and-electrical-engineering",
      },
      {
        title: "Advanced Diploma in Healthcare Facilities Management",
        mode: "Part Time",
        duration: "08 Months",
        image: "/homepage/healthcarefacity.jpg.jpeg",
        url: "/advanced-diploma-in-healthcare-facilities-management",
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
        url: "/diploma-in-business-administration",
      },
      {
        title: "Diploma in Human Resource Management",
        mode: "Part Time",
        duration: "08 Months",
        image: "/homepage/dipHR.webp",
        url: "/diploma-in-human-resource-management",
      },
      {
        title: "Diploma in Retail & E-Commerce",
        mode: "Part Time",
        duration: "12 Months",
        image: "/homepage/retail_commercehomePage_nav.webp",
        url: "/diploma-in-retail-e-commerce-management",
      },
      {
        title: "Diploma in Logistics & Supply Chain",
        mode: "Part Time",
        duration: "12 Months",
        image: "/homepage/logisticshomePage_nav.webp",
        url: "/diploma-in-logistics-and-supply-chain-management",
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
        url: "/diploma-in-logistics-and-supply-chain-management-e-learning",
      },
      {
        title: "Diploma in Retail & E-Commerce (E-Learning)",
        mode: "Part Time",
        duration: "12 Months",
        elearning: true,
        image: "/homepage/retail_commercehomePage_nav.webp",
        url: "/diploma-in-retail-e-commerce-management-e-learning",
      },
      {
        title: "Diploma in Business Administration (E-Learning)",
        mode: "Part Time",
        duration: "08 Months",
        elearning: true,
        image: "/homepage/dipbusiness_adminstartion.webp",
        url: "/diploma-in-business-administration-e-learning",
      },
      {
        title: "Diploma in Hospitality Management (E-Learning)",
        mode: "Part Time",
        duration: "08 Months",
        elearning: true,
        image: "/homepage/elearnhotelmangeS.webp",
        url: "/diploma-in-hospitality-management-e-learning",
      },
      {
        title: "Advanced Diploma in Nursing Care (E-Learning)",
        mode: "Part Time",
        duration: "08 Months",
        elearning: true,
        image: "/homepage/elearnnursing.webp",
        url: "/advanced-diploma-in-nursing-care-assistant-e-learning",
      },
      {
        title: "Diploma in Human Resource (E-Learning)",
        mode: "Part Time",
        duration: "08 Months",
        elearning: true,
        image: "/homepage/dipHR.webp",
        url: "/diploma-in-human-resource-management-e-learning",
      },
      {
        title: "Diploma in Information Technology (E-Learning)",
        mode: "Part Time",
        duration: "08 Months",
        elearning: true,
        image: "/homepage/computerapptransport.webp",
        url: "/diploma-in-information-technology-e-learning",
      },
    ],
  },
  {
  title: "SFARC Courses",  // Must include "SFARC" for the menu filter to work
  color: "#1AB69D",  // Or choose a different color, e.g., "#FF5733"
  courses: [
    {
      title: "CPR + AED Training",  
      duration: "08 Months",  
      image: "/homepage/cpraed-m.jpeg",  
      url: "/cpr-and-aed-training",  
    },
    // Add more courses here as needed
  ],
},
];
