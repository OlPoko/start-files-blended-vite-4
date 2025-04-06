import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import filterReducer from './filterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const todosPersistConfig = {
  key: 'todos',
  storage,
};

const persistedTodosReducer = persistReducer(todosPersistConfig, todosReducer);

const store = configureStore({
  reducer: {
    todos: persistedTodosReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
export default store;
