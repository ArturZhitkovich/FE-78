import { Skeleton, Box } from "@mui/material";
import { Card } from "../../components/Card/Card";
import { useGetPostsQuery } from "../../store/api/postsApi";

export const PostsPage = () => {
  const { data, isLoading } = useGetPostsQuery({ limit: 11, offset: 20 });
  const posts = data?.results ?? [];

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