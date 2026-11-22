import { IconButton, Tooltip } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

export const IsAuthToggle = () => {
  const { isAuth, toggleAuth } = useAuth();

  return (
    <Tooltip title={isAuth ? "Авторизован" : "Авторизоваться"}>
      <IconButton color="inherit" onClick={() => toggleAuth()}>
        {isAuth ? <LoginIcon /> : <LogoutIcon />}
      </IconButton>
    </Tooltip>
  );
};
