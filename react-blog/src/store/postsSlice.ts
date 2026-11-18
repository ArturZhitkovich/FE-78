import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store"

type Reactions = { likes: number; dislikes: number };

type PostsState = {
  // лайки по id поста: { 12: { likes: 3, dislikes: 0 } }
  reactions: Record<number, Reactions>;
}

const initialState: PostsState = {
  reactions: {}
}

export const postsSlice = createSlice({
  name: 'fetchedPosts',
  initialState,
  reducers: {
    likePostById: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      
      state.reactions[id] ??= { likes: 0, dislikes: 0 };
      state.reactions[id].likes += 1;
    },
    dislikePostById: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      
      state.reactions[id] ??= { likes: 0, dislikes: 0 };
      state.reactions[id].dislikes += 1;
    }
  }
})

// 4. Action creators — их вызываем в компонентах через dispatch
export const { likePostById, dislikePostById } = postsSlice.actions;

// // 5. Селектор — функция, которая достаёт нужное из store
export const selectCountLikesOfPost = (id: number) => (state: RootState) => {
  const foundedPost = state.fetchedPosts.reactions[id]

  return foundedPost?.likes ?? 0
}

export const selectCountDisLikesOfPost = (id: number) => (state: RootState) => {
  const foundedPost = state.fetchedPosts.reactions[id]

  return foundedPost?.dislikes ?? 0
}

export default postsSlice.reducer;