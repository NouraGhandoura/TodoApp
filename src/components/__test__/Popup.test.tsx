import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Popup from '../Popup';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {describe, expect} from '@jest/globals';

jest.mock('react-native-modal', () => 'react-native-modal');

const mockStore = configureStore([]);
const store = mockStore({
  todo: {},
});

describe('<Popup />', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <Provider store={store}>
        <Popup isVisible={true} onClose={() => {}} />
      </Provider>,
    );

    expect(getByText('Add a task')).toBeDefined();
    
  });

  it('handles input change', () => {
    const {getByPlaceholderText} = render(
      <Provider store={store}>
        <Popup isVisible={true} onClose={() => {}} />
      </Provider>,
    );

    const input = getByPlaceholderText('Title');
    fireEvent.changeText(input, 'New Task Title');
    expect(input.props.value).toBe('New Task Title');
  });

  it('handles form submission with valid title', () => {
    const onCloseMock = jest.fn();
    const {getByPlaceholderText, getByText} = render(
      <Provider store={store}>
        <Popup isVisible={true} onClose={onCloseMock} />
      </Provider>,
    );

    const input = getByPlaceholderText('Title');
    fireEvent.changeText(input, 'New Task Title');
    fireEvent.press(getByText('Add'));

    expect(onCloseMock).toHaveBeenCalled();
  });
});
