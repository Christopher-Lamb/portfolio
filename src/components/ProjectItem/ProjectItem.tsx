import React from "react";
import "./ProjectItem.css";
import Image from "../Image";
import { FaGithub } from "react-icons/fa";

interface ProjectItemProps {
  filename: string;
  alt: string;
  tag: string;
  href: string;
  className?: string;
  github: string;
  top?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ filename, alt, tag, href, className, github, top }) => {
  return (
    <a href={href} target="_blank" aria-label="project box" className="block">
      <div className="relative project-item w-two h-one sm:h-two sm:w-three shrink-0 bg-accent ">
        <a href={github} target="_blank" className="absolute hover:scale-110 transition circle bg-white mr-2xsmall mb-2xsmall z-[9999] bottom-0 right-0">
          <FaGithub className="" size={"4rem"} color="#000" />
        </a>
        <div className="overflow-hidden h-one sm:h-two relative">
          <Image filename={filename} alt={alt} className={`object-contains absolute ${className}`} style={{ top }} />
        </div>
        <div className="trapezoid "></div>
        <span className="absolute  bottom-0 pb-2xsmall pl-2xsmall text-med text-white archivo">{tag}</span>
      </div>
    </a>
  );
};

const ProjectItemArray: React.FC<{ array: ProjectItemProps[] }> = ({ array }) => {
  return (
    <ul className="flex flex-wrap justify-center gap-xsmall">
      {array.map((obj) => (
        <li key={obj.tag}>
          <ProjectItem {...obj} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectItem;
export { ProjectItemArray };
