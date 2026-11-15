import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import styles from "./Header.module.scss"; 
import { Link } from "react-router";

export const ProfileButton = () => {
  return (
    <Link to='sign-in' className={styles.profileLink}>
      <IconButton color="inherit" aria-label="profile" size="small" className={styles.iconButton} disableRipple>
        <PersonIcon fontSize="small" />
      </IconButton>
    </Link>
  );
};