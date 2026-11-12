import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Header.module.scss"; 

export const SearchButton = () => {
  return (
    <IconButton color="inherit" aria-label="search" size="small" className={styles.iconButton} disableRipple>
      <SearchIcon fontSize="small" />
    </IconButton>
  );
};