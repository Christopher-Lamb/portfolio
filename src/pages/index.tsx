import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Navbar, Hero, About, ProjectItemArray } from "../components";
import projectsArr from "../utils/projects";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <section id="projects" className="max-w-five mx-auto py-large">
        <h3 className="text-large text-accent archivo px-xsmall mb-xsmall">Projects</h3>
        <ProjectItemArray array={projectsArr} />
      </section>
      {/* Footer */}
      <div className="h-large bg-secondary w-full relative">
        <div className="absolute h-2xsmall bg-accent w-full"></div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Chris's Portfolio</title>;
