import bci_logo from "./assets/img/bci-logo.PNG";
import ldrs_logo from "./assets/img/ldrs-logo.png";
import fh_logo from "./assets/img/logov2.png";

// projects
import portfolio from "./assets/img/img-portfolio.PNG";
import summize from "./assets/img/summize.png";
import event_manager from "./assets/img/eventproject.JPG";
import calc from "./assets/img/calculator.JPG";

// icons
import iconReact from "./assets/img/react-icon.jpg";
import iconPython from "./assets/img/python-icon.jpg";
import iconJS from "./assets/img/js-icon.jpg";
import iconJava from "./assets/img/java-icon.jpg";
import iconHTML from "./assets/img/html-icon.jpg";
import iconCSS from "./assets/img/css-icon.jpg";

var desc = "";

export const projects = [
  {
    title: "My Portfolio",
    desc: "SHOWCASING MY WORK",
    tools: "JS (React) | CSS (Tailwind)",
    img: portfolio,
    github_link: "https://github.com/f-hong9/my-portfolio",
  },
  {
    title: "Footwear Site",
    desc: "E-COMMERCE FOR FOOTWEAR",
    tools: "JS (React) | MongoDB | Express | Node.js",
    img: portfolio,
    github_link: "https://github.com/f-hong9/event-manager",
  },
  {
    title: "OpenAI Article Summarizer",
    desc: "'SUMMIZE' ARTICLES",
    tools: "JS (React) | CSS (Tailwind) | Vite",
    img: summize,
    github_link: "https://github.com/f-hong9/ai-summarizer",
  },
  {
    title: "Event Management System",
    desc: "MANAGE VARIOUS EVENTS",
    tools: "Java (Swift) | MySQL",
    img: event_manager,
    github_link: "https://github.com/f-hong9/event-manager",
  },
  {
    title: "Calculator App",
    desc: "SOLVE ARITHMETIC EXPRESSIONS",
    tools: "Python (Tkinter)",
    img: calc,
    github_link: "https://github.com/f-hong9/event-manager",
  },
  {
    title: "My Portfolio",
    desc: "SHOWCASING MY WORK",
    tools: "HTML | CSS | JS",
    img: portfolio,
    github_link: "https://github.com/f-hong9/event-manager",
  },
];

export const experience = [
  {
    company: "LDRS Investments",
    role: "Full Stack Developer",
    date: "Jan 2023 - Apr 2023",
    description:
      "Launched 'EAOS'; a project designed to provide company executives an automated service for administrative tasks and management capabilities. Tech Stack: React, Django, SQlite.",
    img: ldrs_logo,
  },
  {
    company: "Self-Employed",
    role: "Computer Science Tutor",
    date: "Aug 2021 - May 2022",
    description:
      "Instructed 30+ Highschool students pursuing a career in Computer Science on programming fundamentals and professional development.",
    img: fh_logo,
  },
  {
    company: "Brain Changes Initiative",
    role: "Technician Officer",
    date: "Jan 2022 - Apr 2022",
    description:
      "Club organized at York University. \n Provided technical support on setting up meetings and responsible for maintaining up-to-date information about upcoming events.",
    img: bci_logo,
  },
];

export const icons = [
  {
    name: "React",
    alt: "React",
    style: "w-10 h-9",
    link: "https://react.dev/",
    image: iconReact,
    delay: 0,
  },
  {
    name: "Python",
    alt: "Python",
    style: "w-9 h-9",
    link: "https://docs.python.org/3/",
    image: iconPython,
    delay: 250,
  },
  {
    name: "JavaScript",
    alt: "JavaScript",
    style: "w-9 h-9",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    image: iconJS,
    delay: 500,
  },
  {
    name: "Java",
    alt: "Java",
    style: "w-10 h-10",
    link: "https://dev.java/learn/",
    image: iconJava,
    delay: 750,
  },
  {
    name: "HTML",
    alt: "HTML",
    style: "w-9 h-9",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    image: iconHTML,
    delay: 1000,
  },
  {
    name: "CSS",
    alt: "CSS",
    style: "w-9 h-9",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    image: iconCSS,
    delay: 1250,
  },
];
