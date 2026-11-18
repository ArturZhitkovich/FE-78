import { Typography } from "@mui/material"
import styles from './Card.module.scss';
import type { Post } from "../../types/post";
import { Link } from "react-router";
import { PATHS } from "../../paths";
import CardFooter from "./CardFooter";
import { useSelectPost } from "../../store/selectedPostSlice";

export type VariantCard = 'large' | 'medium' | 'small' | 'search';

const random = () => Math.round(Math.random() * 20)

interface CardProps {
  postData: Post,
  variant?: VariantCard,
}

// stateless 
export const Card = (props: CardProps) => {
  const { postData, variant = 'large' } = props;

  const showModal = useSelectPost(postData);

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
          
          <Link to={PATHS.post(String(postData.id))}>
            <Typography variant={titleSize[variant]} >{postData.title}</Typography>
          </Link>

          { variant === 'large' && <Typography variant="body1">{postData.text}</Typography>}
        </div>

        <div className={styles.cardImage} >
          <img src={`https://static.photos/640x360/${random()}`} />
        </div>
      </div>

      <CardFooter onShow={showModal} post={postData} />
    </div>
  )
}
