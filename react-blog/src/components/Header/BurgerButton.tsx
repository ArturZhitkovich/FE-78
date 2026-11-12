import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Header.module.scss"; 

type BurgerButtonProps = {
  onClick: () => void;
  isOpen: boolean;
}

export const BurgerButton = ({onClick, isOpen}: BurgerButtonProps) => {
 
  return (
    <IconButton color="inherit" aria-label="open menu" edge="start" size="small" className={styles.iconButton} disableRipple onClick={onClick}>
      {isOpen ? <CloseIcon/> : <MenuIcon />}
    </IconButton>
  );
};