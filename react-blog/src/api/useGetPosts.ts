import { useEffect, useState } from "react"
import type { Post } from "../types"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { loadedPosts, selectPosts } from "../store/postsSlice"


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


const getPost = (): Promise<PostsResponse> =>{
    return fetch("https://studapi.teachmeskills.by/blog/posts/?limit=10&offset=10")
        .then((data) => data.json())
}

export const useGetPosts = () =>{
 
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);
  const posts = useAppSelector(selectPosts);

     useEffect(() =>{
    getPost()
      .then((data) => {
      dispatch(loadedPosts(data.results))
    })
      .catch ((error) => {
        console.error('error');
        setError(error)
    })
      .finally(() =>{
        setIsLoading(false);
      })

  }, [dispatch]);

  return {
    data: posts,
    isLoading,
    isError: !!error,
    error
  }
}

