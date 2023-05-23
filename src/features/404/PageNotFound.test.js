import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/tests/test-utils";
import PageNotFound from "./PageNotFound";

test("expect page not found text to be shown on page", () => {
  renderWithProviders(<PageNotFound />);

  expect(
    screen.getByText("The requested page could not be found.")
  ).toBeInTheDocument();
});
