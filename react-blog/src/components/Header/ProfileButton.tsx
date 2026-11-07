import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import styles from "./Header.module.scss"; 

export const ProfileButton = () => {
  return (
    <IconButton color="inherit" aria-label="profile" size="small" className={styles.iconButton} disableRipple>
      <PersonIcon fontSize="small" />
    </IconButton>
  );
};