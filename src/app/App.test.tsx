import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText("S7 Star Wars App")).toBeInTheDocument();
  });
});
