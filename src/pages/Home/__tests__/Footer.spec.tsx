import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../Footer';
// const clickFn = jest.fn();

describe('Footer', () => {
  const component = shallow(<Footer />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
