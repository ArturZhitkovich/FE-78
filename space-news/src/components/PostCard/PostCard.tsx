import React from 'react';
import { Card, CardContent, CardMedia, Box, IconButton } from '@mui/material';
import { FavoriteBorder, ChatBubbleOutlineOutlined, BookmarkBorder, MoreHoriz } from '@mui/icons-material';
import { Typography } from '../UI/Typography';

import type { PostModel, PostVariant } from '../../types';

interface PostCardProps {
  post: PostModel;
  variant: PostVariant;
}

export const PostCard: React.FC<PostCardProps> = ({ post, variant }) => {
  const isLarge = variant === 'large';
  const isSmall = variant === 'small';

  
  if (isLarge) {
    return (
      <Card sx={{ display: 'flex', boxShadow: 0, bgcolor: 'transparent', height: '100%' }}>
        <Box sx={{ flex: 1, pr: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="caption" color="text.secondary">{post.date}</Typography>
            <Typography variant="h2" component="h2" color="text.primary" sx={{ fontWeight: 700, my: 1, lineHeight: 1.2 }}>
              {post.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {post.text}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
             <IconButton size="small" color="inherit"><FavoriteBorder /></IconButton>
             <IconButton size="small" color="inherit"><ChatBubbleOutlineOutlined /></IconButton>
             <IconButton size="small" color="inherit" sx={{ ml: 'auto' }}><BookmarkBorder /></IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          image={post.image}
          alt={post.title}
          sx={{ width: '45%', borderRadius: 2, objectFit: 'cover' }}
        />
      </Card>
    );
  }

 
  if (isSmall) {
    return (
      <Card sx={{ display: 'flex', boxShadow: 0, bgcolor: 'transparent', mb: 2 }}>
        <CardMedia
          component="img"
          image={post.image}
          alt={post.title}
          sx={{ width: '35%', borderRadius: 1, objectFit: 'cover' }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', pl: 2, flex: 1, justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="caption" color="text.secondary">{post.date}</Typography>
            <Typography variant="body2" component="h3" color="text.primary" sx={{ fontWeight: 600, mt: 0.5, lineHeight: 1.3 }}>
              {post.title}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
             <IconButton size="small" color="inherit"><FavoriteBorder fontSize="small" /></IconButton>
             <IconButton size="small" color="inherit"><ChatBubbleOutlineOutlined fontSize="small" /></IconButton>
             <IconButton size="small" color="inherit" sx={{ ml: 'auto' }}><BookmarkBorder fontSize="small" /></IconButton>
          </Box>
        </Box>
      </Card>
    );
  }


  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 0, bgcolor: 'transparent' }}>
      <CardMedia
        component="img"
        image={post.image}
        alt={post.title}
        sx={{ height: 200, borderRadius: 1, objectFit: 'cover', mb: 1.5 }}
      />
      <CardContent sx={{ p: 0, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="caption" color="text.secondary">{post.date}</Typography>
        <Typography variant="h3" component="h3" color="text.primary" sx={{ fontWeight: 600, my: 1, lineHeight: 1.3, flexGrow: 1 }}>
          {post.title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
           <IconButton size="small" color="inherit"><FavoriteBorder fontSize="small" /></IconButton>
           <IconButton size="small" color="inherit"><ChatBubbleOutlineOutlined fontSize="small" /></IconButton>
           <IconButton size="small" color="inherit" sx={{ ml: 'auto' }}><BookmarkBorder fontSize="small" /></IconButton>
           <IconButton size="small" color="inherit"><MoreHoriz fontSize="small" /></IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};