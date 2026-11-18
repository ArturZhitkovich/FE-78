import { configureStore } from '@reduxjs/toolkit';
import savedPostReducer from './savedPostSlice';

export const store = configureStore({
  reducer: {
    // ключ savedPost — так этот кусок будет называться в state
    savedPost: savedPostReducer,
  },
});

// Типы для TypeScript: TS сам выводит их из store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;