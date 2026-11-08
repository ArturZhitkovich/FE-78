import { Layout } from "./components/Layout/Layout";
import { Card, type PostData } from "./components/Card/Card";

const mockPost: PostData = {
  id: 1,
  image:
    "https://img.magnific.com/free-photo/beautiful-endangered-red-panda-green-tree_475641-1326.jpg?semt=ais_hybrid&w=740&q=80", // Замените на реальный URL картинки
  title: "lorem ipsum dolor sit amet",
  text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  date: "Now 08, 2026",
  lesson_num: 0,
  author: 1,
};

function App() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
          padding: "20px",
          flexWrap: "wrap",
        }}
      >
        <Card post={mockPost} size="large" />
        <Card post={mockPost} size="medium" />
        <Card post={mockPost} size="small" />
      </div>
    </Layout>
  );
}

export default App;
