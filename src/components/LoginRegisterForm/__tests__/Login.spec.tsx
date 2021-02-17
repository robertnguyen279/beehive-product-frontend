import React from 'react';
import { shallow } from 'enzyme';

import Login from '../Login';
// const clickFn = jest.fn();

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

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
