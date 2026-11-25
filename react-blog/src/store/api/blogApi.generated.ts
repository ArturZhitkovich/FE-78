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
      authUsersList: build.query<AuthUsersListApiResponse, AuthUsersListApiArg>(
        {
          query: (queryArg) => ({
            url: `/auth/users/`,
            params: {
              limit: queryArg.limit,
              offset: queryArg.offset,
            },
          }),
          providesTags: ["auth"],
        },
      ),
      authUsersCreate: build.mutation<
        AuthUsersCreateApiResponse,
        AuthUsersCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/users/`,
          method: "POST",
          body: queryArg.customUserCreateRequest,
        }),
        invalidatesTags: ["auth"],
      }),
      authUsersRetrieve: build.query<
        AuthUsersRetrieveApiResponse,
        AuthUsersRetrieveApiArg
      >({
        query: (queryArg) => ({ url: `/auth/users/${queryArg.id}/` }),
        providesTags: ["auth"],
      }),
      authUsersUpdate: build.mutation<
        AuthUsersUpdateApiResponse,
        AuthUsersUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/users/${queryArg.id}/`,
          method: "PUT",
          body: queryArg.userRequest,
        }),
        invalidatesTags: ["auth"],
      }),
      authUsersPartialUpdate: build.mutation<
        AuthUsersPartialUpdateApiResponse,
        AuthUsersPartialUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/users/${queryArg.id}/`,
          method: "PATCH",
          body: queryArg.patchedUserRequest,
        }),
        invalidatesTags: ["auth"],
      }),
      authUsersDestroy: build.mutation<
        AuthUsersDestroyApiResponse,
        AuthUsersDestroyApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/users/${queryArg.id}/`,
          method: "DELETE",
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
      authUsersMeRetrieve: build.query<
        AuthUsersMeRetrieveApiResponse,
        AuthUsersMeRetrieveApiArg
      >({
        query: () => ({ url: `/auth/users/me/` }),
        providesTags: ["auth"],
      }),
      authUsersMeUpdate: build.mutation<
        AuthUsersMeUpdateApiResponse,
        AuthUsersMeUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/users/me/`,
          method: "PUT",
          body: queryArg.userRequest,
        }),
        invalidatesTags: ["auth"],
      }),
      authUsersMePartialUpdate: build.mutation<
        AuthUsersMePartialUpdateApiResponse,
        AuthUsersMePartialUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/users/me/`,
          method: "PATCH",
          body: queryArg.patchedUserRequest,
        }),
        invalidatesTags: ["auth"],
      }),
      authUsersMeDestroy: build.mutation<
        AuthUsersMeDestroyApiResponse,
        AuthUsersMeDestroyApiArg
      >({
        query: () => ({ url: `/auth/users/me/`, method: "DELETE" }),
        invalidatesTags: ["auth"],
      }),
      authUsersResendActivationCreate: build.mutation<
        AuthUsersResendActivationCreateApiResponse,
        AuthUsersResendActivationCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/users/resend_activation/`,
          method: "POST",
          body: queryArg.sendEmailResetRequest,
        }),
        invalidatesTags: ["auth"],
      }),
      authUsersResetEmailCreate: build.mutation<
        AuthUsersResetEmailCreateApiResponse,
        AuthUsersResetEmailCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/users/reset_email/`,
          method: "POST",
          body: queryArg.sendEmailResetRequest,
        }),
        invalidatesTags: ["auth"],
      }),
      authUsersResetEmailConfirmCreate: build.mutation<
        AuthUsersResetEmailConfirmCreateApiResponse,
        AuthUsersResetEmailConfirmCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/users/reset_email_confirm/`,
          method: "POST",
          body: queryArg.usernameResetConfirmRequest,
        }),
        invalidatesTags: ["auth"],
      }),
      authUsersResetPasswordCreate: build.mutation<
        AuthUsersResetPasswordCreateApiResponse,
        AuthUsersResetPasswordCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/users/reset_password/`,
          method: "POST",
          body: queryArg.sendEmailResetRequest,
        }),
        invalidatesTags: ["auth"],
      }),
      authUsersResetPasswordConfirmCreate: build.mutation<
        AuthUsersResetPasswordConfirmCreateApiResponse,
        AuthUsersResetPasswordConfirmCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/users/reset_password_confirm/`,
          method: "POST",
          body: queryArg.passwordResetConfirmRequest,
        }),
        invalidatesTags: ["auth"],
      }),
      authUsersSetEmailCreate: build.mutation<
        AuthUsersSetEmailCreateApiResponse,
        AuthUsersSetEmailCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/users/set_email/`,
          method: "POST",
          body: queryArg.setUsernameRequest,
        }),
        invalidatesTags: ["auth"],
      }),
      authUsersSetPasswordCreate: build.mutation<
        AuthUsersSetPasswordCreateApiResponse,
        AuthUsersSetPasswordCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/users/set_password/`,
          method: "POST",
          body: queryArg.setPasswordRequest,
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
export type AuthUsersListApiResponse = /** status 200  */ PaginatedUserListRead;
export type AuthUsersListApiArg = {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
};
export type AuthUsersCreateApiResponse =
  /** status 201  */ CustomUserCreateRead;
export type AuthUsersCreateApiArg = {
  customUserCreateRequest: CustomUserCreateRequestWrite;
};
export type AuthUsersRetrieveApiResponse = /** status 200  */ UserRead;
export type AuthUsersRetrieveApiArg = {
  /** A unique integer value identifying this user. */
  id: number;
};
export type AuthUsersUpdateApiResponse = /** status 200  */ UserRead;
export type AuthUsersUpdateApiArg = {
  /** A unique integer value identifying this user. */
  id: number;
  userRequest: UserRequest;
};
export type AuthUsersPartialUpdateApiResponse = /** status 200  */ UserRead;
export type AuthUsersPartialUpdateApiArg = {
  /** A unique integer value identifying this user. */
  id: number;
  patchedUserRequest: PatchedUserRequest;
};
export type AuthUsersDestroyApiResponse = unknown;
export type AuthUsersDestroyApiArg = {
  /** A unique integer value identifying this user. */
  id: number;
};
export type AuthUsersActivationCreateApiResponse =
  /** status 200  */ Activation;
export type AuthUsersActivationCreateApiArg = {
  activationRequest: ActivationRequest;
};
export type AuthUsersMeRetrieveApiResponse = /** status 200  */ UserRead;
export type AuthUsersMeRetrieveApiArg = void;
export type AuthUsersMeUpdateApiResponse = /** status 200  */ UserRead;
export type AuthUsersMeUpdateApiArg = {
  userRequest: UserRequest;
};
export type AuthUsersMePartialUpdateApiResponse = /** status 200  */ UserRead;
export type AuthUsersMePartialUpdateApiArg = {
  patchedUserRequest: PatchedUserRequest;
};
export type AuthUsersMeDestroyApiResponse = unknown;
export type AuthUsersMeDestroyApiArg = void;
export type AuthUsersResendActivationCreateApiResponse =
  /** status 200  */ SendEmailReset;
export type AuthUsersResendActivationCreateApiArg = {
  sendEmailResetRequest: SendEmailResetRequest;
};
export type AuthUsersResetEmailCreateApiResponse =
  /** status 200  */ SendEmailReset;
export type AuthUsersResetEmailCreateApiArg = {
  sendEmailResetRequest: SendEmailResetRequest;
};
export type AuthUsersResetEmailConfirmCreateApiResponse =
  /** status 200  */ UsernameResetConfirm;
export type AuthUsersResetEmailConfirmCreateApiArg = {
  usernameResetConfirmRequest: UsernameResetConfirmRequest;
};
export type AuthUsersResetPasswordCreateApiResponse =
  /** status 200  */ SendEmailReset;
export type AuthUsersResetPasswordCreateApiArg = {
  sendEmailResetRequest: SendEmailResetRequest;
};
export type AuthUsersResetPasswordConfirmCreateApiResponse =
  /** status 200  */ PasswordResetConfirm;
export type AuthUsersResetPasswordConfirmCreateApiArg = {
  passwordResetConfirmRequest: PasswordResetConfirmRequest;
};
export type AuthUsersSetEmailCreateApiResponse = /** status 200  */ SetUsername;
export type AuthUsersSetEmailCreateApiArg = {
  setUsernameRequest: SetUsernameRequest;
};
export type AuthUsersSetPasswordCreateApiResponse =
  /** status 200  */ SetPassword;
export type AuthUsersSetPasswordCreateApiArg = {
  setPasswordRequest: SetPasswordRequest;
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
export type User = {
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: string;
};
export type UserRead = {
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: string;
  id: number;
  email: string;
};
export type PaginatedUserList = {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: User[];
};
export type PaginatedUserListRead = {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: UserRead[];
};
export type CustomUserCreate = {
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: string;
  email: string;
  course_group?: number | null;
};
export type CustomUserCreateRead = {
  id: number;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: string;
  email: string;
  course_group?: number | null;
};
export type CustomUserCreateRequest = {
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: string;
  email: string;
  course_group?: number | null;
};
export type CustomUserCreateRequestWrite = {
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: string;
  email: string;
  password: string;
  course_group?: number | null;
};
export type UserRequest = {
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: string;
};
export type PatchedUserRequest = {
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username?: string;
};
export type Activation = {
  uid: string;
  token: string;
};
export type ActivationRequest = {
  uid: string;
  token: string;
};
export type SendEmailReset = {
  email: string;
};
export type SendEmailResetRequest = {
  email: string;
};
export type UsernameResetConfirm = {
  new_email: string;
};
export type UsernameResetConfirmRequest = {
  new_email: string;
};
export type PasswordResetConfirm = {
  uid: string;
  token: string;
  new_password: string;
};
export type PasswordResetConfirmRequest = {
  uid: string;
  token: string;
  new_password: string;
};
export type SetUsername = {
  current_password: string;
  new_email: string;
};
export type SetUsernameRequest = {
  current_password: string;
  new_email: string;
};
export type SetPassword = {
  new_password: string;
  current_password: string;
};
export type SetPasswordRequest = {
  new_password: string;
  current_password: string;
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
  useAuthUsersListQuery,
  useAuthUsersCreateMutation,
  useAuthUsersRetrieveQuery,
  useAuthUsersUpdateMutation,
  useAuthUsersPartialUpdateMutation,
  useAuthUsersDestroyMutation,
  useAuthUsersActivationCreateMutation,
  useAuthUsersMeRetrieveQuery,
  useAuthUsersMeUpdateMutation,
  useAuthUsersMePartialUpdateMutation,
  useAuthUsersMeDestroyMutation,
  useAuthUsersResendActivationCreateMutation,
  useAuthUsersResetEmailCreateMutation,
  useAuthUsersResetEmailConfirmCreateMutation,
  useAuthUsersResetPasswordCreateMutation,
  useAuthUsersResetPasswordConfirmCreateMutation,
  useAuthUsersSetEmailCreateMutation,
  useAuthUsersSetPasswordCreateMutation,
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
