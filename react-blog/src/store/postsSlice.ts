import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { Post } from '../types';

// 1. Как выглядит этот кусок состояния
type PostsState = {
  posts: Post[]
};

// 2. Значение при старте приложения: ничего не выбрано
const initialState: PostsState = {
  posts: [],
};

// 3. Слайс = состояние + функции, которые его меняют
export const postsSlice = createSlice({
  name: 'fetchedPosts',
  initialState,
  reducers: {
    // action.payload — то, что передали при вызове: selectPost(post)
    loadedPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },

  },
});

// 4. Action creators — их вызываем в компонентах через dispatch
export const { loadedPosts } = postsSlice.actions;

// 5. Селектор — функция, которая достаёт нужное из store
// export const selectSelectedPost = (state: RootState) => state.selectedPost.post;

export const selectPosts = (state: RootState) => state.fetchedPosts.posts;

// 6. Reducer — подключаем в store
export default postsSlice.reducer;