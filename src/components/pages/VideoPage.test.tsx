import React from "react";
import { render, screen } from "@testing-library/react";
import { VideoPage } from "./VideoPage";
import renderer from "react-test-renderer";

describe("VideoPage", () => {
  it("renders page that matches snapshot", () => {
    const tree = renderer.create(<VideoPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
