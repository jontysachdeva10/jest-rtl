import { render, screen } from "@testing-library/react";
import { Users } from "./User";
import React from "react";
import { server } from "@/mocks/server";
import { http, HttpResponse } from "msw";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  test("renders error", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        // ...and respond to them using this JSON response.
        return new HttpResponse("Error fetching users", {
          status: 500,
        });
      })
    );

    render(<Users />);
    const error = await screen.findByText("Error fetching users");
    expect(error).toBeInTheDocument();
  });
});
