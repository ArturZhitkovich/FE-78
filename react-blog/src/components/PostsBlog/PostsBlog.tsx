import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { postsAll } from "../PostCard/mockData"; // Импорт массива данных
// import { PostCardLarge } from "../PostCard/PostCardLarge";
import { PostCardMedium } from "../PostCard/Medium/PostCardMedium";
import { PostCardSmall } from "../PostCard/Small/PostCardSmall";
import "./PostsBlog.css";

export const PostsPage = () => {
  // Левая колонка (5 постов)
  // const largePost = postsAll[0]; // Пост 1 (Большой сверху)
  const mediumRow1 = postsAll.slice(0, 2); // Посты 2 и 3 (Первый ряд средних)
  const mediumRow2 = postsAll.slice(2, 4); // Посты 2 и 3 (Первый ряд средних)
  const mediumRow3 = postsAll.slice(4, 6); // Посты 4 и 5 (Второй ряд средних)

  // Правая колонка (6 постов)
  const sidebarPosts = postsAll.slice(6, 12); // Посты с 6 по 11 включительно (Маленькие)

  return (
    <div className="page-container">
      <Header />
      <h2 className="page-title">Blog</h2>
      сюда добавить табы
      <div className="page-wrapper">
        {/* Главная двухколоночная сетка */}
        <div className="main-grid">
          {/* ЛЕВАЯ ЧАСТЬ: Основная лента (5 постов) */}
          <div className="news-feed">
            {/* 1. Крупный верхний пост */}
            {/* {largePost && <PostCardLarge post={largePost} />} */}

            {/* 1. Первый ряд средних постов */}
            <div className="medium-cards-grid">
              {mediumRow1.map((post) => (
                <PostCardMedium key={post.id} post={post} />
              ))}
            </div>

            {/* 2. Второй ряд средних постов */}
            <div className="medium-cards-grid">
              {mediumRow2.map((post) => (
                <PostCardMedium key={post.id} post={post} />
              ))}
            </div>

            {/* 3. Третий ряд средних постов */}
            <div className="medium-cards-grid">
              {mediumRow3.map((post) => (
                <PostCardMedium key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Боковая панель (6 постов) */}
          <div className="sidebar-panel">
            {sidebarPosts.map((post) => (
              <PostCardSmall key={post.id} post={post} />
            ))}
          </div>
        </div>
        сюда добавить пагинацию
      </div>
      <Footer />
    </div>
  );
};
