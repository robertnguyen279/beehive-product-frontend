import React from 'react';
import { shallow } from 'enzyme';

import Register from '../Register';
// const clickFn = jest.fn();

describe('Register', () => {
  const component = shallow(
    <Register
      onChange={() => {
        console.log('change');
      }}
    />,
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
