// src/components/PostCard/PostActions.tsx
import React from 'react';
import { Box, IconButton } from '@mui/material';
import { FavoriteBorder, ChatBubbleOutlineOutlined, BookmarkBorder, MoreHoriz } from '@mui/icons-material';

interface PostActionsProps {
  isSmall?: boolean;
  showMore?: boolean;
}

export const PostActions: React.FC<PostActionsProps> = ({ showMore }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
      <IconButton size="small" color="inherit"><FavoriteBorder fontSize="small" /></IconButton>
      <IconButton size="small" color="inherit"><ChatBubbleOutlineOutlined fontSize="small" /></IconButton>
      <IconButton size="small" color="inherit" sx={{ ml: 'auto' }}><BookmarkBorder fontSize="small" /></IconButton>
      {showMore && <IconButton size="small" color="inherit"><MoreHoriz fontSize="small" /></IconButton>}
    </Box>
  );
};