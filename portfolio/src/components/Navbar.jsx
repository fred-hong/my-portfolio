import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <header className="header-style md:sticky">
      <nav className="navbar-style">
        <div className="logo-style init-fade">
          <a href="#home">
            <img src="img/logo.png" alt="logo" />
          </a>
        </div>
        <div className="nav-link-style">
          <ol>
            <li className="init-fade">
              <a href="#aboutme">&lt;/About Me&gt;</a>
            </li>
            <li className="init-fade">
              <a href="#experience">&lt;/Experience&gt;</a>
            </li>
            <li className="init-fade">
              <a href="#projects">&lt;/Projects&gt;</a>
            </li>
            <li className="init-fade">
              <a href="#contact">&lt;/Contact&gt;</a>
            </li>
          </ol>
        </div>
      </nav>
    </header>
    // <header className="flex justify-between items-center fixed top-0 z-10 py-0 px-12 w-full h-24 bg-header-rgba filter-none pointer-events-none select-auto box-border md:sticky">
    //   {/* menu */}
    //   <nav className="flex justify-between items-center relative w-full h-full text-navbar-text font-nav z-10">
    //     <div className="flex justify-center items-center">
    //       <a className="inline-block h-14 w-14 text-inherit relative">
    //         <img className="h-14 w-14" />
    //       </a>
    //     </div>
    //     <div className="flex items-center h-full">
    //       <ol className="flex items-center justify-between p-0 m-0 list-none">
    //         <li className="my-0 mx-5 relative text-sm">
    //           <a
    //             className="inline-block h-60 w-60 text-inherit relative p-10 after:block after:content-[''] after:border-solid after:border-2 after:border-teal-rgba after:scale-x-0 after:duration-200 after:transform after:ease-in-out hover:after:scale-x-100"
    //             href="#home"
    //           >
    //             &lt;/Home&gt;
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             className="inline-block h-60 w-60 text-inherit relative p-10 after:block after:content-[''] after:border-solid after:border-2 after:border-teal-rgba after:scale-x-0 after:duration-200 after:transform after:ease-in-out hover:after:scale-x-100"
    //             href="#about-me"
    //           >
    //             &lt;/About Me&gt;
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             className="inline-block h-60 w-60 text-inherit relative p-10 after:block after:content-[''] after:border-solid after:border-2 after:border-teal-rgba after:scale-x-0 after:duration-200 after:transform after:ease-in-out hover:after:scale-x-100"
    //             href="#experience"
    //           >
    //             &lt;/Experience&gt;
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             className="inline-block h-60 w-60 text-inherit relative p-10 after:block after:content-[''] after:border-solid after:border-2 after:border-teal-rgba after:scale-x-0 after:duration-200 after:transform after:ease-in-out hover:after:scale-x-100"
    //             href="#projects"
    //           >
    //             &lt;/Projects&gt;
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             className="inline-block h-60 w-60 text-inherit relative p-10 after:block after:content-[''] after:border-solid after:border-2 after:border-teal-rgba after:scale-x-0 after:duration-200 after:transform after:ease-in-out hover:after:scale-x-100"
    //             href="#contact"
    //           >
    //             &lt;/Contact&gt;
    //           </a>
    //         </li>
    //       </ol>
    //     </div>
    //   </nav>
    // </header>
  );
}

export default Navbar;
