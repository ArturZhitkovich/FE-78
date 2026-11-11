import { buildQs } from "./shared/build-qs";

export const PATHS = {
  about: () => '/about',
  posts: () => '/posts',
  post: (id: string) => buildQs(`/posts/${id}`),
}