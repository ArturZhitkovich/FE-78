import { baseApi } from './baseApi';
import type { Post } from './blogApi.generated';

// Только то, что генератор не умеет: отправка файла через FormData
export const postsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPost: build.mutation<Post, FormData>({
      query: (formData) => ({ url: '/blog/posts/', method: 'POST', body: formData }),
      invalidatesTags: ['blog'],
    }),
  }),
});

export const { useCreatePostMutation } = postsApi;