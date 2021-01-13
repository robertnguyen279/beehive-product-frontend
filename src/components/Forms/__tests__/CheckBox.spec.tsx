import React from 'react';
import { shallow } from 'enzyme';

import CheckBox from '../CheckBox';
// const clickFn = jest.fn();

describe('CheckBox', () => {
  const component = shallow(
    <CheckBox
      name="test"
      label="test"
      value="test"
      onChange={(e) => {
        console.log(e);
      }}
    />,
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
