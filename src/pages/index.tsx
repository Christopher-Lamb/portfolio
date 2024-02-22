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
      <section className="max-w-five mx-auto py-large">
        <h3 className="text-large text-accent archivo px-xsmall mb-xsmall">Projects</h3>
        <ProjectItemArray array={projectsArr} />
      </section>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Chris's Portfolio</title>;
