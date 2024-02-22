import React from "react";
import PLACEHOLDER from "../assets/placeholder.jpg";
import { FaGithub, FaReact } from "react-icons/fa";
import ReactIcon from "./ReactIcon.svg";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <div className="relative h-four flex items-center">
      <div className="max-w-four w-full mx-auto">
        <TextCard />
        {/* <ImageCard /> */}
      </div>
    </div>
  );
};

const TextCard: React.FC = () => {
  return (
    <div>
      <div className="relative top-[-4rem] sm:top-[-6.5rem] left-[calc(100%-12rem)] sm:left-[calc(100%-20rem)]">
        <img src={ReactIcon} className="absolute w-one h-one sm:w-two sm:h-two opacity-50" />
      </div>
      <h1 className="relative z-1 text-secondary archivo text-med md:text-large">
        I'm Chris,
        <span className="block text-accent archivo text-large md:text-one">a web developer</span>
      </h1>
      <p className="relative z-1 text-accent font-semibold">
        I excel in creativity, code reusability, and efficiency. My projects prioritize cleanliness, user-friendliness, and clarity in design and functionality.
      </p>
      {/* <h2 className="text-white-text)]" style={{ fontSize: "var(--xsm)" }}>Developer | Innovator | Problem-Solver</h2> */}
      <FaGithub className="fill-white w-xsmall h-xsmall mt-3xsmall" />
    </div>
  );
};

export default Hero;
export { TextCard };