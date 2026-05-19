import portrait from "../../images/main-image-Photoroom.png";
import resume from "../../ARNAV_BHURE_resume.pdf";
import codechefIcon from "../../images/icons8-codechef-100.png";
import codeforcesIcon from "../../images/icons8-codeforces-100.png";
import hackerrankIcon from "../../images/icons8-hackerrank-96.png";
import leetcodeIcon from "../../images/icons8-leetcode-96.png";
import gfgIcon from "../../images/icons8-geeksforgeeks-48.png";
import codolioIcon from "../../images/codolio.svg";

export const assets = {
  portrait,
  resume,
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Profiles", href: "#profiles" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/in/arnav-bhure-82a24b37b",
    icon: "linkedin",
  },
  { label: "GitHub", href: "https://github.com/arnavbhure", icon: "github" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_arnavbhure_/",
    icon: "instagram",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918380058042?text=Hello",
    icon: "whatsapp",
  },
  {
    label: "Email",
    href: "mailto:arnavbhure1208@gmail.com?subject=Hello&body=Hi, I'd like to contact you.",
    icon: "mail",
  },
];

export const hero = {
  name: "Arnav Bhure",
  role: "Full Stack Developer Building Scalable Web Systems",
  statement: "Building systems people actually use.",
  subcopy:
    "I turn curiosity into interfaces, product ideas into working prototypes, and engineering practice into clear user experiences.",
  availability: "IIIT Bhagalpur / ECE 2029 / India",
};

export const aboutHighlights = [
  "Undergraduate at the Indian Institute of Information Technology Bhagalpur",
  "Electronics & Communication Engineering, expected graduation 2029",
  "Learning by building, debugging, and understanding how systems behave",
  "Interested in products that make relocation, commerce, and everyday workflows simpler",
];

export const aboutCopy = [
  "My name is Arnav Bhure. I am an undergraduate student at the Indian Institute of Information Technology Bhagalpur, pursuing a Bachelor degree in Electronics & Communication Engineering with an expected graduation year of 2029.",
  "I am currently learning programming languages and development tools with a focus on understanding how things work rather than memorizing syntax. I enjoy solving problems, improving my logical thinking, and shaping ideas into usable products.",
];

export const projects = [
  {
    title: "CityLink",
    type: "Featured product idea",
    year: "2026",
    accent: "cyan",
    live: "https://citylink-nine.vercel.app/",
    github: "https://github.com/arnavbhure/City-Link",
    stack: [
      "React",
      "Student relocation",
      "Housing discovery",
      "Service marketplace",
      "Product thinking",
    ],
    problem:
      "Students moving to a new city often rely on scattered groups, unverified listings, and word-of-mouth for roommates, housing, and essential services.",
    solution:
      "CityLink creates a structured student-first platform where relocation decisions become searchable, comparable, and easier to trust.",
    impact:
      "The idea reduces friction at the exact moment students need clarity: finding compatible roommates, reliable housing, and useful local support faster.",
    summary:
      "A student relocation platform that brings roommate discovery, housing, and local services into one focused experience.",
  },
  {
    title: "React E-Commerce Store",
    type: "Commerce interface",
    year: "2026",
    accent: "blue",
    live: "https://ecommerceapp1208.vercel.app/",
    github: "https://github.com/arnavbhure/E-Commerce-Web-App",
    stack: ["React", "Redux", "Bootstrap", "Public API", "Responsive UI"],
    summary:
      "A modern e-commerce app with product listing, dynamic API fetching, Redux state management, product details, and responsive browsing flows.",
  },
  {
    title: "Myntra Clone (React)",
    type: "Fashion commerce study",
    year: "2026",
    accent: "green",
    live: null,
    github: "https://github.com/arnavbhure/Myntra-Clone",
    stack: ["React", "Redux", "Bootstrap", "Filtering", "Custom CSS"],
    summary:
      "A fully responsive Myntra-inspired web app with dynamic product browsing, category filtering, interactive UI, and a clean shopping experience.",
  },
  {
    title: "Amazon Clone",
    type: "Layout practice",
    year: "2025",
    accent: "amber",
    live: null,
    github: "https://github.com/arnavbhure/amazon-clone",
    stack: ["HTML", "CSS", "Responsive layout", "Page structure"],
    summary:
      "A static Amazon-inspired frontend page created to practice layout, styling, visual hierarchy, and e-commerce homepage structure.",
  },
  {
    title: "Tic Tac Toe",
    type: "Interactive game",
    year: "2025",
    accent: "cyan",
    live: "https://tic-tac-toe-game-three-ecru.vercel.app/",
    github: "https://github.com/arnavbhure/Rock-Paper-Scissors",
    stack: ["HTML", "CSS", "JavaScript", "Game state", "DOM updates"],
    summary:
      "A classic two-player Tic Tac Toe game that detects wins, handles draw states, and updates the interface from game state.",
  },
];

