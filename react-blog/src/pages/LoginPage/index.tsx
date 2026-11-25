import { useState, type FormEvent } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { Alert, Box, Button, TextField, Typography } from '@mui/material';
import { useAuthJwtCreateCreateMutation } from '../../store/api/blogApi.generated';
import { useAuth } from '../../context/AuthContext';
import { PATHS } from '../../paths';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth, login } = useAuth();

  // куда вернуть после входа: ProtectedRoute кладёт адрес в state
  const from = (location.state as { from?: string } | null)?.from ?? '/';

  const [createToken, { isLoading, isError }] = useAuthJwtCreateCreateMutation();

  // уже вошли — на странице логина делать нечего
  if (isAuth) return <Navigate to={from} replace />;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // POST /auth/jwt/create/ → { access, refresh }
      const { access, refresh } = await createToken({
        tokenObtainPairRequest: { email, password },
      }).unwrap();

      login(access, refresh);
      navigate(from, { replace: true });
    } catch {
      // ошибку покажет isError
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2, maxWidth: 360, py: 2, mx: 'auto' }}>
      <Typography variant="h4">Вход</Typography>
      <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField
        label="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {isError && <Alert severity="error">Неверный email или пароль</Alert>}
      <Button type="submit" variant="contained" disabled={isLoading}>
        Войти
      </Button>
      <Typography variant="body2">
        Нет аккаунта? <Link to={PATHS.register()}>Зарегистрироваться</Link>
      </Typography>
    </Box>
  );
};
