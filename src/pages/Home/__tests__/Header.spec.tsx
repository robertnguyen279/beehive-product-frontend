import React from 'react';
import Header from '../Header';
import { shallow } from 'enzyme';
// import { useSelector, useDispatch } from 'react-redux';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('Header', () => {
  const component = shallow(<Header />);

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
