import { configureStore } from "@reduxjs/toolkit";
import selectedPostReducer from './selectedPostSlice';
import { createLogger } from 'redux-logger'; // 1. Используем именованный импорт
import postsReducer from './postsSlice';
import { baseApi } from "./api/baseApi";

const logger = createLogger();

export const store = configureStore({
  reducer: {
    selectedPost: selectedPostReducer,
    fetchedPosts: postsReducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    // middleware RTK Query: отправляет запросы, чистит старый кэш
    getDefaultMiddleware().concat(baseApi.middleware, logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch