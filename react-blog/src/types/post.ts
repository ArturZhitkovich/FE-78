// Пост — ровно то, что присылает сервер (схема Post в Swagger)
export interface Post {
  id: number;
  image: string;
  text: string;
  date?: string; // "2026-11-09"
  lesson_num: number;
  title: string;
  description: string;
  author: number;
}

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