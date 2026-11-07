import { LargePost } from './LargePost';
import { MediumPost } from './MediumPost';
import { SmallPost } from './SmallPost';
import type { Post, Variant } from '../../types';


export type PostCardProps = {
  post: Post;
  variant: Variant;
}

export const PostCard = ({post, variant}: PostCardProps) =>{

    if(variant === 'large'){
        return (
            <LargePost post={post} variant={variant}></LargePost>
        )
    }

    if(variant === 'medium'){
        return (
            <MediumPost post={post} variant={variant}></MediumPost>
        )
    }

    if(variant === 'small'){
        return (
           <SmallPost post={post} variant={variant}></SmallPost>
        )
    }

}
