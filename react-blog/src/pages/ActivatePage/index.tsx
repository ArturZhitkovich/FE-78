import { Alert, Box, Button, CircularProgress, Typography } from "@mui/material"
import { Link, useParams } from "react-router";
import { useAuthUsersActivationCreateMutation } from "../../store/api/blogApi.generated";
import { useEffect, useRef } from "react";
// текст ошибки по коду ответа сервера
const getErrorMessage = (error: unknown) => {
  const status = (error as { status?: number | string } | undefined)?.status;

  if (status === 403) return 'Аккаунт уже активирован. Можно войти.';
  if (status === 400) return 'Ссылка активации недействительна или повреждена.';
  if (status === 'FETCH_ERROR') return 'Нет соединения с сервером. Попробуйте позже.';
  return 'Не удалось активировать аккаунт. Попробуйте позже.';
};


// /activate/:uid/:token — сюда ведёт ссылка из письма после регистрации
export const ActivatePage = () => {
  const { uid, token } = useParams();

  // POST /auth/users/activation/  { uid, token }
  const [activate, { isUninitialized, isLoading, isSuccess, isError, error }] =
    useAuthUsersActivationCreateMutation();

  // StrictMode в разработке запускает useEffect дважды.
  // Второй запрос с тем же токеном сервер отклонит (403), поэтому шлём только один раз.
  const isSent = useRef(false);
    
  // при загрузке страницы отправляем uid и token из адреса на бэкенд
  useEffect(() => {
    if (!uid || !token || isSent.current) return;
    isSent.current = true;
    activate({ activationRequest: { uid, token } });
  }, [activate, uid, token]);

  if (!uid || !token) {
    return <Alert severity="error">В ссылке нет данных для активации.</Alert>;
  }
  
    // 403 — ссылку уже открывали, аккаунт активен: это не страшная ошибка
  const isAlreadyActive = isError && (error as { status?: number }).status === 403;

  return (
    <Box sx={{ display: 'grid', gap: 2, justifyItems: 'start', justifyContent: 'center', py: 2 }}>
      <Typography variant="h4">Активация аккаунта</Typography>

      {(isUninitialized || isLoading) && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <CircularProgress size={24} />
          <Typography>Активируем аккаунт…</Typography>
        </Box>
      )}

      {isSuccess && <Alert severity="success">Аккаунт активирован! Теперь можно войти.</Alert>}

      {isError && (
        <Alert severity={isAlreadyActive ? 'info' : 'error'}>{getErrorMessage(error)}</Alert>
      )}

      {(isSuccess || isError) && (
        <Button component={Link} to="/" variant="contained">На главную</Button>
      )}
    </Box>
  );
}


