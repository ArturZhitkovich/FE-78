import type { PostCardProps } from './PostCard';
import styles from './PostCard.module.scss';
import { CardFooter } from './CardFooter';
import { Link } from 'react-router';

export const LargePost = ({ post, variant }: PostCardProps) => {
    const { date, title, text, image } = post;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return (

        <div className={`${styles.card} ${styles[variant]}`}>
            
            <div className={`${styles.info} ${styles[variant]}`}>
                <div className={`${styles.content} ${styles[variant]}`}>
                
                    <span className={styles.dateLabel}>
                        {formattedDate}
                    </span> 
                    
                    <h3 className={`${styles.title} ${styles[variant]}`}>
                        <Link to={`/posts/${post.id}`} className={styles.titleLink}>
                            {post.title}
                        </Link>
                    </h3>
                    
                    <p className={styles.text}>
                        {text}
                    </p>

                </div>

                {image && (
                    <img 
                        src={'https://static.photos/science/1024x576/133'}
                        alt={title} 
                        className={`${styles.image} ${styles[variant]}`} 
                    />
                )}
            </div>
        
            <CardFooter post={post} />
        </div>
    );
}