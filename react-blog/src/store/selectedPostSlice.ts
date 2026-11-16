import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Post } from "../types/post"

type SelectedPostState = {
  post: Post | null
}

const MOCK_POST = {
   "id": 321,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS519kK0-js16nEjuhOWRoddiqPv7HtbMPrfGCwym88Dw&s",
    "text": "SpaceX said it loaded more than 10 million pounds of fuel onto the vehicle. SpaceX said it loaded more than 10 million pounds of fuel onto the vehicle.",
    "date": "2023-01-25",
    "lesson_num": 2023,
    "title": "SpaceX completes fueling test, will now work toward massive engine firing test",
    "description": "",
    "author": 7
}

const initialState: SelectedPostState = {
  post: MOCK_POST
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
export const selectSelectedPost = (state) => state.selectedPost.post;

export default selectedPostSlice.reducer;