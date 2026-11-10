import { Box, Button, Typography } from "@mui/material"
import styles from './Card.module.scss';
import { useCallback, useEffect, useState } from "react";
import type { Post } from "../../types/post";

export type VariantCard = 'large' | 'medium' | 'small' | 'search';

interface CardProps {
  postData: Post,
  variant?: VariantCard,
}

// stateless 
export const Card = (props: CardProps) => {
  const { postData, variant = 'large' } = props;

  const titleSize = {
    large: 'h3',
    medium: 'h5',
    smal: 'h6'
  }

  return (
    <div className={`${styles.card} ${styles[`card_${variant}`]}`}> 

      <div className={styles.cardContent}>
        <div className={styles.cardText}>
          <Typography variant="body2">{postData.date}</Typography>
          
          <Typography variant={titleSize[variant]} >{postData.title}</Typography>
          { variant === 'large' && <Typography variant="body1" >{postData.text}</Typography>}
        </div>

        <div className={styles.cardImage} >
          <img src={postData.image} />
        </div>
      </div>

      <CardFooter />
    </div>
  )
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
const CardFooter = () => {
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
        <Button>more</Button>
      </div>
    </Box>
  )
}