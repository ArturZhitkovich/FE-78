// src/pages/SearchPage.tsx
import React from 'react';
import { FavoriteBorder, ChatBubbleOutlineOutlined } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import { Typography } from '../components/UI/Typography';
import type { PostModel } from '../types';

interface SearchPageProps {
  posts: PostModel[];
}

export const SearchPage: React.FC<SearchPageProps> = ({ posts }) => {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', py: 2 }}>
      <Typography variant="h4" color="text.primary" sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}>
        Search results 'Astronauts'
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {posts.map((post) => {
          // Используем ID поста для генерации стабильных чисел, 
          // либо просто задаем их константами, чтобы ESLint не ругался
          const likes = (post.id * 3) % 15; 
          const comments = (post.id * 2) % 7;

          return (
            <Grid container key={post.id} spacing={2} sx={{ alignItems: 'center' }}>
              {/* Картинка слева */}
              <Grid size={{ xs: 3 }}>
                <Box component="img" src={post.image} alt={post.title} sx={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 1 }} />
              </Grid>
              {/* Текст справа */}
              <Grid size={{ xs: 9 }}>
                <Typography variant="caption" color="text.secondary">{post.date}</Typography>
                <Typography variant="body1" color="text.primary" sx={{ fontWeight: 500, mb: 1 }}>
                  {post.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                    <FavoriteBorder fontSize="small" /> {likes}
                  </Box>
                  <Box component="span" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                    <ChatBubbleOutlineOutlined fontSize="small" /> {comments}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Box>
    </Box>
  );
};