import React from "react";
import styles from "./card.module.scss";

export interface PostData {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
}

interface CardProps {
  post: PostData;
  size: "large" | "medium" | "small";
}

export const Card: React.FC<CardProps> = ({ post, size }) => {
  const cardClass = `${styles.card} ${styles[size]}`;

  return (
    <article className={cardClass}>
      <div className={styles.imageWrapper}>
        <img src={post.image} alt={post.title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <span className={styles.date}>{post.date}</span>
        <h3 className={styles.title}>{post.title}</h3>
        {size === "large" && <p className={styles.text}>{post.text}</p>}

        <div className={styles.footer}>
          <div className={styles.actionsLeft}>
            <button className={styles.actionBtn}>👍</button>
            <button className={styles.actionBtn}>👎</button>
          </div>
          <div className={styles.actionsRight}>
            <button className={styles.actionBtn}>🔖</button>
            <button className={styles.actionBtn}>•••</button>
          </div>
        </div>
      </div>
    </article>
  );
};
