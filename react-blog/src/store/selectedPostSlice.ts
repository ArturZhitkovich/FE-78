import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Post } from "../types/post"
import type { RootState } from "./store"
import { useAppDispatch, useAppSelector } from "./hooks"
import { useCallback } from "react"

type SelectedPostState = {
  post: Post | null
}

const initialState: SelectedPostState = {
  post: null
}

export const selectedPostSlice = createSlice({
  name: 'selectedPost',
  initialState,
  reducers: {
    selectPost: (state, action: PayloadAction<Post>) => {
      state.post = action.payload;
    }, 
    clearSelectedPost: (state) => {
      state.post = null;
    }
  }
})

// 4. Action creators — их вызываем в компонентах через dispatch
export const { selectPost, clearSelectedPost } = selectedPostSlice.actions;

// 5. Селектор — функция, которая достаёт нужное из store
export const selectSelectedPost = (state: RootState) => state.selectedPost.post;

export const useSelectedPost = () => {
  const post = useAppSelector(selectSelectedPost)

  return post;
}

export const useClearSelectedPost = () => {
  const dispatch = useAppDispatch();

   const clearSelectedPostFn = useCallback(() => {
    dispatch(clearSelectedPost())
  }, [])

  return clearSelectedPostFn;
}

export const useSelectPost = (post: Post) => {
  const dispatch = useAppDispatch();

   return useCallback(() => {
    dispatch(selectPost(post))
  }, [post])
}

export default selectedPostSlice.reducer;