import React from "react";
import { render, screen } from "@testing-library/react";
import { AboutPage } from "./AboutPage";
import renderer from "react-test-renderer";

describe("AboutPage", () => {
  it("renders page that matches snapshot", () => {
    const tree = renderer.create(<AboutPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
