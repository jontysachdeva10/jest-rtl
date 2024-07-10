import { render, screen } from "@testing-library/react";
import Greet from "./greet";
import React from "react";

describe("Greet Component", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
  });

  it("renders with a name", () => {
    render(<Greet name="Jonty" />);
    const textElement = screen.getByText(/Hello Jonty/i);
    expect(textElement).toBeInTheDocument();
  });
});
