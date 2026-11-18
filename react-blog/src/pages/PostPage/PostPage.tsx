import { Skeleton, Box } from "@mui/material";
import { Card } from "../../components/Card/Card";
import { useParams } from "react-router";
import { useGetPostByIdQuery } from "../../store/api/postsApi";


export const PostPage = () => {
  const { id }  = useParams()
  const {data: post, isLoading} = useGetPostByIdQuery(Number(id))   

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