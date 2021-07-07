// Test away
import React from "react";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

afterEach(rtl.cleanup);
describe("Dashboard", () => {
  it("it rendered correctly", () => {
    const tree = rtl.render(<Dashboard />);
    expect(tree.baseElement).toMatchSnapshot();
  });
});
