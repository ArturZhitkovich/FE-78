import { Skeleton, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { MOCK_POSTS } from "../../mocks";
import type { Post } from "../../types/post";
import { Card } from "../../components/Card/Card";

const getPosts = (): Promise<Post[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_POSTS)
    }, 300);
  })
}

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [posts, setPosts] = useState<Post[]>([])

  const firstPost = posts[0] ?? null
  const mediumPosts = posts.slice(1,5)
  const smallPosts = posts.slice(5)

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
        {firstPost && <Card key={firstPost.id} postData={firstPost} />}
        {mediumPosts.map((post) => <Card key={post.id} postData={post} variant='medium' />)}
        {smallPosts.map((post) => <Card key={post.id} postData={post} variant='small' />)}
      </Box>
    )}

   
   </>
  )
}