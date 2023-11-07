import React from "react";
import { render } from "@testing-library/react";
import Sample from "./Sample";

test("user", () => {
  const { getByTestId } = render(<Sample />);
  const name = getByTestId("user-name").textContent;
  expect(name).toBe("User");
});
