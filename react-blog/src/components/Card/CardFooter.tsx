import { Box, Button } from "@mui/material"
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { dislikePostById, likePostById, selectCountDisLikesOfPost, selectCountLikesOfPost } from "../../store/postsSlice";
import type { Post } from "../../types/post";
import { DeleteButton } from "./DeleteButton";

interface CardFooterProps {
  post: Post,
  onShow: () => void
}

const useLikePost = (postId: number) => {
  const dispatch = useAppDispatch();
  const likes = useAppSelector(selectCountLikesOfPost(postId));
  debugger
  const increment = useCallback(() => {
    dispatch(likePostById(postId));
  }, [dispatch, postId])

  return [likes, increment] as [number, () => void]
}

const useDislikePost = (postId: number): [number, () => void] => {
  const dispatch = useAppDispatch();
  const dislikes = useAppSelector(selectCountDisLikesOfPost(postId));

  const increment = useCallback(() => {
    dispatch(dislikePostById(postId));
  }, [dispatch, postId])

  return [dislikes, increment] as [number, () => void]
}

// statefull 
const CardFooter = ({ post, onShow }: CardFooterProps) => {
  const [likes, increment] = useLikePost(post.id)
  const [dislikes, decrement] = useDislikePost(post.id)

  return (
    <Box sx={{'display': 'flex', justifyContent:'space-between'}}>
      <div>
        <Button onClick={increment}>Like {likes > 0 && likes}</Button>
        <Button onClick={decrement}>Dislike {dislikes > 0 && dislikes}</Button>
      </div>
      <div>
        <Button>saved</Button>
        <Button onClick={onShow}>show</Button>
        <DeleteButton postId={post.id} />
      </div>
    </Box>
  )
}

export default CardFooter;