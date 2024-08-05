import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TodoCard from '../TodoCard';

const mockStore = configureStore([]);
const store = mockStore({});

describe('TodoCard', () => {
  it('renders correctly with given props', () => {
    const { getByText } = render(
      <Provider store={store}>
        <TodoCard 
          day="Sunday" 
          month="August" 
          title="Gym" 
          todoId={1} 
          favoriteIcon={true} 
        />
      </Provider>
    );

    expect(getByText('Sunday')).toBeTruthy();
    expect(getByText('August')).toBeTruthy();
    expect(getByText('Gym')).toBeTruthy();
  });



  it('does not render an icon if FavoriteIcon prop is false', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <TodoCard 
          day="Sunday" 
          month="August" 
          title="Gym" 
          todoId={1} 
          favoriteIcon={false} 
        />
      </Provider>
    );

    expect(queryByTestId('FavoriteIcon')).toBeNull();
    expect(queryByTestId('UnfavoriteIcon')).toBeNull();
  });
});
