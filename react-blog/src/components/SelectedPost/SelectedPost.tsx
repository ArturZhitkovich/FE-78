import { Link, useParams } from 'react-router';
import styles from './SelectedPost.module.scss';
import { useGetPostByIdQuery } from '../../store/api/postsApi';
import { random } from '../PostCard/PostCard';


export const SelectedPost = () => {
    const { id } = useParams();

    const {data: post, isLoading} = useGetPostByIdQuery(+id);
    

    if(isLoading){
        return <div>Loading...</div>
    }

    if (!post) {
        return <div>not found</div>;
    }

    return (
        <>
            <div className={styles.path}>
                <Link className={styles.pathInfo} to='/'>
                    Home
                </Link>
                
                <span className={styles.separator}>|</span>
                
                <span className={styles.pathInfoCurrent}>
                    {post.title}
                </span>
            </div>

            <h1 className={styles.postTitle}>{post.title}</h1>
            
            <img 
                src={`https://static.photos/science/640x360/${random()}`}  
                alt={post.title} 
                className={styles.postImage} 
            />
            
            <p className={styles.postText}>{post.text}</p>
        </>
    )
}