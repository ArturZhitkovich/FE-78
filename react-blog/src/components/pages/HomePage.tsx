import { PostList } from "../PostList/PostList"
import { Skeleton } from "@mui/material"
import { useGetPostsQuery } from "../../store/api/postsApi";


export const HomePage = () =>{

const {data, isLoading} = useGetPostsQuery({limit: 11});
const posts = data?.results ?? [];

    return (
      <>
      {isLoading ? (
        <Skeleton width={600} height={300}/>
      ) : (
        <PostList posts={posts} />
      )}
      </>

        
    )
}