/* eslint-env jest */

import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import toJson from "enzyme-to-json";

import TestPage from "../pages/testPage";

describe("With Enzyme", () => {
  it('TestPage shows "Hello world!"', () => {
    const testPage = shallow(<TestPage />);

    expect(testPage.find("p").text()).toEqual("Hello World!");
  });
});

describe("With Snapshot Testing", () => {
  it('TestPage shows "Hello world!"', () => {
    const tree = shallow(<TestPage />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
