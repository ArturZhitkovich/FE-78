import { Link } from 'react-router';
import { Button, Typography } from '@mui/material';

export const NotFoundPage = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        404 — страница не найдена
      </Typography>
      <Button component={Link} to="/" variant="contained">
        На главную
      </Button>
    </>
  );
};