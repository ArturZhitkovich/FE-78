import { configureStore } from "@reduxjs/toolkit";
import selectedPostReducer from './selectedPostSlice';
import { createLogger } from 'redux-logger'; // 1. Используем именованный импорт
import postsReducer from './postsSlice';

const logger = createLogger();

export const store = configureStore({
  reducer: {
    selectedPost: selectedPostReducer,
    fetchedPosts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch