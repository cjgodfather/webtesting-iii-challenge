// Test away!
import React from "react";
import * as rtl from "react-testing-library";
import { render, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";

import Controls from "./Controls";

afterEach(rtl.cleanup);
describe("Control", () => {
  it("it rendered correctly", () => {
    const wrapper = rtl.render(<Controls />);
    expect(wrapper.baseElement).toMatchSnapshot();
  });

  it("it changes to open gate correctly", () => {
    const { getByText, findByText } = render(<Controls />);
    fireEvent.click(getByText("Close Gate"));
    findByText(/open gate/i);
  });

  it("it changes to unlock gate correctly", () => {
    const { getByText, findByText } = render(<Controls />);
    fireEvent.click(getByText("Lock Gate"));
    findByText(/unlock gate/i);
  });
});
