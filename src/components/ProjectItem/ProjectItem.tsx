import React from "react";
import "./ProjectItem.css";

interface ProjectItemProps {
  src: string;
  alt: string;
  tag: string;
  href: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ src, alt, tag, href }) => {
  return (
    <a href={href} aria-label="project box">
      <div className="relative project-item w-two h-one sm:h-two sm:w-three shrink-0 bg-accent overflow-hidden">
        <img src={src} alt={alt} className="object-contain" />
        <div className="trapezoid opacity-50"></div>
        <h4 className="absolute opacity-50 bottom-0 pb-2xsmall pl-2xsmall text-med text-white archivo">{tag}</h4>
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
