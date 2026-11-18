import type { GetPostsParams, Post, PostsResponse } from "../../types/post";
import { baseApi } from "./baseApi";

export const postsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // GET /blog/posts/?limit=..&offset=..&search=..
    // build.query<ЧтоПриходит, ЧтоПередаём>
    getPosts: build.query<PostsResponse, GetPostsParams>({
      query: (params) => ({ url: `/blog/posts/`, params }),
      providesTags: ['Post'],
    }),

     // GET /blog/posts/5/
    getPostById: build.query<Post, number>({
      query: (id) => `/blog/posts/${id}/`,
      providesTags: (_result, _error, id) => [{ type: 'Post', id }],
    }),

    // DELETE /blog/posts/5/
     deletePost: build.mutation<void, number>({
      query: (id) => ({ url: `/blog/posts/${id}/`, method: 'DELETE' }),
      invalidatesTags: ['Post'],
    }),
  })
})

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useDeletePostMutation
} = postsApi