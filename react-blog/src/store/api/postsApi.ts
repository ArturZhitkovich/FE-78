import type { GetPostsParams, Post, PostsResponse } from '../../types';
import { baseApi } from './baseApi';


export const postsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // GET /blog/posts/?limit=..&offset=..&search=..
    // build.query<ЧтоПриходит, ЧтоПередаём>
    getPosts: build.query<PostsResponse, GetPostsParams>({
      query: (params) => ({ url: '/blog/posts/', params }),
      providesTags: ['Post'],
    }),

    // GET /blog/posts/5/
    getPostById: build.query<Post, number>({
      query: (id) => `/blog/posts/${id}/`,
      providesTags: (_result, _error, id) => [{ type: 'Post', id }],
    }),

    // POST /blog/posts/ — картинку отправляем файлом, поэтому FormData
    // createPost: build.mutation<Post, FormData>({
    //   query: (formData) => ({ url: '/blog/posts/', method: 'POST', body: formData }),
    //   invalidatesTags: ['Post'],
    // }),

    // DELETE /blog/posts/5/
    // deletePost: build.mutation<void, number>({
    //   query: (id) => ({ url: `/blog/posts/${id}/`, method: 'DELETE' }),
    //   invalidatesTags: ['Post'],
    // }),
  }),
});

// Хуки RTK Query создал сам: use + ИмяЭндпоинта + Query/Mutation
export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
//   useCreatePostMutation,
//   useDeletePostMutation,
} = postsApi;