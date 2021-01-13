import React from 'react';
import { Provider } from 'react-redux';
import Header from '../Header';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
// const clickFn = jest.fn();
const mockStore = configureStore([]);
const store = mockStore({});

describe('Header', () => {
  const component = shallow(
    <Provider store={store}>
      <Header />
    </Provider>,
  );

  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
