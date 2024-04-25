import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import Header from "@/app/_components/Header";

describe("Home", () => {
  it("renders a hello text", () => {
    render(<Header />);

    const heading = screen.getByText("Dashboard");

    expect(heading).toBeInTheDocument();
  });
});
