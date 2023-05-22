import { render as rtlRender, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "app/store.js";
import { Provider } from "react-redux";

const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );

test("renders App component without crashing", () => {
  const { unmount } = render(<App />);
  unmount();
});

test("renders Loader component when app configuration is still loading", () => {
  render(<App />);
  expect(screen.getByText("Loading App Configurations...")).toBeInTheDocument();
});
