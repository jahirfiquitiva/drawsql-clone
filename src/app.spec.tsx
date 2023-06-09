import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { App } from "./app";

test("App should render New Table button", () => {
  const { getByText } = render(<App />);
  expect(getByText("New Table", { exact: false })).toBeInTheDocument();
});
