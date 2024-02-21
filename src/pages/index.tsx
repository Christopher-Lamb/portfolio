import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Navbar, Hero, About } from "../components";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Chris's Portfolio</title>;
