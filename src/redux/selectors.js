import { createSelector } from 'reselect';

export const selectTodos = state => state.todos.items;
export const selectFilter = state => state.filter;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
