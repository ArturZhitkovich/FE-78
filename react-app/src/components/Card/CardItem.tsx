import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import styles from './CardItem.module.scss'
import { useCallback, useState } from "react";
import type { Post } from "../../types/post";
import { Link } from "react-router";


type VariantPost = 'small' | 'medium' | 'large' | 'search';

interface CardProps {
  postData: Post,
  variant?: VariantPost,
}

const useDislikePost = (): [number, () => void] => {
  const [dislike, setDislikes] = useState<number>(0);

  const decrement = useCallback(() => {
    setDislikes(prev => prev + 1);
  }, []);

  return [dislike, decrement];
}

const CardFooter = () => {
  const [dislike, decrement] = useDislikePost()
  const [like, setLikes] = useState<number>(0);

  const handleLikesClick = () => {
    setLikes(like + 1);
  };

  

  return (
    <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          
          <IconButton aria-label="like" onClick={handleLikesClick}>
            <ThumbUpOffAltOutlinedIcon /> {like > 0 && like}
          </IconButton> 

          <IconButton aria-label="dislike" onClick={decrement}>
            <ThumbDownOutlinedIcon />{dislike > 0 && dislike}
          </IconButton> 
        </Box>

        <Box>
          <IconButton aria-label="bookmark">
            <BookmarkBorderOutlinedIcon />
          </IconButton>
          <IconButton aria-label="more">
            <MoreHorizOutlinedIcon />
          </IconButton>
        </Box>
      </CardActions>
  )
}

export const CardItem = (props: CardProps) => {
  const {postData, variant = 'large' } = props;

  const titleSize = {
    large: 'h4',
    medium: 'h5',
    small: 'h6',
    search: 'h3',
  } as const;


  return (
    <Card className={`${styles.card} ${styles[`card_${variant}`]}`} sx={{backgroundColor: '#d5c8c8'}}>
  
        <div className={styles.cardContent}>

          <CardContent className={styles.cardText} sx={{p: '0'}}>
              <Typography variant="body2" sx={{ color:'#808080', pb:'10px' }} >{postData.date}</Typography>

              <Link to={`PATHS.post(String(postData.id)`} className={styles.cardLink}>
                <Typography variant={titleSize[variant]} sx={{lineHeight:'25px', pb:'10px'}} className={styles.cardTitle}>{postData.title}</Typography>
              </Link>

              {variant === 'large' && <Typography variant="body1" sx={{ color: '#808080' }}>{postData.text}</Typography> }
              {variant === 'search' && <Typography variant="body1" sx={{ color: '#808080' }}>{postData.text}</Typography> }
          </CardContent>
          <Box className={styles.cardWrapperImage}>
            <CardMedia className={styles.cardImage}
              component="img"
              image={postData.image}
              alt={postData.title}
            />
          </Box>
        </div>

        <CardFooter />
    </Card>
  );
};

