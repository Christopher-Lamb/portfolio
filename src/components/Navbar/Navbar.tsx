import React from "react";

const style = {
  display: "grid",
  gridTemplateColumns: "1fr 1.618fr",
};

const Navbar: React.FC = () => {
  return (
    <div className="bg-gray-700 h-[var(--md)]" style={style}>
      <div className="flex items-center justify-center ">
        <div className='text-3xl text-white'>Logo</div>
      </div>
      <nav>
        <ul className="flex text-white h-[var(--md)] text-xl items-center justify-center gap-[var(--xsm2)]">
          <li>Projects</li>
          <li>Skills</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
