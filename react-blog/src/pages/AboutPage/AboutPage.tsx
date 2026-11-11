import { Link } from 'react-router';
import { Button, Typography } from '@mui/material';

export const AboutPage = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Это React проект
      </Typography>
      <Button component={Link} to="/" variant="contained">
        На главную
      </Button>
    </>
  );
};