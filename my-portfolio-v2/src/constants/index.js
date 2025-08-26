import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  nirma,
  liu,
  match,
  book,
  movie,
  custom,
  probuddy,
  brik,
} from "../assets";

export const navLinks = [
  {
    id: "linkedin",
    icon: "/linkedin.png", 
    url: "https://www.linkedin.com/in/anshikagupta8/",
  },
  {
    id: "github",
    icon: "/github.png", 
    url: "https://github.com/Anshi5023",
  },
  {
    id: "email",
    icon: "/mail.png", 
    url: "mailto:anshigupta5023@gmail.com",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Technical Consultant",
    icon: mobile,
  },
  {
    title: "Data Scientist",
    icon: backend,
  },
  {
    title: "Blogger",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Technical Consultant",
    company_name: "AtiSunya Pvt. Ltd. | On-Site | Noida, India",
    icon: brik,
    iconBg: "#708090",
    date: "Jan 2024 – Present",
    points: [
      "Assisted in designing and developing custom features in Dynamics 365FO using X++, ensuring alignment with business requirements.",
      "Worked on integrating external applications with Dynamics 365FO using OData services, supporting data exchange and API-based interactions.",
      "Assisted in designing and configuring Electronic Reporting (ER) frameworks to generate business reports and comply with regulatory requirements.",
      "Designed and implemented frontend interfaces using React, Next.js, and Radix UI for performance and accessibility.",
      "Participated in code reviews, performed unit testing, and helped troubleshoot issues to improve solution quality."
    ],
  },
  {
    title: "Data Science & Machine learning",
    company_name: "Scaler Academy | Online Platform | India",
    icon: nirma,
    iconBg: "#383E56",
    date: "May 2022 – May 2024",
    points: [
      "Data Analyst, Machine Learning", 
    ],
  },
  {
    title: "Master's in mathematics",
    company_name: "Pandit Deendayal upadhaya Shekhawati University | Sikar | India",
    icon: nirma,
    iconBg: "#383E56",
    date: "Aug 2019 – Nov 2021",
    points: [
      "Mathematics", 
    ],
  },
];

const testimonials = [
  // Uncomment and customize as needed
  /*
  {
    title: "AI For Everyone",
    organization: "Coursera - Andrew Ng",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Coursera_logo.svg",
    date: "March 2024",
    certificate_link: "https://coursera.org/verify/your-certificate-id",
  },
  */
];

const projects = [
  {
    name: "Used Car Price Prediction Project",
    description:
      "Developed a machine learning model to forecast used car prices by analyzing key factors (mileage, year, engine power, fuel type, etc.). Applied EDA, correlation, and trend analysis to identify pricing drivers and built predictive models with confidence intervals to support data-driven decision-making.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "Numpy",
        color: "blue-text-gradient",
      },
      {
        name: "Seaborn",
        color: "pink-text-gradient",
      },
    ],
    image: match,
    source_code_link: "https://github.com",
  },
  {
    name: "Netflix Streaming Insights Analysis",
    description:
      "Analyzed streaming data across multiple countries using Python, Pandas, Matplotlib, and Seaborn. Performed statistical analyses to uncover regional content preferences and delivered insights that influenced content strategy and expansion decisions.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "JMatplotlib",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
      {
        name: "Seaborn",
        color: "blue-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://github.com",
  },
  {
    name: "Aerofit Customer Profiling & Product Strategy Analysis",
    description:
      "Performed demographic segmentation analysis for Aerofit using Python and Pandas with Matplotlib/Seaborn visualizations. Identified the impact of age and marital status on treadmill purchases, ensured data quality through outlier detection, and delivered customer personas with marketing recommendations.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "green-text-gradient",
      },
      {
        name: "Numpy",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/",
  },
  
];

const certifications = [
  {
    name: "Microsoft Azure Fundamentals",
    provider: "Microsoft",
    description:
      "AZ-900: Builds basic knowledge of cloud concepts, Azure services, security, pricing, and support for a solid Azure foundation. Also helps understand how Azure fits into real-world business scenarios.",
    cert_link: "/Azure Fundamental.pdf",
    image: "/Azure Fundamentals.jpg",
  },
  {
    name: "Microsoft Azure AI Fundamentals",
    provider: "Microsoft",
    description:
      "AI-900 : Azure AI Fundamentals (AI-900) provides basic knowledge of AI concepts, Azure AI services, and how to use them for real-world solutions without deep technical skills.",
    cert_link: "/Azure AI Fundamentals.pdf",
    image: "/Azure AI Fundamentals.png",
  },
  {
    name: "Finance & Operations Apps Developer",
    provider: "Microsoft",
    description:
    "MB-500: Microsoft Dynamics 365 F&O Apps Developer Validates skills in X++, Azure, DevOps, and LCS for customizing and optimizing ERP solutions.",
    cert_link: "/F&O Apps Developer Associate.pdf",
    image: "/F&O Apps Developer Associate.jpg",
  }
];

export { services, technologies, experiences, testimonials, projects, certifications, };
