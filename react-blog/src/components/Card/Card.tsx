import { Typography } from "@mui/material"
import styles from './Card.module.scss';
import {  useCallback, useState } from "react";
import type { Post } from "../../types/post";
import { Link } from "react-router";
import { PATHS } from "../../paths";
import CardFooter from "./CardFooter";
import { useAppDispatch } from "../../store/hooks";
import { selectPost } from "../../store/selectedPostSlice";

export type VariantCard = 'large' | 'medium' | 'small' | 'search';

interface CardProps {
  postData: Post,
  variant?: VariantCard,
}

// stateless 
export const Card = (props: CardProps) => {
  const { postData, variant = 'large' } = props;

  const dispatch = useAppDispatch()

  const onShow = useCallback(() => {
    dispatch(selectPost(postData))
  }, [dispatch, postData])

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
          <img src={postData.image} />
        </div>
      </div>

      <CardFooter onShow={onShow} />
    </div>
  )
}
