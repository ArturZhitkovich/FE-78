import styles from "./PostCardFooter.module.css";

export function PostCardFooter() {
  return (
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
  );
}
