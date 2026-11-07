// import { Header } from "../Header/Header";
// import { Footer } from "../Footer/Footer";
import { postsAll } from "../PostCard/mockData"; // Импорт массива данных
// import { PostCardLarge } from "../PostCard/PostCardLarge";
import { PostCardMedium } from "../PostCard/Medium/PostCardMedium";
import { PostCardSmall } from "../PostCard/Small/PostCardSmall";
import styles from "./PostsBlog.module.css";
import { Container } from "@mui/material";

export const PostsBlog = () => {
  // Левая колонка (5 постов)
  // const largePost = postsAll[0]; // Пост 1 (Большой сверху)
  const mediumRow1 = postsAll.slice(0, 2); // Посты 2 и 3 (Первый ряд средних)
  const mediumRow2 = postsAll.slice(2, 4); // Посты 2 и 3 (Первый ряд средних)
  const mediumRow3 = postsAll.slice(4, 6); // Посты 4 и 5 (Второй ряд средних)

  // Правая колонка (6 постов)
  const sidebarPosts = postsAll.slice(6, 12); // Посты с 6 по 11 включительно (Маленькие)

  return (
    <Container>
      {/* <div className={styles.pageContainer}> */}
      {/* <div className={styles.card}></div> */}
      {/* <Header /> */}
      <div className={styles.pageWrapper}>
        <h2 className={styles.pageTitle}>Blog</h2>
        сюда добавить табы
        {/* Главная двухколоночная сетка */}
        <div className={styles.mainGrid}>
          {/* ЛЕВАЯ ЧАСТЬ: Основная лента (5 постов) */}
          <div className={styles.newsFeed}>
            {/* 1. Крупный верхний пост */}
            {/* {largePost && <PostCardLarge post={largePost} />} */}

            {/* 1. Первый ряд средних постов */}
            <div className={styles.mediumCardsGrid}>
              {mediumRow1.map((post) => (
                <PostCardMedium key={post.id} post={post} />
              ))}
            </div>

            {/* 2. Второй ряд средних постов */}
            <div className={styles.mediumCardsGrid}>
              {mediumRow2.map((post) => (
                <PostCardMedium key={post.id} post={post} />
              ))}
            </div>

            {/* 3. Третий ряд средних постов */}
            <div className={styles.mediumCardsGrid}>
              {mediumRow3.map((post) => (
                <PostCardMedium key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Боковая панель (6 постов) */}
          <div className={styles.sidebarPanel}>
            {sidebarPosts.map((post) => (
              <PostCardSmall key={post.id} post={post} />
            ))}
          </div>
        </div>
        сюда добавить пагинацию
      </div>
      {/* <Footer /> */}
      {/* </div> */}
    </Container>
  );
};
