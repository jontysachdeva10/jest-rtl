import { render, screen } from "@testing-library/react";
import Counter from "./counter";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  it("renders correctly", () => {
    render(<Counter />);
    const textElement = screen.getByRole("heading", { level: 1 });
    const buttonElement = screen.getByRole("button", { name: "Increment" });
    expect(textElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders the count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

// Mouse user event
  it('renders the count of 1 after clicking increment button', async () => {
    userEvent.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole("button", { name: "Increment" });
    await userEvent.click(buttonElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  it('renders the count of 2 after clicking increment button', async () => {
    userEvent.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole("button", { name: "Increment" });
    await userEvent.dblClick(buttonElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  it('renders the count of 10 after clicking Set button', async () => {
    userEvent.setup();
    render(<Counter />);
    const amountInput = screen.getByRole('spinbutton');
    await userEvent.type(amountInput, '10');
    expect(amountInput).toHaveValue(10);
    const setButtonElement = screen.getByRole("button", { name: "Set" });
    await userEvent.click(setButtonElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  it('elements are focused in right order', async () => {
    userEvent.setup();
    render(<Counter />);
    const amountInput = screen.getByRole('spinbutton');
    const setButtonElement = screen.getByRole("button", { name: "Set" });
    const incrementButtonElement = screen.getByRole("button", { name: "Increment" });
    await userEvent.tab();
    expect(incrementButtonElement).toHaveFocus();
    await userEvent.tab();
    expect(amountInput).toHaveFocus();
    await userEvent.tab();
    expect(setButtonElement).toHaveFocus();
  })
});
