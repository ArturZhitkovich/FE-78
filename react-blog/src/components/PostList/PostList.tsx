import type { Post } from '../../types';
import { PostCard } from '../PostCard/PostCard';
import styles from './PostList.module.scss';
import { PageHeader } from '../Layout/PageHeader';


type PostListProps = {
    posts: Post[];
}

export const PostList = ({ posts}: PostListProps) => {

    const largePost = posts[0] ?? null;
    const mediumPost = posts.slice(1, 5);
    const smallPost = posts.slice(5);

    return (
        <>
            <PageHeader title='Blog' showBackLink={true} />
            <div className={styles.layoutGrid}>
            
                <div className={styles.leftColumn}>
                    
                    <div className={styles.sectionLarge}>
                        {largePost && (
                            <PostCard post={largePost} variant="large" />

                        )}
                    </div>
                    
                    
                    <div className={styles.sectionMedium}>
                        {mediumPost.map(post => (
                            <PostCard key={post.id} post={post} variant="medium" />
   
                        ))}
                    </div>
                </div>

                <div className={styles.sectionSmall}>
                    {smallPost.map(post => (
                        <PostCard key={post.id} post={post} variant="small" />

                    ))}
                </div>

            </div>    
        </>
 
    );
}