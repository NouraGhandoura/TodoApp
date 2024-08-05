import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slices/todoSlice';
import { addTodo, toggleFavorite } from '../slices/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer
  },
});

describe('Redux Store', () => {
  it('should handle initial state', () => {
    const state = store.getState();
    expect(state.todos.todos).toEqual([]);
  });

  it('should handle adding a todo', () => {
    const todo = {
      title: 'New Task',
      day: 'Monday',
      month: 'August'
    };
    store.dispatch(addTodo(todo));

    const state = store.getState();
    expect(state.todos.todos).toHaveLength(1);
    expect(state.todos.todos[0]).toMatchObject({
      id: 1,
      title: 'New Task',
      day: 'Monday',
      month: 'August',
      isFavorite: false
    });
  });

  it('should handle toggling favorite status', () => {
    const todo = {
      title: 'Task to Toggle',
      day: 'Tuesday',
      month: 'August'
    };
    store.dispatch(addTodo(todo));

    const initialState = store.getState();
    const todoId = initialState.todos.todos[0].id;
    store.dispatch(toggleFavorite(todoId));

    const updatedState = store.getState();
    expect(updatedState.todos.todos[0].isFavorite).toBe(true);
    store.dispatch(toggleFavorite(todoId));
    
    const finalState = store.getState();
    expect(finalState.todos.todos[0].isFavorite).toBe(false);
  });
});
