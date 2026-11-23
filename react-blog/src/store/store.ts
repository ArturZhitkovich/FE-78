import { configureStore } from '@reduxjs/toolkit';
import savedPostReducer from './savedPostSlice';
import postsReducer from './postsSlice'; 
import selectedPostReducer from './selectedPost'
import { createLogger } from 'redux-logger'
import { baseApi } from './api/baseApi';

const logger = createLogger();

export const store = configureStore({
  reducer: {
    // ключ savedPost — так этот кусок будет называться в state
    savedPost: savedPostReducer,
    fetchedPosts: postsReducer,
    selectedPost: selectedPostReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware,logger),
});

// Типы для TypeScript: TS сам выводит их из store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

