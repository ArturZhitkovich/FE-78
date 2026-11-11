import { IconButton, Tooltip } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../../context/AuthContext';

export const IsAuthToggle = () => {
  const { isAuth, toogleAuth } = useAuth();

  return (
    <Tooltip title={isAuth ? 'Авторизован' : 'Авторизоваться'}>
      <IconButton color="inherit" onClick={() => toogleAuth()}>
        {isAuth ? <LoginIcon /> : <LogoutIcon />}
      </IconButton>
    </Tooltip>
  );
};