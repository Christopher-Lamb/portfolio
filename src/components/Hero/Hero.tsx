import React from "react";
import PLACEHOLDER from "../assets/placeholder.jpg";
import { FaGithub, FaReact } from "react-icons/fa";
import { Technologies } from "..";
import ReactIcon from "./ReactIcon.svg";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-four flex pt-large sm:pt-0 pb-0 sm:pb-med sm:items-center ">
      <div className="max-w-four w-full mx-auto px-2xsmall md:px-0">
        <TextCard />
        {/* <ImageCard /> */}
      </div>
      <div className="absolute w-full borders bottom-one sm:bottom-med">
        <Technologies />
      </div>
    </div>
  );
};

const TextCard: React.FC = () => {
  return (
    <div>
      <div aria-hidden className="relative top-[-4rem] sm:top-[-6.5rem] left-[calc(100%-12rem)] sm:left-[calc(100%-20rem)]">
        <img src={ReactIcon} className="absolute select-none w-one h-one sm:w-two sm:h-two opacity-50" />
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
