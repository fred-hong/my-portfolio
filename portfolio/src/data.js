import bci_logo from "./assets/img/bci-logo.PNG";
import ldrs_logo from "./assets/img/ldrs-logo.png";
import fh_logo from "./assets/img/logov2.png";
import portfolio from "./assets/img/img-portfolio.PNG";
import summize from "./assets/img/summize.png";
import event_manager from "./assets/img/eventproject.JPG";
import calc from "./assets/img/calculator.JPG";

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
    description: "test",
    img: ldrs_logo,
  },
  {
    company: "Self-Employed",
    role: "Computer Science Tutor",
    date: "Aug 2021 - May 2022",
    description: "Test",
    img: fh_logo,
  },
  {
    company: "Brain Changes Initiative",
    role: "Technician Officer",
    date: "Jan 2022 - Apr 2022",
    description: "Test",
    img: bci_logo,
  },
];
