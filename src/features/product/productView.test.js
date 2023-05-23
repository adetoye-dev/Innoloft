import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { screen } from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "tests/test-utils";
import ProductView from "./productView";

// We use msw to intercept the network request during the test,
// and return the response array with a string "products" as a placeholder after 150ms
// when receiving a get request to the `/product/6781/` endpoint
export const handlers = [
  rest.get("https://api-test.innoloft.com/product/6781/", (req, res, ctx) => {
    return res(ctx.json(["products"]), ctx.delay(150));
  }),
];

const appConfig = {
  id: 1,
  logo: "https://img.innoloft.com/logo.svg",
  mainColor: "#272e71",
  hasUserSection: true,
};

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("fetches & receives product list when product page loads", async () => {
  renderWithProviders(<ProductView configuration={appConfig} />);

  // should show no product initially, and be fetching a product
  expect(screen.getByText("Fetching Product...")).toBeInTheDocument();

  // after some time, the product should be received
  expect(await screen.findByTestId("product-title")).toBeInTheDocument();
  expect(
    screen.queryByText("Fetching product failed!")
  ).not.toBeInTheDocument();
  expect(screen.queryByText("Fetching Product...")).not.toBeInTheDocument();
});
