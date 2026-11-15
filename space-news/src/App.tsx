// src/App.tsx
import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, Grid } from '@mui/material';
import { Layout } from './components/Layout/Layout';
import { Header } from './components/Header/Header';
import { PostCard } from './components/PostCard/PostCard';
import { Typography } from './components/UI/Typography';
import { SearchPage } from './pages/SearchPage';
import { RegisterPage } from './pages/RegisterPage';
import type { PostModel } from './types';

const spaceImg = "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000&auto=format&fit=crop";

// Генерируем 15 постов для наглядности
const mockData: PostModel[] = Array.from({ length: 15 }).map((_, index) => ({
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

type Page = 'home' | 'search' | 'register';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('home');

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

  useEffect(() => {
    const timer = setTimeout(() => { setPosts(mockData); setLoading(false); }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setMode(prev => prev === 'light' ? 'dark' : 'light');

  const renderContent = () => {
    if (loading) return <Typography color="text.primary">Loading posts...</Typography>;

    switch (currentPage) {
      case 'search': 
        return <SearchPage posts={posts} />;
      case 'register': 
        return <RegisterPage onBack={() => setCurrentPage('home')} />;
      case 'home':
      default:{
        
        const largePost = posts[0];
        
        const smallPosts = posts.slice(1, 8); 
        
     
        const mediumPosts = posts.slice(6);

        return (
          <Grid container spacing={2}>
            
            
            <Grid size={{ xs: 12, md: 8 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                
                {largePost && <PostCard post={largePost} variant="large" />}
                
                {/* 2. Сетка средних постов (по 2 в ряд) */}
                {mediumPosts.length > 0 && (
                  <Grid container spacing={2}>
                    {mediumPosts.map((post) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={post.id}>
                        <PostCard post={post} variant="medium" />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Box>
            </Grid>

           
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
                
                {smallPosts.map((post) => (
                  <PostCard key={post.id} post={post} variant="small" />
                ))}
              </Box>
            </Grid>

          </Grid>
        );
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Header 
          mode={mode} 
          toggleTheme={toggleTheme} 
          onSearchClick={() => setCurrentPage('search')}
          onLoginClick={() => setCurrentPage('register')}
          onHomeClick={() => setCurrentPage('home')}
        />
        {renderContent()}
      </Layout>
    </ThemeProvider>
  );
}

export default App;