export const skillGroups = [
  {
    category: "Frontend",
    signal: "interface",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    signal: "systems",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication with JWT"],
  },
  {
    category: "Database",
    signal: "data",
    skills: ["PostgreSQL", "SQL", "Schema thinking", "Data relationships"],
  },
  {
    category: "Tools",
    signal: "workflow",
    skills: ["Git", "GitHub", "Vite", "Vercel", "VS Code"],
  },
  {
    category: "Languages",
    signal: "logic",
    skills: ["C++", "JavaScript", "Python", "SQL"],
  },
];

export const profiles = [
  {
    name: "GitHub",
    href: "https://github.com/arnavbhure",
    metric: "projects",
    value: "build log",
    icon: null,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/arnavbhure/",
    metric: "practice",
    value: "DSA reps",
    icon: leetcodeIcon,
  },
  {
    name: "Codeforces",
    href: "https://codeforces.com/profile/arnavbhure",
    metric: "contests",
    value: "active",
    icon: codeforcesIcon,
  },
  {
    name: "CodeChef",
    href: "https://www.codechef.com/users/arnavbhure",
    metric: "practice",
    value: "active",
    icon: codechefIcon,
  },
  {
    name: "HackerRank",
    href: "https://www.hackerrank.com/profile/arnavbhure1208",
    metric: "problem solving",
    value: "profile",
    icon: hackerrankIcon,
  },
  {
    name: "GeeksforGeeks",
    href: "https://www.geeksforgeeks.org/profile/arnavbhu16wp",
    metric: "articles + DSA",
    value: "profile",
    icon: gfgIcon,
  },
  {
    name: "Codolio",
    href: "https://codolio.com/profile/arnavbhure",
    metric: "coding identity",
    value: "hub",
    icon: codolioIcon,
  },
];

export const timeline = [
  {
    marker: "01",
    title: "Learning C++",
    description:
      "Built the base for structured thinking, syntax discipline, and problem-solving through C++ practice.",
  },
  {
    marker: "02",
    title: "Frontend Foundations",
    description:
      "Moved into HTML, CSS, and JavaScript to understand layout, interaction, and how browsers assemble user experiences.",
  },
  {
    marker: "03",
    title: "React Systems",
    description:
      "Started building reusable components, state-driven interfaces, and faster product iterations with React.",
  },
  {
    marker: "04",
    title: "Backend Curiosity",
    description:
      "Expanded into Node.js, Express, APIs, and database thinking to understand the product beyond the screen.",
  },
  {
    marker: "05",
    title: "Full-Stack Direction",
    description:
      "Connected frontend craft with data, routing, deployment, and real workflows that can support usable products.",
  },
  {
    marker: "06",
    title: "Building CityLink",
    description:
      "Turned a student relocation problem into a focused product concept for roommates, housing, and city services.",
  },
];

export const contact = {
  email: "arnavbhure1208@gmail.com",
  formKey: "2b897b84-4152-4c46-9c1b-153bdd1a606e",
};
