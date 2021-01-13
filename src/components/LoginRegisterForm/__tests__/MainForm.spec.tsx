import React from 'react';
import { shallow } from 'enzyme';

import MainForm from '../MainForm';
// const clickFn = jest.fn();

describe('MainForm', () => {
  const component = shallow(<MainForm />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
