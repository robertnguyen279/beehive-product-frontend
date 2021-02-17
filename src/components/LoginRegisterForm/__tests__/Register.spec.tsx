import React from 'react';
import { shallow } from 'enzyme';

import Register from '../Register';
// const clickFn = jest.fn();

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

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
