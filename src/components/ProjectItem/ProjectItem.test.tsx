import React from "react";
import { default as ProjectItem, ProjectItemArray } from "./ProjectItem";
import { render } from "@testing-library/react";

const mockProjects = [
  { src: "path/to/img", alt: "To Do List", tag: "To Do List", href: "http://example.com/mock-url" },
  { src: "path/to/img", alt: "Blog Platform", tag: "Blog Platform", href: "http://example.com/mock-url" },
  { src: "path/to/img", alt: "E-Commerce Site", tag: "E-Commerce Site", href: "http://example.com/mock-url" },
];

describe("ProjectItem", () => {
  test("ProjectItem Renders correctly", () => {
    const { getByRole, getByAltText } = render(<ProjectItem src="path/to/img" alt="To Do List" href="http://example.com/mockurl" tag="To Do List" />);
    const linkEL = getByRole("link", { name: "project box" });
    expect(linkEL).toHaveAttribute("href", "http://example.com/mockurl");
  });

  test("ProjectItemArray renders correctly", () => {
    const { queryAllByRole } = render(<ProjectItemArray array={mockProjects} />);
    const projectItemArr = queryAllByRole("link", { name: "project box" });
    expect(projectItemArr).toHaveLength(3);
  });
});
