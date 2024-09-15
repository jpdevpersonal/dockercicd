import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App Component", () => {
  test("renders the component correctly", () => {
    render(<App />);
    expect(screen.getByText("Docker CICD Test")).toBeInTheDocument();
    expect(
      screen.getByText("Built and Deployed by Github Actions")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  test("button click triggers handleClick function", () => {
    console.log = jest.fn();
    render(<App />);
    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);
    expect(console.log).toHaveBeenCalledWith("hello");
  });
});
