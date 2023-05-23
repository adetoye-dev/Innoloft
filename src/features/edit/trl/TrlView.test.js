import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { screen } from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "tests/test-utils";
import TrlView from "./TrlView";

// We use msw to intercept the network request during the test,
// and return the response array with a string "trl-list" as a placeholder after 150ms
// when receiving a get request to the `/trl/` endpoint
export const handlers = [
  rest.get("https://api-test.innoloft.com/trl/", (req, res, ctx) => {
    return res(ctx.json(["trl-list"]), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test("fetches & receives trl list when product page loads", async () => {
  renderWithProviders(<TrlView />);

  // should show no list initially, and be fetching trl
  expect(screen.getByText("Fetching Trl list...")).toBeInTheDocument();

  // after some time, should receive and render trl to page
  expect(await screen.findByText("Select TRL")).toBeInTheDocument();
  expect(
    screen.queryByText("Error fetching trl list!")
  ).not.toBeInTheDocument();
  expect(screen.queryByText("Fetching Trl list...")).not.toBeInTheDocument();
});
