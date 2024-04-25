import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/app/_components/Header";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import { createMockRouter } from "../test-utils/createMockRouter";

describe("Header component", () => {
  it("should render correctly", () => {
    render(<Header />);
    // Check if user name and role are displayed
    expect(screen.getByText("Preethilakshmi K")).toBeInTheDocument();
    expect(screen.getByText("Admin")).toBeInTheDocument();
    // Check if menu items are displayed
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Create Test")).toBeInTheDocument();
    expect(screen.getByText("Upload CSV")).toBeInTheDocument();
    expect(screen.getByText("View Result")).toBeInTheDocument();
  });

  // it("should have correct path", () => {
  //   render(
  //     <RouterContext.Provider value={createMockRouter({ route: "/dashboard" })}>
  //       <Header />,
  //     </RouterContext.Provider>,
  //   );
  //   expect(screen.getByText("Dashboard")).toHaveClass("bg-sky-700");
  // });
});
