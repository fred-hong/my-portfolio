import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="layout-style">
      <Navbar />
      <div id="content">
        <main class="main-template fillHeight">
          <Home />
          <About />
          <Experience />
          <Projects />
          {/* <Contact /> */}
        </main>
      </div>
    </div>
  );
}

export default App;
