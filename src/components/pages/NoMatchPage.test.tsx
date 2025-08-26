import React from "react";
import { render, screen } from "@testing-library/react";
import { NoMatchPage } from "./NoMatchPage";
import renderer from "react-test-renderer";

describe("NoMatchPage", () => {
  it("renders page that matches snapshot", () => {
    const tree = renderer.create(<NoMatchPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
