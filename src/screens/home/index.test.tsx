import React from 'react';
import { render } from '@testing-library/react-native';
import Home from './index'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);
const initialState = {
  todos: []
};

const store = mockStore(initialState);

describe('Home Screen', () => {
  it('renders correctly', () => {
    render( <Provider store={store}>
      <Home />
    </Provider>);
  });
});
