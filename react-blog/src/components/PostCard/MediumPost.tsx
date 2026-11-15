import type { PostCardProps } from './PostCard';
import styles from './PostCard.module.scss';
import { CardFooter } from './CardFooter';
import { Link } from 'react-router';

export const MediumPost = ({ post, variant }: PostCardProps) => {
    const { date, title, image } = post;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return (

        <div className={`${styles.card} ${styles[variant]}`}>
            
            <div className={`${styles.info} ${styles[variant]}`}>

                {image && (
                    <img 
                        src={image} 
                        alt={title} 
                        className={`${styles.image} ${styles[variant]}`} 
                    />
                )}

                <div className={styles.content}>
       
                    <span className={styles.dateLabel}>{formattedDate}</span> 
                    
                    <h3 className={`${styles.title} ${styles[variant]}`}>
                        <Link to={`/posts/${post.id}`} className={styles.titleLink}>
                            {post.title}
                        </Link>
                    </h3>  
                </div>
            </div>
            
            <CardFooter />
        </div>
    )
}