// import { Header } from "@/components/Header/Header";
// import { Footer } from "@/components/Footer/Footer";
// import { PrevPost } from "../../PrevPost/PrevPost";
import { PrevPost } from "components/PrevPost/PrevPost";
import { NextPost } from "components/NextPost/NextPost";
import styles from "./PostCardFull.module.css";
// import type { Post } from "@/components/PostCard/types";
import type { Post } from "../types";
import { Container } from "@mui/material";
// import { Header } from "components/Header/Header";
// import { Footer } from "components/Footer/Footer";

interface PostCardFullProps {
  post: Post;
  prevPost?: { title: string; link: string } | null;
  nextPost?: { title: string; link: string } | null;
}

export const PostCardFull = ({
  post,
  prevPost,
  nextPost,
}: PostCardFullProps) => {
  return (
    <Container>
      {/* <div className="page-container"> */}
      <div className={styles.card}>
        <div className={styles.mainContent}>
          <div className={styles.textContent}>
            {/* <p className={styles.date}>{post.date}</p> */}
            <h2 className={styles.title}>{post.title}</h2>
          </div>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={post.image}
              alt={post.title || "Post image"}
            />
          </div>
          <div className={styles.textContent}>
            <p className={styles.text}>{post.text}</p>
          </div>
        </div>

        {/* Нижняя панель с кнопками взаимодействия */}
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

        {/* Секция навигации между публикациями */}
        {(prevPost || nextPost) && (
          <div className={styles.navigationWrapper}>
            {prevPost ? (
              <PrevPost title={prevPost.title} link={prevPost.link} />
            ) : (
              <div /> /* Вспомогательный блок для сохранения флекс-сетки, если предыдущего поста нет */
            )}

            {nextPost && (
              <NextPost title={nextPost.title} link={nextPost.link} />
            )}
          </div>
        )}
      </div>
    </Container>
  );
};
