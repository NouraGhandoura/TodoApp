import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import Favorite from './index'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);
const initialState = {
  todos: []
};

const store = mockStore(initialState);

describe('Favorite Screen', () => {

    const renderWithStore = (ui: React.ReactElement): RenderAPI => {
      return render(<Provider store={store}>{ui}</Provider>);
    };

      test('renders correctly and matches snapshot', () => {
      const { toJSON } = renderWithStore(<Favorite />);
      expect(toJSON()).toMatchSnapshot();
  });
});
