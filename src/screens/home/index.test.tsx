import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import Home from './index'
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);
const initialState = {
  todos: []
};

const store = mockStore(initialState);

describe('Home Screen', () => {

    const renderWithStore = (ui: React.ReactElement): RenderAPI => {
      return render(<Provider store={store}>{ui}</Provider>);
    };

      test('renders correctly and matches snapshot', () => {
      const { toJSON } = renderWithStore(<Home />);
      expect(toJSON()).toMatchSnapshot();
  });
});
