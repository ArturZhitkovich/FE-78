import styles from "./PostCardMedium.module.css";
import type { Post } from "../types";
import { PostCardFooter } from "../PostCardFooter/PostCardFooter";

interface PostCardMediumProps {
  post: Post;
}

export const PostCardMedium = ({ post }: PostCardMediumProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.mainContent}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={post.image} alt="No Image" />
        </div>
        <div className={styles.textContent}>
          <p className={styles.date}>{post.date}</p>
          <h2 className={styles.title}>{post.title}</h2>
        </div>
      </div>
      {/* Нижняя панель с кнопками */}
      <PostCardFooter />
    </div>
  );
};
