import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, IconButton, Box, Grid } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Layout } from './components/Layout/Layout';
import { PostCard } from './components/PostCard/PostCard';
import { Typography } from './components/UI/Typography';
import type { PostModel } from './types';

const spaceImg = "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000&auto=format&fit=crop";

// Создаем массив с разными ID для наглядности
const mockData: PostModel[] = Array.from({ length: 10 }).map((_, index) => ({
  id: index + 1,
  image: spaceImg,
  text: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk...",
  date: "April 20, 2021",
  lesson_num: index + 1,
  title: index === 0 
    ? "Astronauts prep for new solar arrays on nearly seven-hour spacewalk" 
    : `New Post ${index + 1}`,
  author: 1
}));

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [loading, setLoading] = useState(true);

  // Настройка темы (оставил как было)
  const theme = React.useMemo(
    () => createTheme({
      palette: {
        mode,
        ...(mode === 'light'
          ? { background: { default: '#f5f5f5', paper: '#ffffff' }, text: { primary: '#1a1a1a', secondary: '#666666' } }
          : { background: { default: '#121212', paper: '#1e1e1e' }, text: { primary: '#ffffff', secondary: '#aaaaaa' } }),
      },
      typography: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
    }), [mode]
  );

  // Имитация загрузки (оставил как было)
  useEffect(() => {
    const timer = setTimeout(() => {
      setPosts(mockData);
      setLoading(false);
    }, 1000);

    return () => { clearTimeout(timer); };
  }, []);

  // --- ЛОГИКА РАЗДЕЛЕНИЯ ПОСТОВ ---
  // 1. Большой пост (индекс 0)
  const largePost = posts[0];
  // 2. Три маленьких поста для правой колонки (индексы 1, 2, 3)
  const smallPosts = posts.slice(1, 4);
  // 3. Остальные посты для нижней сетки (индексы 4 и далее)
  const mediumPosts = posts.slice(4);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        {/* Хедер */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h1" color="text.primary" sx={{ fontWeight: 700 }}>Space News</Typography>
          <IconButton onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} color="inherit">
            {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Box>

        {loading ? (
          <Typography color="text.primary">Loading posts...</Typography>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            
            {/* ВЕРХНЯЯ ЧАСТЬ: Большой слева + 3 маленьких справа */}
            <Grid container spacing={2}>
              {/* Левая колонка (Большой пост) */}
              <Grid size={{ xs: 12, md: 8 }}>
                {largePost && <PostCard post={largePost} variant="large" />}
              </Grid>
              
              {/* Правая колонка (Маленькие посты) */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {smallPosts.map((post) => (
                    <PostCard key={post.id} post={post} variant="small" />
                  ))}
                </Box>
              </Grid>
            </Grid>

            {/* НИЖНЯЯ ЧАСТЬ: Сетка из средних постов (по 3 в ряд) */}
            {mediumPosts.length > 0 && (
              <Grid container spacing={2}>
                {mediumPosts.map((post) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
                    <PostCard post={post} variant="medium" />
                  </Grid>
                ))}
              </Grid>
            )}

          </Box>
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;