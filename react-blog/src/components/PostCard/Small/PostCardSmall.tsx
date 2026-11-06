import styles from "./PostCardSmall.module.css";
import type { Post } from "../types";

interface PostCardSmallProps {
  post: Post;
}

export const PostCardSmall = ({ post }: PostCardSmallProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.mainContent}>
        <div className={styles.textContent}>
          <p className={styles.date}>{post.date}</p>
          <h2 className={styles.title}>{post.title}</h2>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={post.image} alt="No Image" />
        </div>
      </div>
      {/* Нижняя панель с кнопками */}
      <div className={styles.footer}>
        <div className={styles.actionsLeft}>
          <button className={styles.iconButton} aria-label="Like">
            👍
          </button>
          <button className={styles.iconButton} aria-label="Dislike">
            👎
          </button>
        </div>
        <div className={styles.actionsRight}>
          <button className={styles.iconButton} aria-label="Bookmark">
            🔖
          </button>
          <button className={styles.iconButton} aria-label="More">
            •••
          </button>
        </div>
      </div>
    </div>
  );
};
