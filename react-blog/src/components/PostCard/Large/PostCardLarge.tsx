import styles from "./PostCardLarge.module.css";
import type { Post } from "../types";
import { PostCardFooter } from "../PostCardFooter/PostCardFooter";

interface PostCardLargeProps {
  post: Post;
}

export const PostCardLarge = ({ post }: PostCardLargeProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.mainContent}>
        <div className={styles.textContent}>
          <p className={styles.date}>{post.date}</p>
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.text}>{post.text}</p>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={post.image} alt="No Image" />
        </div>
      </div>
      {/* Нижняя панель с кнопками  */}
      <PostCardFooter />
    </div>
  );
};
