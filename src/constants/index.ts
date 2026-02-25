type navLinks = {
  name: string;
  link: string;
};

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Software Engineer", imgPath: "/images/concepts.svg" },
  { text: "Web Developer", imgPath: "/images/ideas.svg" },
  { text: "Full Stack Developer", imgPath: "/images/concepts.svg" },
  { text: "Frontend Developer", imgPath: "/images/ideas.svg" },
  { text: "Mobile Developer", imgPath: "/images/ideas.svg" },
  { text: "Problem Solver", imgPath: "/images/designs.svg" },
  { text: "Tech Enthusiast", imgPath: "/images/concepts.svg" },
  { text: "Trader", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 3, suffix: "", label: "Completed Internships" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Curiosity Level" },
];

const logoIconsList = [
  { id: 1, imgPath: "/images/Ashored.png", name: "Ashored" },
  { id: 2, imgPath: "/images/Protocase.png", name: "company-logo" },
  { id: 3, imgPath: "/images/EstateLynx.png", name: "company-logo" },
  { id: 4, imgPath: "/images/dal.png", name: "company-logo" },

  { id: 5, imgPath: "/images/Ashored.png", name: "Ashored" },
  { id: 6, imgPath: "/images/Protocase.png", name: "company-logo" },
  { id: 7, imgPath: "/images/EstateLynx.png", name: "company-logo" },
  { id: 8, imgPath: "/images/dal.png", name: "company-logo" },

  { id: 9, imgPath: "/images/Ashored.png", name: "Ashored" },
  { id: 10, imgPath: "/images/Protocase.png", name: "company-logo" },
  { id: 11, imgPath: "/images/EstateLynx.png", name: "company-logo" },
  { id: 12, imgPath: "/images/dal.png", name: "company-logo" },
];

