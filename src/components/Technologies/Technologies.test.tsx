import React from "react";
import { render } from "@testing-library/react";
import Technologies from "./Technologies";

describe("Technologies", () => {
  test("should render technologies", () => {
    const { getAllByLabelText } = render(<Technologies />);
    const technologyArr = getAllByLabelText(/ svg$/);
    expect(technologyArr).toHaveLength(9);
  });
});
