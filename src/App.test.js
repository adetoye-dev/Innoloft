import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "tests/test-utils";

test("renders App component without crashing", () => {
  const { unmount } = renderWithProviders(<App />);
  unmount();
});

test("renders Loader component when app configuration is still loading", () => {
  renderWithProviders(<App />);
  expect(screen.getByText("Loading App Configurations...")).toBeInTheDocument();
});
