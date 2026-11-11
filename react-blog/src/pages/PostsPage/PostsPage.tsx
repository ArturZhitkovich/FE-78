import { Skeleton, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { MOCK_POSTS } from "../../mocks";
import type { Post } from "../../types/post";
import { Card } from "../../components/Card/Card";

const getPosts = (): Promise<Post[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_POSTS)
    }, 30);
  })
}

export const PostsPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    getPosts()
      .then((fetched) => {
        setPosts(fetched)
      })
      .catch(() => {
        console.error('error')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
   <>
    {isLoading ? <Skeleton height={300} width={600} /> : (
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
        {posts.map((post) => <Card key={post.id} postData={post} variant='search' />)}
      </Box>
    )}
   </>
  )
}