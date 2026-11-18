import { Button } from "@mui/material"
import { useDeletePostMutation } from "../../store/api/postsApi"

interface DeleteButtonProps { 
  postId: number
}

export const DeleteButton = ({ postId }: DeleteButtonProps) => {
  const [deletePost] = useDeletePostMutation();

  const onDelete = async () => {
    try {
      await deletePost(postId).unwrap()
      // список постов обновится сам: deletePost сбросил тег 'Post'
    } catch {
      alert('Не получилось удалить пост');
    }
  }

  return (
    <Button onClick={onDelete}>Delete</Button>
  )
}