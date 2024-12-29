import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Footer", () => {
  test("renders Footer component", () => {
    render(<Footer />);
    const cardElement = screen.getByTestId("footer");
    expect(cardElement).toBeInTheDocument();
  });
});