export const Exp_summary = [
  {
    postion: "Software Engineer",
    company: "EstateLynx Inc.",
    duration: "Jan 2025 - Present",
    desc: "Engineered an iOS app (React Native, TypeScript) and a Django REST API deployed on Azure, with JWT auth, real-time chat, and cloud storage integration.",
  },
  {
    postion: "Software Developer Intern",
    company: "Ashored Innovations",
    duration: "Jan 2024 - Aug 2024",
    desc: "Built 120+ Python E2E tests for a GraphQL API, and reduced QA through CI/CD automation (AWS CodeBuild & GitHub Actions). Automated AWS Cognito workflows and migrated an App to Web.",
  },
  {
    postion: "Instructional Developer",
    company: "Dalhousie University",
    duration: "Jan 2023 - Dec 2025",
    desc: "Developed a TA training website (Next.js) serving 150+ users. Automated academic timetable extraction with Selenium, developed ETL-style data workflows and dashboards in R and Power BI to support data-driven decision-making.",
  },
  {
    postion: "Software Developer Intern",
    company: "Protocase Inc.",
    duration: "May 2022 - Aug 2022",
    desc: "Developed a full-stack webApp using Java and React for AutoCAD uploads with Three.js 3D visualization. Built REST APIs for real-time pricing integration and contributed to Agile sprint planning, UML design, and documentation.",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React | React Native",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python (Django)",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Java",
    modelPath: "/models/java-transformed.glb",
    position: [0, -0.35, 0],
    scale: 1.25,
    rotation: [0.1, -Math.PI / 6, 0],
  },
  {
    name: "AWS",
    modelPath: "/models/aws_logo-transformed.glb",
    position: [0, -2.5, 0],
    scale: 0.45,
    rotation: [0, 0, 0],
  },
  {
    name: "Git | GitHub",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const project1_tools = [
  {
    name: "React Native",
    iconPath: "/images/React.png",
  },
  {
    name: "Django",
    iconPath: "/images/Django.png",
  },
  {
    name: "Azure",
    iconPath: "/images/Azure.png",
  },
  {
    name: "PostgreSQL",
    iconPath: "/images/PostgreSQL.png",
  },
  {
    name: "NativeWind",
    iconPath: "/images/Tailwind.png",
  },
];

const project2_tools = [
  {
    name: "React",
    iconPath: "/images/React.png",
  },
  {
    name: "NextJS",
    iconPath: "/images/next.png",
  },
  {
    name: "Tailwind",
    iconPath: "/images/Tailwind.png",
  },
];

const expCards = [
  {
    review: "TBD :)",
    imgPath: "/images/EstateLynx.png",
    logoPath: "/images/EstateLynx_logo.png",
    title: "Co-Founder @ EstateLynx",
    date: "January 2025 - Present",
    responsibilities: [
      "Developed a mobile App using React Native, Expo, Tailwind, and TypeScript, integrating WebSockets for chat.",
      "Implemented a REST API with Django & Django REST Framework backed by a PostgreSQL database on Azure.",
      "Engaged with clients and partners to gather feedback, validate product ideas, and establish relationships.",
      "Collaborated with stakeholders to clarify MVP requirements, ensuring alignment with consumer insights.",
    ],
  },
  {
    review:
      "Shaji quickly grew into his role, showing strong enthusiasm, initiative, and a clear desire to learn. He asked thoughtful questions, and consistently delivered more than expected. While he started off a bit nervous, his communication and technical output improved significantly over time.",
    imgPath: "/images/Ashored.png",
    logoPath: "/images/Ashored_logo.png",
    title: "Software Development Intern @ Ashored Innovations",
    date: "January 2024 - August 2024",
    responsibilities: [
      "Developed Python test scripts to thoroughly asses the functionality of MySQL database using GraphQL API.",
      "Integrated test scripts into the CI/CD pipeline using Terraform for AWS CodeBuild and Github Actions.",
      "Created Python Scripts for clients to efficiently manage users in AWS Cognito userpool groups.",
      "Created a Flutter WebApp, migrated functionality from a Flutter Andriod App and integrating backend.",
    ],
  },
  {
    review:
      "Shaji has been an excellent team member—enthusiastic, proactive, and highly dependable. He consistently delivered quality work, responded well to feedback, and worked effectively with others. As his confidence has grown, so has his impact.",
    imgPath: "/images/dal.png",
    logoPath: "/images/dal_logo.png",
    title: "Instructional Developer @ Dalhousie University",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed a website for TA training using Next.js and Tailwind CSS to improve accessibility and engagement.",
      "Developed R scripts and Power BI queries to process data and generate charts and graphs for data analysis.",
      "Built a Python web-scraper to extract Dalhousie’s academic timetable and generate instructor schedules in Excel.",
      // "Collaborated with Educational Developer and Instructors to create a TA training guide.",
      "Developed workflows using Power Automate, reducing redundancy and saving instructors’ time on routine tasks.",
    ],
  },
  {
    review:
      "Shaji was a valuable addition to the team—enthusiastic, dependable, and quick to learn. He delivered high-quality work that exceeded expectations and contributed directly to customer-facing features. I'd be happy to have him return for another term.",
    imgPath: "/images/Protocase.png",
    logoPath: "/images/image.png",
    title: "Software Developer Intern @ Protocase Inc.",
    date: "May 2022 - August 2022",
    responsibilities: [
      "Developed a website with Java, JavaScript and Bootstrap for CAD uploads, 3D viewing, and pricing estimates.",
      "Designed a REST API to send CAD templates and receive price estimates from the Pricing Server.",
      "Created UML diagrams and documentation to support onboarding and project handover.",
      "Collaborated with Marketing and Sales Directors to enhance applications based on user feedback.",
      "Utilized MySQL to store client details with price estimates to generate leads for the sales team.",
      "Presented project progress in sprint meetings, incorporating insights from senior colleagues.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

// const socialIcons = [
//   {
//     name: "Github",
//     icon: <FaGithub />,
//     url: "https://github.com/Shaji-Mohammed",
//   },
//   {
//     name: "linkedin",
//     icon: <FaLinkedin />,
//     url: "https://www.linkedin.com/in/shaji-mohd/",
//   },
//   {
//     name: "Download Resume",
//     icon: <FaDownload />,
//     url: "/Resume_Shaji.pdf",
//   },
// ];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  techStackIcons,
  techStackImgs,
  navLinks,
  project1_tools,
  project2_tools,
};
