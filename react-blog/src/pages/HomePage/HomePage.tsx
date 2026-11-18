import { Skeleton, Grid, Stack } from "@mui/material";
import { Card } from "../../components/Card/Card";
import { useBlogGroupsListQuery } from "../../store/api/blogApi.generated";


export const HomePage = () => {
  const { data, isLoading } = useBlogGroupsListQuery({ limit: 11, offset: 20 });

  const posts = data?.results ?? []
  const firstPost = posts[0] ?? null;
  const mediumPosts = posts.slice(1, 5);
  const smallPosts = posts.slice(5);

  return (
    <>
      {isLoading ? (
        <Skeleton height={300} width={600} />
      ) : (
       <Grid container spacing={2} sx={{ alignItems: "flex-start" }}>
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
