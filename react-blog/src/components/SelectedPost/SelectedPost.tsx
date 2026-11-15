import { Link, useParams } from 'react-router';
import type { Post } from '../../types';
import styles from './SelectedPost.module.scss';
import { useEffect, useState } from 'react';
import { mockPosts } from '../../constants';

const getPostById = (id: number): Promise<Post> =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            const foundPost = mockPosts.find(p => p.id === id);
            resolve(foundPost)
        }, 300)
    })
}


export const SelectedPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        
        getPostById(Number(id))
        .then((result) => {
            setPost(result);
        })
        .catch(() =>{
            console.error('error')
        })
        .finally(() =>{
            setLoading(false)
        })
        
    }, [id]);

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
                src={post.image} 
                alt={post.title} 
                className={styles.postImage} 
            />
            
            <p className={styles.postText}>{post.text}</p>
        </>
    )
}