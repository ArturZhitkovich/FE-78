import { Skeleton, Grid, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { MOCK_POSTS } from "../../mocks";
import type { Post } from "../../types/post";
import { useAppDispatch } from "../../store/hooks";
import { loadedPosts } from "../../store/postsSlice";
import { Card } from "../../components/Card/Card";

const getPosts = (): Promise<Post[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_POSTS);
    }, 300);
  });
};

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const dispatch = useAppDispatch();

  const firstPost = posts[0] ?? null;
  const mediumPosts = posts.slice(1, 5);
  const smallPosts = posts.slice(5);

  useEffect(() => {
    getPosts()
      .then((fetched) => {
        setPosts(fetched);
        dispatch(loadedPosts(fetched));
      })
      .catch(() => {
        console.error("error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Skeleton height={300} width={600} />
      ) : (
        <Grid container spacing={2} alignItems="flex-start">
          {/* Левая основная колонка (75% ширины на десктопе) */}
          <Grid container size={{ xs: 12, md: 9 }} spacing={2}>
            {/* 1. Большой пост на всю ширину левой колонки */}
            {firstPost && (
              <Grid size={12}>
                <Card key={firstPost.id} postData={firstPost} />
              </Grid>
            )}

            {/* 2. Четыре средних поста под ним (сетка 2x2 на экранах от sm и выше) */}
            {mediumPosts.map((post) => (
              <Grid key={post.id} size={{ xs: 12, sm: 6 }}>
                <Card postData={post} variant="medium" />
              </Grid>
            ))}
          </Grid>

          {/* Правая боковая колонка (25% ширины на десктопе) */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Stack spacing={2}>
              {smallPosts.map((post) => (
                <Card key={post.id} postData={post} variant="small" />
              ))}
            </Stack>
          </Grid>
        </Grid>
      )}
    </>
  );
};
