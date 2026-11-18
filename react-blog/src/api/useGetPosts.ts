import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import type { Post } from "../types/post";


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


const getPosts = (): Promise<PostsResponse> => {
  return fetch('https://studapi.teachmeskills.by/blog/posts?limit=10&offset=100')
  .then(data => data.json())
};

export const useGetPosts = () => {
  const dispatch = useAppDispatch();
  // const posts = useAppSelector(selectPosts);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    getPosts()
      .then((data) => {
        // dispatch(loadedPosts(data.results));
      })
      .catch((error ) => {
        console.error("error");
        setError(error)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  return {
    data: [],
    isLoading,
    isError: !!error,
    error,
  }
}
