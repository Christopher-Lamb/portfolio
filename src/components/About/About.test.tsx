import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About Component", () => {
  test("should render About Section", () => {
    const { getByRole } = render(<About />);
    const heading = getByRole("heading", { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("About");
  });
});
