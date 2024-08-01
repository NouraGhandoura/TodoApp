import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IToDoTask {
  id: number;
  title: string;
  day: string;
  month: string;
  isFavorite: boolean;
}

interface TodoState {
  todos: IToDoTask[];
  
}

const initialState: TodoState = {
  todos: [],
 
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{
      title: string;
      day: string;
      month: string;
    }>) => {
      const newId = state.todos.length > 0
        ? Math.max(...state.todos.map(todo => todo.id)) + 1
        : 1;

      
      const newTodo: IToDoTask = {
        id: newId,
        isFavorite: false,
        ...action.payload,
      };

      state.todos.push(newTodo);
    },
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const todoId = action.payload;
      const todo = state.todos.find(todo => todo.id === todoId);
     
      if (todo) {     
        todo.isFavorite = !todo.isFavorite;
      }
    },
  },
});


export const { addTodo, toggleFavorite } = todoSlice.actions;
export default todoSlice.reducer;

