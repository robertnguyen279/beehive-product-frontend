import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';
const clickFn = jest.fn();

describe('Loading', () => {
  const component = shallow(<Button onClick={clickFn}>Simulate button</Button>);
  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
  it('should been clicked', () => {
    component.find('button').simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
});
