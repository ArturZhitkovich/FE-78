import { Typography as MuiTypography } from '@mui/material';
import type { TypographyProps } from '@mui/material';
import React from 'react';

interface CustomTypographyProps extends TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption';
}

export const Typography: React.FC<CustomTypographyProps> = ({ children, ...props }) => {
  return (
    <MuiTypography 
      {...props} 
      sx={{ 
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', 
        ...props.sx 
      }}
    >
      {children}
    </MuiTypography>
  );
};