import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("should render the navigation bar", () => {
    const { getByRole } = render(<Navbar />);
    const navBar = getByRole("navigation", { name: "Main navigation" });
    expect(navBar).toBeInTheDocument();

    // Additionally, check if specific links are rendered
    expect(screen.getByRole("link", { name: "Projects" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Skills" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });
});
