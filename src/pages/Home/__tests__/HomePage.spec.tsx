import React from 'react';
import { Provider } from 'react-redux';
import HomePage from '../HomePage';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
// const clickFn = jest.fn();
const mockStore = configureStore([]);
const store = mockStore({});

describe('HomePage', () => {
  const component = shallow(
    <Provider store={store}>
      <HomePage />
    </Provider>,
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
