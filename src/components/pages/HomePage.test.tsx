import React from "react";
import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";
import renderer from "react-test-renderer";

describe("HomePage", () => {
  it("renders page that matches snapshot", () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
