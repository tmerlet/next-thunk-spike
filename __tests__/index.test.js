/* eslint-env jest */

import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import toJson from "enzyme-to-json";

import { Counter } from "../pages/index";

describe("Counter", () => {
  it('renders correctly with shallow"', () => {
    const noop = () => {};
    const tree = shallow(<Counter startClock={noop} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
