import React from 'react';
import { render } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Favorite from './index';

const mockStore = configureStore([]);
const initialState = {
  todos: []
};

const store = mockStore(initialState);

describe('Favorite Screen', () => {
  it('renders correctly', () => {
    render( <Provider store={store}>
      <Favorite />
    </Provider>);
  });
});
