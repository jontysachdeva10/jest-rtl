import React from "react";
import { customRender, screen } from "../../test-utils";
import { MuiMode } from "./MuiMode";

describe("MuiMode", () => {
  it("renders text correctly", () => {
    customRender(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
