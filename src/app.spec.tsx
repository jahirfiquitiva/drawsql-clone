import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { App } from "./app";

test("App should render Koombea", () => {
  const { getByText } = render(<App />);
  expect(getByText("Koombea")).toBeInTheDocument();
});
