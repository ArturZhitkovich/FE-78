import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import type { Post } from "../../types/post";
import { MOCK_POSTS } from "../../mocks";
import { CardItem } from "../../components/Card/CardItem";

const getPosts = (): Promise<Post[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_POSTS);
    }, 30);
  });
};

export const PostsPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<Post[]>([]);

  const firstPost = posts[0];
  const mediumPosts = posts.slice(1, 5);
  const smallPosts = posts.slice(5);

  useEffect(() => {
    getPosts()
      .then((fetched) => {
        setPosts(fetched);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
    
      {isLoading ? 
        "is Loading..."
       : (
        <Box>
          <Box sx={{ display: "flex" }}>
            <Box>
              {firstPost && (
                <CardItem key={firstPost.id} postData={firstPost} />
              )}
              <Box
                sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
              >
                {mediumPosts.map((post) => (
                  <CardItem key={post.id} postData={post} variant="medium" />
                ))}
                ;
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {smallPosts.map((post) => (
                <CardItem key={post.id} postData={post} variant="small" />
              ))}
              ;
            </Box>
          </Box>

          {/* <CardItem postData={MOCK_POSTS[0]} variant='large' />
          <CardItem postData={MOCK_POSTS[1]} variant='medium' />
          <CardItem postData={MOCK_POSTS[2]} variant='small' /> */}
        </Box>
      )}

    </>
  );
};
