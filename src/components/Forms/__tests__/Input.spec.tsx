import React from 'react';
import { shallow } from 'enzyme';

import Input from '../Input';
// const clickFn = jest.fn();

describe('Input', () => {
  const component = shallow(
    <Input
      type="text"
      value="test"
      name="test"
      error="test"
      onChange={(e) => {
        console.log(e);
      }}
    />,
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
