import React from 'react';
import { shallow } from 'enzyme';

import CountrySelector from '../CountrySelector';
// const clickFn = jest.fn();

describe('CountrySelector', () => {
  const component = shallow(<CountrySelector />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
