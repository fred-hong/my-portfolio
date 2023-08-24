import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Home from "../components/Home";
import About from "../components/AboutMe";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import f_logo from "../assets/img/F.png";
// import h_logo from "../assets/img/H.png";
import Sidebar from "../components/Sidebar";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  // loading page
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className="layout-style">
      {isLoading ? (
        <div className="loading">
          <svg viewBox="0 0 100 100">
            <polygon
              className="octagon"
              points="50,0 90,25 90,75 50,100 10,75 10,25"
            />
          </svg>
          {/* <a href="/" className="lr">
            <img src={f_logo} alt="f" />
          </a>
          <a href="/" className="rl">
            <img src={h_logo} alt="h" />
          </a> */}
        </div>
      ) : (
        <>
          <Navbar />
          <Sidebar />
          <div id="content">
            <main class="main-template fillHeight">
              <Home />
              <Fade bottom distance="50px">
                <About />
              </Fade>
              <Fade bottom distance="50px">
                <Experience />
              </Fade>
              <Fade bottom distance="50px">
                <Projects />
              </Fade>
              <Contact />
            </main>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
