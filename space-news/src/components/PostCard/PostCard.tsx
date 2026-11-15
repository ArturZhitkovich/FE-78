// src/components/PostCard/PostCard.tsx
import React from 'react';
import { Card, CardContent, Box } from '@mui/material';
import { Typography } from '../UI/Typography';
import { PostActions } from './PostActions';
import { PostImage } from './PostImage';
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
          <PostActions />
        </Box>
        <PostImage image={post.image} title={post.title} width="45%" borderRadius={2} />
      </Card>
    );
  }

  if (isSmall) {
    return (
      <Card sx={{ display: 'flex', boxShadow: 0, bgcolor: 'transparent', mb: 2 }}>
        <PostImage image={post.image} title={post.title} width="35%" />
        <Box sx={{ display: 'flex', flexDirection: 'column', pl: 2, flex: 1, justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="caption" color="text.secondary">{post.date}</Typography>
            <Typography variant="body2" component="h3" color="text.primary" sx={{ fontWeight: 600, mt: 0.5, lineHeight: 1.3 }}>
              {post.title}
            </Typography>
          </Box>
          <PostActions isSmall />
        </Box>
      </Card>
    );
  }

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 0, bgcolor: 'transparent' }}>
      <PostImage image={post.image} title={post.title} height={200} />
      <CardContent sx={{ p: 0, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="caption" color="text.secondary">{post.date}</Typography>
        <Typography variant="h3" component="h3" color="text.primary" sx={{ fontWeight: 600, my: 1, lineHeight: 1.3, flexGrow: 1 }}>
          {post.title}
        </Typography>
        <PostActions showMore />
      </CardContent>
    </Card>
  );
};