import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { Post } from '../types';

// 1. Как выглядит этот кусок состояния
type SavedPostState = {
  posts: Post[];
};

// 2. Значение при старте приложения: ничего не выбрано
const initialState: SavedPostState = {
  posts: [],
};

// 3. Слайс = состояние + функции, которые его меняют
export const savedPostSlice = createSlice({
  name: 'savedPost',
  initialState,
  reducers: {
    // action.payload — то, что передали при вызове: savePost(post)
    savePost: (state, action: PayloadAction<Post>) => {
      const exists = state.posts.some(p => p.id === action.payload.id);
      if(!exists){
        state.posts.push(action.payload)
      }
    },
    removeSavedPost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter(p => p.id !== action.payload);
    },
  },
});

// 4. Action creators — их вызываем в компонентах через dispatch
export const { savePost, removeSavedPost } = savedPostSlice.actions;

// 5. Селектор — функция, которая достаёт нужное из store
export const selectIsSavedPost = (id: number) => (state: RootState) => state.savedPost.posts.some(p => p.id === id);

// 6. Reducer — подключаем в store
export default savedPostSlice.reducer;