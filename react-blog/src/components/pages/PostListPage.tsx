import { useEffect, useState } from "react"
import { mockPosts} from "../../constants"
import type { Post } from "../../types"
import { PostList } from "../PostList/PostList"

const getPost = (): Promise<Post[]> =>{
  return new Promise((resolve) =>{
    setTimeout(() =>{
      resolve(mockPosts)
    }, 300)
  })
}

export const PostListPage = () =>{
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() =>{
    getPost()
      .then((result) => {
      setPosts(result)
    }
  )}, []);

  return (
        <PostList posts={posts} />
    )
    
}