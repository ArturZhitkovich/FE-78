export interface Post {
    id: number;
    image?: string;
    text: string;
    date?: string;
    lesson_num?: number;
    title: string;
    author?: number;
}

export type Variant = 'large' | 'medium' | 'small' | 'search';

// Ответ сервера со списком: посты + данные для пагинации
export interface PostsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Post[];
}

// Что можно передать в GET /blog/posts/
export interface GetPostsParams {
  limit?: number;
  offset?: number;
  search?: string;
  ordering?: string;
}