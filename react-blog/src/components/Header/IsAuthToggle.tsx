import { IconButton, Tooltip } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import { useAppDispatch } from '../../store/hooks';
import { baseApi } from '../../store/api/baseApi';
import { PATHS } from '../../paths';

export const IsAuthToggle = () => {
  const { isAuth, logout } = useAuth();
  const dispatch = useAppDispatch();

  if (!isAuth) {
    return (
      <Tooltip title="Войти">
        <IconButton color="inherit" component={Link} to={PATHS.login()}>
          <LoginIcon />
        </IconButton>
      </Tooltip>
    );
  }

  const handleLogout = () => {
    logout();
    // чистим кэш RTK Query: в нём данные, загруженные от имени прошлого пользователя
    dispatch(baseApi.util.resetApiState());
  };

  return (
    <Tooltip title="Выйти">
      <IconButton color="inherit" onClick={handleLogout}>
        <LogoutIcon />
      </IconButton>
    </Tooltip>
  );
};
