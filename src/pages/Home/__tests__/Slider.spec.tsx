import React from 'react';
import { shallow } from 'enzyme';

import Slider from '../Slider';
// const clickFn = jest.fn();

describe('Slider', () => {
  const component = shallow(<Slider />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
