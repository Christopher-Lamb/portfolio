import PLACEHOLDER from "../assets/placeholder.jpg";

interface Project {
  src: string;
  alt: string;
  tag: string;
  href: string;
}

const projectsArr: Project[] = [
  { src: PLACEHOLDER, alt: "To Do List", tag: "To Do List", href: "http://localhost:8000" },
  { src: PLACEHOLDER, alt: "Blog Platform", tag: "Blog Platform", href: "http://localhost:8000" },
  { src: PLACEHOLDER, alt: "E-Commerce Site", tag: "E-Commerce Site", href: "http://localhost:8000" },
  { src: PLACEHOLDER, alt: "Chat Application", tag: "Chat Application", href: "http://localhost:8000" },
  { src: PLACEHOLDER, alt: "Weather App", tag: "Weather App", href: "http://localhost:8000" },
  { src: PLACEHOLDER, alt: "Dashboard for Analytics", tag: "Dashboard for Analyitcs", href: "http://localhost:8000" },
  { src: PLACEHOLDER, alt: "Social Media Clone", tag: "Social Media Clone", href: "http://localhost:8000" },
  { src: PLACEHOLDER, alt: "Custom Component Library", tag: "Custom Component Library", href: "http://localhost:8000" },
  { src: PLACEHOLDER, alt: "Game Development", tag: "Game Development", href: "http://localhost:8000" },
];

export default projectsArr;
