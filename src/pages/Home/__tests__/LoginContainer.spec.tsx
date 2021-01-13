import React from 'react';
import { shallow } from 'enzyme';

import LoginContainer from '../LoginContainer';
// const clickFn = jest.fn();

describe('LoginContainer', () => {
  const component = shallow(<LoginContainer />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
