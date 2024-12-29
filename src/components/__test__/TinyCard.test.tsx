import { render, screen } from "@testing-library/react";
import { TinyCard } from "../TinyCard";

describe("TinyCard", () => {
  test("renders TinyCard component", () => {
    render(<TinyCard />);
    const cardElement = screen.getByTestId("tiny-card");
    expect(cardElement).toBeInTheDocument();
  });
});
