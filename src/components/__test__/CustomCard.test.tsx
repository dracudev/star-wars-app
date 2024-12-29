import { render, screen } from "@testing-library/react";
import CustomCard from "../CustomCard";

describe("CustomCard", () => {
  test("renders CustomCard component", () => {
    render(<CustomCard />);
    const cardElement = screen.getByTestId("custom-card");
    expect(cardElement).toBeInTheDocument();
  });
});
