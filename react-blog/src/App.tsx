import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import "./App.css";
import { Box, Button, Typography } from "@mui/material";
import "./App.module.css";
import { Layout } from "components/Layout/Layout";
import { SignIn } from "./components/SignIn/SignIn";
import { Success } from "./components/Success/Success";
import { PostCardFull } from "./components/PostCard/Full/PostCardFull";
import { PostCardLarge } from "./components/PostCard//Large/PostCardLarge";
import { PostCardMedium } from "./components/PostCard/Medium/PostCardMedium";
import { PostCardSmall } from "./components/PostCard/Small/PostCardSmall";
import {
  postFullMock,
  postLargeMock,
  postMediumMock,
  postSmallMock,
} from "./components/PostCard/mockData";
import { PostsBlog } from "./components/PostsBlog/PostsBlog";

// import { ButtonSignIn, ButtonMenu } from "./components/Button/ButtonTitle";

// function App() {
//   // 2. Создаем состояние для текста кнопки меню.
//   // По умолчанию значение равно "="
//   const [menuText, setMenuText] = useState("=");

//   // Функция, которая сработает при клике
//   const handleClick = () => {
//     // Переключаем текст: если сейчас "=", ставим "+", иначе возвращаем "="
//     setMenuText((prevText) => (prevText === "=" ? "x" : "="));
//     // alert("Кнопка нажата!");
//   };

//   return (
//     <div>
//       <div className="divTitle">
//         <ButtonSignIn text="Sign In" title="Авторизация"></ButtonSignIn>
//       </div>
//       <div className="divMenu">
//         <ButtonMenu
//           text={menuText}
//           title="Меню"
//           onClick={handleClick}
//         ></ButtonMenu>
//       </div>
//     </div>
//   );
// }

//HW_40
export function App() {
  //HW_40_1
  // const [currentScreen, setCurrentScreen] = useState<"signin" | "success">(
  //   "signin",
  // );
  // return (
  //   <Layout>
  //     {currentScreen === "signin" ? <SignIn /> : <Success />}
  //     {/* {currentScreen === "signin" ? <Success /> : <SignIn />} */}
  //     {/* Кнопка переключения экранов для теста */}
  //     <button
  //       style={{
  //         position: "fixed",
  //         bottom: "20px",
  //         right: "20px",
  //         padding: "10px 16px",
  //         backgroundColor: "#333",
  //         color: "#fff",
  //         border: "none",
  //         borderRadius: "4px",
  //         cursor: "pointer",
  //         zIndex: 9999,
  //       }}
  //       onClick={() =>
  //         setCurrentScreen(currentScreen === "signin" ? "success" : "signin")
  //       }
  //     >
  //       Показать страницу: {currentScreen === "signin" ? "Success" : "Sign In"}
  //     </button>
  //   </Layout>
  // );
  //HW_40_2
  // Фейковые данные для навигации согласно интерфейсу prevPost и nextPost
  // const prevPost = {
  //   title: "10 Things to Know...",
  //   link: "/posts/1",
  // };

  // const nextPost = {
  //   title: "A Beautiful Video...",
  //   link: "/posts/3",
  // };
  return (
    <Layout>
      {/* <Box> */}
      <PostsBlog />
      {/* <PostCardFull
        post={postFullMock}
        prevPost={prevPost}
        nextPost={nextPost}
      /> */}
      {/* </Box> */}
    </Layout>
  );
}

export default App;
