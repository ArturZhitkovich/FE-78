// src/components/PostCard/PostImage.tsx
import React from 'react';
import { CardMedia } from '@mui/material';

interface PostImageProps {
  image: string;
  title: string;
  width?: string;
  height?: number;
  borderRadius?: number;
}

export const PostImage: React.FC<PostImageProps> = ({ image, title, width, height, borderRadius = 1 }) => {
  return (
    <CardMedia
      component="img"
      image={image}
      alt={title}
      sx={{ width, height, borderRadius, objectFit: 'cover', mb: height ? 1.5 : 0 }}
    />
  );
};