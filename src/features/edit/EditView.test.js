import React from "react";
import { screen } from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "tests/test-utils";
import EditView from "./editView";

test("redirects to product page if no product is found", () => {
  renderWithProviders(<EditView />);

  // expected not to have product data on the page except you're routing from the product page
  // where the product data would have been fetched and stored in the redux store.
  expect(screen.queryByTestId("product-title")).not.toBeInTheDocument();
});
