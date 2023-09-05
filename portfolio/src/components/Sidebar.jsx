import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

function Sidebar() {
  return (
    <div className="sidebar h-full">
      {/* <div className="h-20 w-2 border-l-red"></div> */}
      <div className="grid grid-cols-1 w-12 fixed h-1/6 top-1/3">
        <div className="icon flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/fred-hong-to/"
            target="_blank"
            rel="noreferrer"
            className="init-fade"
          >
            <BsLinkedin color="#ccd6f6" className="w-7 h-7 " />
          </a>
        </div>
        <div className="icon flex items-center justify-center">
          <a
            href="https://github.com/fred-hong"
            target="_blank"
            rel="noreferrer"
            className="init-fade"
          >
            <BsGithub color="#ccd6f6" className="w-7 h-7" />
          </a>
        </div>
        <div className="icon flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/fred-hong-to/"
            target="_blank"
            rel="noreferrer"
            className="init-fade"
          >
            <GrMail color="#ccd6f6" className="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
