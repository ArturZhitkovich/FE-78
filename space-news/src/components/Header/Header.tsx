import React from 'react';
import { AppBar, Toolbar, Box, IconButton, Button } from '@mui/material';
import { Brightness4, Brightness7, Search as SearchIcon, Menu as MenuIcon } from '@mui/icons-material';
import { Typography } from '../UI/Typography';

interface HeaderProps {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
  onSearchClick: () => void;
  onLoginClick: () => void;
  onHomeClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ mode, toggleTheme, onSearchClick, onLoginClick, onHomeClick }) => {
  return (
    
    <AppBar position="static" color="primary" elevation={0} sx={{ mb: 4 }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0 } }}>
        
       
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="inherit" edge="start"><MenuIcon /></IconButton>
          <Typography variant="h6" sx={{ fontWeight: 700, cursor: 'pointer', color: 'inherit' }} onClick={onHomeClick}>
            Space News
          </Typography>
        </Box>

        
        <Box 
          onClick={onSearchClick}
          sx={{ 
            display: 'flex', alignItems: 'center', bgcolor: 'rgba(255, 255, 255, 0.15)', 
            px: 2, py: 0.5, borderRadius: 1, cursor: 'pointer', flex: 0.5,
            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.25)' }
          }}
        >
          <SearchIcon sx={{ color: 'inherit', mr: 1, fontSize: 20 }} />
          <Typography variant="body2" sx={{ color: 'inherit', opacity: 0.8 }}>Search...</Typography>
        </Box>

        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
          <Button onClick={onLoginClick} variant="text" color="inherit" sx={{ fontWeight: 600 }}>
            LOG IN
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};