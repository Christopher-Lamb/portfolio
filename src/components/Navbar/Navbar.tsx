import React from "react";

const style = {
  display: "grid",
  gridTemplateColumns: "1fr 1.618fr",
};

const Navbar: React.FC = () => {
  return (
    <div className="h-med" style={style}>
      <div className="flex items-center justify-center ">
        <div className="text-3xl text-white">Logo</div>
      </div>
      <nav aria-label="Main navigation">
        <ul className="flex font-semibold text-accent h-med text-xl items-center justify-center gap-2xsmall">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
