import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Navbar, Hero } from "../components";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Chris's Portfolio</title>;
