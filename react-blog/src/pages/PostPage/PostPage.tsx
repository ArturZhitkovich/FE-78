import { Skeleton, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { MOCK_POSTS } from "../../mocks";
import type { Post } from "../../types/post";
import { Card } from "../../components/Card/Card";
import { useParams } from "react-router";

const getPost = (id: number): Promise<Post> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const foundedPost = MOCK_POSTS.find(post => post.id === id)

      resolve(foundedPost)
    }, 30);
  })
}

export const PostPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [post, setPost] = useState<Post | null>(null)

  const { id }  = useParams()

  useEffect(() => {
    getPost(Number(id))
      .then((fetched) => {
        setPost(fetched)
      })
      .catch(() => {
        console.error('error')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [id])

  return (
   <>
    {isLoading ? <Skeleton height={300} width={600} /> : (
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
        <Card key={post.id} postData={post} variant='search' />
      </Box>
    )}
   </>
  )
}