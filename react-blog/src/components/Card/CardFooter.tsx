import { Box, Button } from "@mui/material"
import { useState, useEffect, useCallback } from "react";

interface CardFooterProps {
  onShow: () => void
}

const useLikePost = () => {
 const [likes, setLikes] = useState<number>(0);

  useEffect(() => {
    document.title = `Счётчик: ${likes}`;
  }, [likes]);

  const increment = useCallback(() => {
    setLikes(likes + 1)
  }, [])

  return [likes, increment] as [number, () => void]
}

const useDislikePost = (): [number, () => void] => {
  const [dislikes, setDislikes] = useState<number>(0)

  const decrement = useCallback(() => {
    setDislikes(prev => prev + 1)
  }, [])

  return [dislikes, decrement]
}

// statefull 
const CardFooter = ({ onShow }: CardFooterProps) => {
  const [likes, increment] = useLikePost()
  const [dislikes, decrement] = useDislikePost()

  return (
    <Box sx={{'display': 'flex', justifyContent:'space-between'}}>
      <div>
        <Button onClick={increment}>Like {likes > 0 && likes}</Button>
        <Button onClick={decrement}>Dislike {dislikes > 0 && dislikes}</Button>
      </div>
      <div>
        <Button>saved</Button>
        <Button onClick={onShow}>show</Button>
      </div>
    </Box>
  )
}

export default CardFooter;