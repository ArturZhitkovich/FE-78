import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Post } from "../types/post"
import type { RootState } from "./store"

type PostsState = {
  posts: Post[]
}

const initialState: PostsState = {
  posts: []
}

export const postsSlice = createSlice({
  name: 'fetchedPosts',
  initialState,
  reducers: {
    loadedPosts: (state, action: PayloadAction<Post[]>) => {
       state.posts = action.payload;
    },
    likePostById: (state, action: PayloadAction<number>) => {
      const post = state.posts.find(p => p.id === action.payload);

      if (post) {
        post.likes = post.likes + 1
      }
    },
    dislikePostById: (state, action: PayloadAction<number>) => {
      const post = state.posts.find(p => p.id === action.payload);

      if (post) {
        post.dislikes = post.dislikes + 1
      }
    }
  }
})

// 4. Action creators — их вызываем в компонентах через dispatch
export const { loadedPosts, likePostById, dislikePostById } = postsSlice.actions;

// // 5. Селектор — функция, которая достаёт нужное из store
export const selectCountLikesOfPost = (id: number) => (state: RootState) => {
  const foundedPost = state.fetchedPosts.posts.find((post) => post.id === id) ?? null

  return foundedPost?.likes ?? 0
}

export const selectCountDisLikesOfPost = (id: number) => (state: RootState) => {
  const foundedPost = state.fetchedPosts.posts.find((post) => post.id === id) ?? null

  return foundedPost?.dislikes ?? 0
}


export default postsSlice.reducer;