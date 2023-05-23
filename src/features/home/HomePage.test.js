import React from "react";
import { screen } from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "tests/test-utils";
import HomePage from "./HomePage";

test("fetches & receives product list when product page loads", async () => {
  renderWithProviders(<HomePage />);

  // should show the product walkthrough presentation
  expect(screen.getByRole("presentation")).toBeInTheDocument();
});
