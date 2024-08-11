import { fireEvent, render, screen } from "@testing-library/react";
import { CounterTwo } from "./CounterTwo";
import React from "react";

describe("CounterTwo", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    const incrementBtn = screen.getByRole('button', { name: 'Increment' });
    const decrementBtn = screen.getByRole('button', { name: 'Decrement' });

    await fireEvent.click(incrementBtn);
    await fireEvent.click(decrementBtn);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);

  });
});
