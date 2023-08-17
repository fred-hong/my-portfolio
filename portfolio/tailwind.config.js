/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-rgba": "rgba(10, 25, 47, 0.85)",
        "navbar-text": "#ccd6f6;",
        "teal-rgba": "#64ffda",
      },
      fontFamily: {
        nav: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
