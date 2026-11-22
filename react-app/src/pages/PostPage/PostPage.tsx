import { Box } from "@mui/material";
import type { Post } from "../../types/post";
import { MOCK_POSTS } from "../../mocks";
import { CardItem } from "../../components/Card/CardItem";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const getPost = (id: number): Promise<Post> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundedPost = MOCK_POSTS.find(post => post.id === id);

      if (foundedPost) {
        resolve(foundedPost);
      } else {
        reject(new Error('Пост не найден'));
      }
    }, 30);
  });
};

export const PostPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [post, setPost] = useState<Post | null>(null);

  const { id } = useParams()
  // console.log(params)

  useEffect(() => {
    getPost(1)  //Number(id)
      .then((fetched) => {
        setPost(fetched);
      })
      .catch(() => {
        console.error('error')
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
    {isLoading ? (
      'is Loading...'
    ) : post ? (
      <Box sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
        <CardItem key={post.id} postData={post} variant="search" />
      </Box>
    ) : (
      <div>Пост не найден</div>
    )}
  </>
  );
};
