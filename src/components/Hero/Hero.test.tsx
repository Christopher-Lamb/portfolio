import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  test("should render the Hero Section", () => {
    const { getByText } = render(<Hero />);
    expect(getByText("I'm Chris,")).toBeInTheDocument();
  });
});
