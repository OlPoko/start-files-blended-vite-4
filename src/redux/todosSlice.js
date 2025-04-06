import { createSlice, nanoid } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
          },
        };
      },
    },
    deleteTodo(state, action) {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    setCurrentTodo(state, action) {
      state.currentTodo = action.payload;
    },
    updateTodo(state, action) {
      // const index = state.items.findIndex(
      //   todo => (todo.id = action.payload.id),
      // );
      // if (index !== -1) {
      //   state.items[index] = action.payload;
      // }
      state.items = state.items.map(todo => {
        return todo.id === action.payload.id ? action.payload : todo;
      });

      state.currentTodo = null;
    },
    cancelEdit(state) {
      state.currentTodo = null;
    },
  },
});

export const { addTodo, deleteTodo, setCurrentTodo, updateTodo, cancelEdit } =
  todosSlice.actions;
export default todosSlice.reducer;
