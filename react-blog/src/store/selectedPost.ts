import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { Post } from '../types';

// 1. Как выглядит этот кусок состояния
type SelectedPostState = {
  post: Post | null;
};

// 2. Значение при старте приложения: ничего не выбрано
const initialState: SelectedPostState = {
  post: null,
};

// 3. Слайс = состояние + функции, которые его меняют
export const selectedPostSlice = createSlice({
  name: 'selectedPost',
  initialState,
  reducers: {
    // action.payload — то, что передали при вызове: selectPost(post)
    selectPost: (state, action: PayloadAction<Post | null>) => {
      state.post = action.payload;
    },
    // clearSelectedPost: (state) => {
    //   state.post = null;
    // },
  },
});

// 4. Action creators — их вызываем в компонентах через dispatch
export const { selectPost } = selectedPostSlice.actions;

// 5. Селектор — функция, которая достаёт нужное из store
export const selectSelectedPost = (state: RootState) => state.selectedPost.post;

// 6. Reducer — подключаем в store
export default selectedPostSlice.reducer;