import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiJest } from "react-icons/si";
import ReactTestingLibrary from "./ReactTestingLibrary";
import CssIcon from "./CssIcon";
import HtmlIcon from "./HtmlIcon";
import JestIcon from "./JestIcon";
import GatsbyIcon from "./GatsbyIcon";
import "./Technologies.css";

const size = "4rem";
const technologiesArr: { name: string; component: React.ReactNode }[] = [
  { name: "HTML", component: <HtmlIcon size={size} /> },
  { name: "CSS", component: <CssIcon size={size} /> },
  { name: "Javascript", component: <SiJavascript size={size} color="#f7e016" /> },
  { name: "Typescript", component: <SiTypescript size={size} color="#2d79c7" /> },
  { name: "React", component: <FaReact size={size} color="#61dbfb" /> },
  { name: "Tailwindcss", component: <SiTailwindcss size={size} color="#38bdf8" /> },
  { name: "React Testing Library", component: <ReactTestingLibrary size={size} /> },
  { name: "Jest", component: <JestIcon size={size} /> },
  { name: "Gastby", component: <GatsbyIcon size={size} /> },
];
//  <>{technologiesArr.map(({ name, component }) => {<div><Component />}</div>

const Technologies: React.FC = () => {
  return (
    <ul className="max-w-five h-large mx-auto flex flex-wrap gap-2xsmall justify-around items-center">
      {technologiesArr.map(({ name, component }) => (
        <li key={name} aria-label={name + " svg"}>
          <SVGWrapper>{component}</SVGWrapper>
          {/* {name} */}
        </li>
      ))}
    </ul>
  );
};

const SVGWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  //Calcuate random time
  const randomValue = Math.floor(Math.random() * 4);

  //Set dynamic css varibale
  const dynamicStyle: React.CSSProperties & { "--delay"?: string } = {
    "--delay": `${randomValue}s`,
  };

  return (
    <div className="svg-3d" style={dynamicStyle}>
      {children}
    </div>
  );
};

export default Technologies;
