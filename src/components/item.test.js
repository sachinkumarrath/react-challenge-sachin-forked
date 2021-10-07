import React from "react";
import Item from "./item";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, cleanup } from "@testing-library/react";

const defaultProps = {
  confirmHandler: () => {},
  data: { key: "hello" },
  testId: "item"
};

describe("Item component", () => {
  const setup = (props) => render(<Item {...props} />);
  afterEach(cleanup);

  it("should render the text prop correctly", () => {
    // const mockConfirm = jest.fn();
    // defaultProps.confirmHandler = mockConfirm;
    const { getByTestId, getByText } = setup(defaultProps);
    getByText(defaultProps.data.key);

    // fireEvent.click(getByTestId("item"));
    // expect(mockConfirm).toHaveBeenCalledWith({
    //   section: "Welcome to Bottomline!"
    // });
  });
});
