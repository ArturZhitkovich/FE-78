import { baseApi as api } from "./baseApi";
export const addTagTypes = ["auth", "blog"] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      authJwtCreateCreate: build.mutation<
        AuthJwtCreateCreateApiResponse,
        AuthJwtCreateCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/jwt/create/`,
          method: "POST",
          body: queryArg.tokenObtainPairRequest,
        }),
        invalidatesTags: ["auth"],
      }),
      authJwtRefreshCreate: build.mutation<
        AuthJwtRefreshCreateApiResponse,
        AuthJwtRefreshCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/jwt/refresh/`,
          method: "POST",
          body: queryArg.tokenRefreshRequest,
        }),
        invalidatesTags: ["auth"],
      }),
      authJwtVerifyCreate: build.mutation<
        AuthJwtVerifyCreateApiResponse,
        AuthJwtVerifyCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/jwt/verify/`,
          method: "POST",
          body: queryArg.tokenVerifyRequest,
        }),
        invalidatesTags: ["auth"],
      }),
      authUsersActivationCreate: build.mutation<
        AuthUsersActivationCreateApiResponse,
        AuthUsersActivationCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/users/activation/`,
          method: "POST",
          body: queryArg.activationRequest,
        }),
        invalidatesTags: ["auth"],
      }),
      blogGroupsList: build.query<
        BlogGroupsListApiResponse,
        BlogGroupsListApiArg
      >({
        query: (queryArg) => ({
          url: `/blog/groups/`,
          params: {
            limit: queryArg.limit,
            offset: queryArg.offset,
          },
        }),
        providesTags: ["blog"],
      }),
      blogGroupsRetrieve: build.query<
        BlogGroupsRetrieveApiResponse,
        BlogGroupsRetrieveApiArg
      >({
        query: (queryArg) => ({ url: `/blog/groups/${queryArg.id}/` }),
        providesTags: ["blog"],
      }),
      blogPostsList: build.query<BlogPostsListApiResponse, BlogPostsListApiArg>(
        {
          query: (queryArg) => ({
            url: `/blog/posts/`,
            params: {
              author__course_group: queryArg.authorCourseGroup,
              limit: queryArg.limit,
              offset: queryArg.offset,
              ordering: queryArg.ordering,
              search: queryArg.search,
            },
          }),
          providesTags: ["blog"],
        },
      ),
      blogPostsCreate: build.mutation<
        BlogPostsCreateApiResponse,
        BlogPostsCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/blog/posts/`,
          method: "POST",
          body: queryArg.createPostRequest,
        }),
        invalidatesTags: ["blog"],
      }),
      blogPostsRetrieve: build.query<
        BlogPostsRetrieveApiResponse,
        BlogPostsRetrieveApiArg
      >({
        query: (queryArg) => ({ url: `/blog/posts/${queryArg.id}/` }),
        providesTags: ["blog"],
      }),
      blogPostsUpdate: build.mutation<
        BlogPostsUpdateApiResponse,
        BlogPostsUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/blog/posts/${queryArg.id}/`,
          method: "PUT",
          body: queryArg.postRequest,
        }),
        invalidatesTags: ["blog"],
      }),
      blogPostsPartialUpdate: build.mutation<
        BlogPostsPartialUpdateApiResponse,
        BlogPostsPartialUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/blog/posts/${queryArg.id}/`,
          method: "PATCH",
          body: queryArg.patchedPostRequest,
        }),
        invalidatesTags: ["blog"],
      }),
      blogPostsDestroy: build.mutation<
        BlogPostsDestroyApiResponse,
        BlogPostsDestroyApiArg
      >({
        query: (queryArg) => ({
          url: `/blog/posts/${queryArg.id}/`,
          method: "DELETE",
        }),
        invalidatesTags: ["blog"],
      }),
      blogPostsMyPostsList: build.query<
        BlogPostsMyPostsListApiResponse,
        BlogPostsMyPostsListApiArg
      >({
        query: (queryArg) => ({
          url: `/blog/posts/my_posts/`,
          params: {
            limit: queryArg.limit,
            offset: queryArg.offset,
          },
        }),
        providesTags: ["blog"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as blogApi };
export type AuthJwtCreateCreateApiResponse =
  /** status 200  */ TokenObtainPairRead;
export type AuthJwtCreateCreateApiArg = {
  tokenObtainPairRequest: TokenObtainPairRequestWrite;
};
export type AuthJwtRefreshCreateApiResponse =
  /** status 200  */ TokenRefreshRead;
export type AuthJwtRefreshCreateApiArg = {
  tokenRefreshRequest: TokenRefreshRequestWrite;
};
export type AuthJwtVerifyCreateApiResponse = /** status 200  */ TokenVerify;
export type AuthJwtVerifyCreateApiArg = {
  tokenVerifyRequest: TokenVerifyRequest;
};
export type AuthUsersActivationCreateApiResponse =
  /** status 200  */ Activation;
export type AuthUsersActivationCreateApiArg = {
  activationRequest: ActivationRequest;
};
export type BlogGroupsListApiResponse =
  /** status 200  */ PaginatedGroupListRead;
export type BlogGroupsListApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type BlogGroupsRetrieveApiResponse = /** status 200  */ GroupRead;
export type BlogGroupsRetrieveApiArg = {
  /** A unique integer value identifying this course group. */
  id: number;
};
export type BlogPostsListApiResponse = /** status 200  */ PaginatedPostListRead;
export type BlogPostsListApiArg = {
  authorCourseGroup?: number;
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
  /** Which field to use when ordering the results. */
  ordering?: string;
  /** A search term. */
  search?: string;
};
export type BlogPostsCreateApiResponse = /** status 204  */ PostRead;
export type BlogPostsCreateApiArg = {
  createPostRequest: CreatePostRequest;
};
export type BlogPostsRetrieveApiResponse = /** status 200  */ PostRead;
export type BlogPostsRetrieveApiArg = {
  /** A unique integer value identifying this post. */
  id: number;
};
export type BlogPostsUpdateApiResponse = /** status 200  */ PostRead;
export type BlogPostsUpdateApiArg = {
  /** A unique integer value identifying this post. */
  id: number;
  postRequest: PostRequest;
};
export type BlogPostsPartialUpdateApiResponse = /** status 200  */ PostRead;
export type BlogPostsPartialUpdateApiArg = {
  /** A unique integer value identifying this post. */
  id: number;
  patchedPostRequest: PatchedPostRequest;
};
export type BlogPostsDestroyApiResponse = unknown;
export type BlogPostsDestroyApiArg = {
  /** A unique integer value identifying this post. */
  id: number;
};
export type BlogPostsMyPostsListApiResponse =
  /** status 200  */ PaginatedPostListRead;
export type BlogPostsMyPostsListApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type TokenObtainPair = {};
export type TokenObtainPairRead = {
  access: string;
  refresh: string;
};
export type TokenObtainPairRequest = {};
export type TokenObtainPairRequestWrite = {
  email: string;
  password: string;
};
export type TokenRefresh = {};
export type TokenRefreshRead = {
  access: string;
};
export type TokenRefreshRequest = {};
export type TokenRefreshRequestWrite = {
  refresh: string;
};
export type TokenVerify = {
  token: string;
};
export type TokenVerifyRequest = {
  token: string;
};
export type Activation = {
  uid: string;
  token: string;
};
export type ActivationRequest = {
  uid: string;
  token: string;
};
export type Group = {
  name: string;
};
export type GroupRead = {
  id: number;
  name: string;
};
export type PaginatedGroupList = {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: Group[];
};
export type PaginatedGroupListRead = {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: GroupRead[];
};
export type Post = {
  image: string;
  text: string;
  date?: string;
  lesson_num: number;
  title: string;
  description: string;
  author: number;
};
export type PostRead = {
  id: number;
  image: string;
  text: string;
  date?: string;
  lesson_num: number;
  title: string;
  description: string;
  author: number;
};
export type PaginatedPostList = {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: Post[];
};
export type PaginatedPostListRead = {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: PostRead[];
};
export type CreatePostRequest = {
  image: Blob;
  text: string;
  lesson_num: number;
  title: string;
  description: string;
};
export type PostRequest = {
  image: Blob;
  text: string;
  date?: string;
  lesson_num: number;
  title: string;
  description: string;
  author: number;
};
export type PatchedPostRequest = {
  image?: Blob;
  text?: string;
  date?: string;
  lesson_num?: number;
  title?: string;
  description?: string;
  author?: number;
};
export const {
  useAuthJwtCreateCreateMutation,
  useAuthJwtRefreshCreateMutation,
  useAuthJwtVerifyCreateMutation,
  useAuthUsersActivationCreateMutation,
  useBlogGroupsListQuery,
  useBlogGroupsRetrieveQuery,
  useBlogPostsListQuery,
  useBlogPostsCreateMutation,
  useBlogPostsRetrieveQuery,
  useBlogPostsUpdateMutation,
  useBlogPostsPartialUpdateMutation,
  useBlogPostsDestroyMutation,
  useBlogPostsMyPostsListQuery,
} = injectedRtkApi;
