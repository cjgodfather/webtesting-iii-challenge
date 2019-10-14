// Test away!
import React from "react";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "./Display";

afterEach(rtl.cleanup);
describe("Display", () => {
  it("it rendered correctly", () => {
    const wrapper = rtl.render(<Display />);
    const hasOpen = wrapper.queryByText(/open/i);
    const hasUnlocked = wrapper.queryByText(/unlocked/i);

    expect(wrapper.baseElement).toMatchSnapshot();
    expect(hasOpen).toBeInTheDocument();
    expect(hasUnlocked).toBeInTheDocument();
  });
});
