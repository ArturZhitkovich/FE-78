import { Bookmark, MoreHorizontal, ThumbsDown, ThumbsUp } from 'lucide-react';
import styles from './PostCard.module.scss';
import { useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeSavedPost, savePost, selectIsSavedPost } from '../../store/savedPostSlice';
import type { Post } from '../../types';

const useLikePost = () =>{
    const [countLike, setLike] = useState(0);

    const increment = useCallback(() => {
        setLike(prev => prev + 1);
    },[])

    return [countLike, increment] as [number, () => void];  
}

const useDislikePost = () => {
    const [countDislike, setDislike] = useState(0);

    const decrement = useCallback(() =>{
        setDislike(prev => prev + 1)
    },[])

    return [countDislike, decrement] as [number, () => void];
}

// const useSavePost = () =>{
//     const [saved, setSaved] = useState(false);

//     const toggleSave = useCallback(()=>{
//         setSaved(prev => !prev);
//     },[])

//     return [saved, toggleSave] as [boolean, () => void];
// }

type CardFooterProps = {
    post: Post;
}


export const CardFooter = ({post}: CardFooterProps) =>{
    const [countLike, increment] = useLikePost();
    const [countDislike, decrement] = useDislikePost();
    // const [saved, toggleSave] = useSavePost();

    const dispatch = useAppDispatch();
  // читаем из store: какой пост сейчас выбран
    const isSaved = useAppSelector(selectIsSavedPost(post.id));


    const toggleSave = useCallback(() =>{
        if(isSaved){
            dispatch(removeSavedPost(post.id))
        }else{
            dispatch(savePost(post));
        }
    }, [post, dispatch, isSaved]);
        
    return(
        <div className={styles.footer}>
                <div className={styles.iconGroupLeft}>

                    <button className={styles.iconBtn} onClick={increment}>
                        <ThumbsUp />
                    </button>
                    <span className={styles.countLike}>{countLike > 0 && countLike}</span>
                    
                    <button className={styles.iconBtn} onClick={decrement}>
                        <ThumbsDown />
                    </button>
                    <span className={styles.countDislike}>{countDislike > 0 && countDislike}</span>
                </div>

                <div className={styles.iconGroupRight}>
                    <button className={styles.iconBtn} onClick={toggleSave}>
                        <Bookmark fill={isSaved ? 'black' : 'transparent'}/>
                    </button>
                    <button className={styles.iconBtn}>
                        <MoreHorizontal />
                    </button>
                </div>
            </div>  
    )
}