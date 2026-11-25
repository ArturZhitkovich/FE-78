import { buildQs } from "./shared/build-qs";

export const PATHS = {
  about: () => '/about',
  cards: () => '/cards',
  card: (id: string) => buildQs(`/cards/${id}`),
  posts: () => '/posts',
  post: (id: string) => buildQs(`/posts/${id}`),
  notFound: () => '/not-found',
  activate: (uid: string, token: string) => `/activate/${uid}/${token}`,

  login: () => '/login',
  register: () => '/register'
}