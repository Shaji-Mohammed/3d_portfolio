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
  { text: "Developer", imgPath: "/images/ideas.svg" },
  { text: "Software Engineer", imgPath: "/images/concepts.svg" },
  { text: "Entrepreneur", imgPath: "/images/designs.svg" },
  { text: "Trader", imgPath: "/images/code.svg" },
  { text: "Developer", imgPath: "/images/ideas.svg" },
  { text: "Software Engineer", imgPath: "/images/concepts.svg" },
  { text: "Entrepreneur", imgPath: "/images/designs.svg" },
  { text: "Trader", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 2, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
    name: "company-logo",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
    name: "company-logo",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
    name: "company-logo",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
    name: "company-logo",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
    name: "company-logo",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
    name: "company-logo",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
    name: "company-logo",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
    name: "company-logo",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
    name: "company-logo",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
    name: "company-logo",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
    name: "company-logo",
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
    name: "React/React Native",
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
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/EstateLynx.png",
    logoPath: "/images/EstateLynx_logo.png",
    title: "Co-Founder",
    date: "January 2025 - Present",
    responsibilities: [
      "Developed Python test scripts to thoroughly asses the functionality of MySQL database using GraphQL API.",
      " Developed a mobile App using React Native, Expo, Tailwind, and TypeScript, integrating real-time WebSockets for chat.",
      "Implemented a REST API with Django & Django REST Framework backed by a PostgreSQL database on Azure.",
      "Engaged with potential clients and partners to gather feedback, validate product ideas, and establish relationships.",
      "Led UI/UX design efforts to deliver a modern interface and intuitive user experience.",
    ],
  },
  {
    review:
      "Shaji quickly grew into his role, showing strong enthusiasm, initiative, and a clear desire to learn. He asked thoughtful questions, took pride in his work, and consistently delivered more than expected. While he started off a bit nervous, his communication and technical output improved significantly over time.",
    imgPath: "/images/Ashored.png",
    logoPath: "/images/Ashored_logo.png",
    title: "Software Development Intern",
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
    title: "Instructional Developer",
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
    title: "Software Developer Intern",
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

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "Github",
    imgPath: "/images/github.png",
    url: "https://github.com/Shaji-Mohammed",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/shaji-mohd/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
