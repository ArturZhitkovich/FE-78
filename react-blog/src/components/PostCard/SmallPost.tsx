import { ThumbsUp, ThumbsDown, Bookmark, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import type { PostCardProps } from './PostCard';
import styles from './PostCard.module.scss';

export const SmallPost = ({ post, variant }: PostCardProps) => {
    const { date, title, image } = post;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    const [countLike, setLike] = useState(0);
    const [countDislike, setDislike] = useState(0);
     
    const handleClickLike = () => {
        setLike(countLike + 1);
    }
     
    const handleClickDislike = () => {
        setDislike(countDislike + 1);
    }

    return (

        <div className={`${styles.card} ${styles[variant]}`}>
            
            <div className={`${styles.info} ${styles[variant]}`}>
                <div className={styles.content}>
                    <span className={styles.dateLabel}>{formattedDate}</span> 
                    <h3 className={`${styles.title} ${styles[variant]}`}>
                        {title}
                    </h3>  
                </div>
                
                {image && (
                    <img 
                        src={image} 
                        alt={title} 
                        className={`${styles.image} ${styles[variant]}`} 
                    />
                )}
            </div>
            
            <div className={styles.footer}>
                <div className={styles.iconGroupLeft}>

                    <button className={styles.iconBtn} onClick={handleClickLike}>
                        <ThumbsUp />
                    </button>
                    <span className={styles.countLike}>{countLike}</span>
                    
                    <button className={styles.iconBtn} onClick={handleClickDislike}>
                        <ThumbsDown />
                    </button>
                    <span className={styles.countDislike}>{countDislike}</span>
                    
                </div>

                <div className={styles.iconGroupRight}>
                    <button className={styles.iconBtn}><Bookmark /></button>
                    <button className={styles.iconBtn}><MoreHorizontal /></button>
                </div>
            </div>  
        </div>
    )
}