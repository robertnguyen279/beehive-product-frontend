import React from 'react';
import { shallow } from 'enzyme';

import Login from '../Login';
// const clickFn = jest.fn();

describe('Login', () => {
  const component = shallow(
    <Login
      onChange={() => {
        console.log('change');
      }}
    />,
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
