import React from "react";

const Hero: React.FC = () => {
  return (
    <div>
      <TextCard />
    </div>
  );
};

const TextCard: React.FC = () => {
  return (
    <div className="h-[var(--xsm3)]">
      <h1>HI, I'M CHRIS A REACT WEB DEVELOPER</h1>
      <div>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default Hero;
