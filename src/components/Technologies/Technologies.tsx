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
const technologiesArr: { name: string; component: React.ReactNode; shadowWidth: string; shadowHeight: string }[] = [
  { name: "HTML", component: <HtmlIcon size={size} />, shadowWidth: "44px", shadowHeight: "12px" },
  { name: "CSS", component: <CssIcon size={size} />, shadowWidth: "44px", shadowHeight: "12px" },
  { name: "Javascript", component: <SiJavascript size={size} color="#f7e016" />, shadowWidth: "54px", shadowHeight: "12px" },
  { name: "Typescript", component: <SiTypescript size={size} color="#2d79c7" />, shadowWidth: "54px", shadowHeight: "12px" },
  { name: "React", component: <FaReact size={size} color="#61dbfb" />, shadowWidth: "40px", shadowHeight: "8px" },
  { name: "Tailwindcss", component: <SiTailwindcss size={size} color="#38bdf8" />, shadowWidth: "32px", shadowHeight: "8px" },
  { name: "React Testing Library", component: <ReactTestingLibrary size={size} />, shadowWidth: "48px", shadowHeight: "12px" },
  { name: "Jest", component: <JestIcon size={size} />, shadowWidth: "48px", shadowHeight: "12px" },
  { name: "Gastby", component: <GatsbyIcon size={size} />, shadowWidth: "32px", shadowHeight: "8px" },
];
//  <>{technologiesArr.map(({ name, component }) => {<div><Component />}</div>

const Technologies: React.FC = () => {
  return (
    <ul className="max-w-five h-large mx-auto flex flex-wrap gap-2xsmall justify-around items-center">
      {technologiesArr.map(({ name, component, shadowWidth, shadowHeight }) => (
        <li key={name} className="relative flex justify-center" aria-label={name + " svg"}>
          <SVGWrapper>{component}</SVGWrapper>
          <div className="absolute bottom-[-10px] h-2 radial-color" style={{ width: shadowWidth, height: shadowHeight }}></div>
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
    <div className="svg-3d relative z-[1]" style={dynamicStyle}>
      {children}
    </div>
  );
};

export default Technologies;
