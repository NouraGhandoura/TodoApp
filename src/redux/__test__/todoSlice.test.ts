import todoReducer, { addTodo, toggleFavorite, IToDoTask } from '../slices/todoSlice';

describe('todoSlice', () => {
  const initialState = {
    todos: [] as IToDoTask[],
  };

  it('should handle initial state', () => {
    expect(todoReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle addTodo', () => {
    const newTodo = {
      title: 'New Task',
      day: 'Monday',
      month: 'August',
    };

    const state = todoReducer(initialState, addTodo(newTodo));
    
    expect(state.todos.length).toBe(1);
    expect(state.todos[0]).toEqual({
      id: 1,
      ...newTodo,
      isFavorite: false,
    });
  });

  it('should handle addTodo with multiple todos', () => {
    const stateWithTodos = {
      todos: [
        { id: 1, title: 'Task 1', day: 'Monday', month: 'August', isFavorite: false },
      ],
    };

    const newTodo = {
      title: 'Task 2',
      day: 'Tuesday',
      month: 'August',
    };

    const state = todoReducer(stateWithTodos, addTodo(newTodo));

    expect(state.todos.length).toBe(2);
    expect(state.todos[1]).toEqual({
      id: 2,
      ...newTodo,
      isFavorite: false,
    });
  });

  it('should handle toggleFavorite', () => {
    const stateWithTodos = {
      todos: [
        { id: 1, title: 'Task 1', day: 'Monday', month: 'August', isFavorite: false },
      ],
    };

    const state = todoReducer(stateWithTodos, toggleFavorite(1));

    expect(state.todos[0].isFavorite).toBe(true);
  });
})
