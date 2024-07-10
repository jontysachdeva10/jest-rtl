import { render, screen } from "@testing-library/react";
import React from "react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JS"];

  it("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  it("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  it("renders Login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

// queryBy, returns matching node for a query, else returns null if no element is found
  it("Start learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

// findBy returns a promise which resolves when find a given element, default timeout: 1000ms
  it("Start learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      "button",
      { name: "Start learning" },
      { timeout: 1200 }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});

// debug a test method
// using screen.debug() -> prints out the entire DOM component
// logRoles() from rtl -> helps you print out all the aria-roles elements present in DOM
