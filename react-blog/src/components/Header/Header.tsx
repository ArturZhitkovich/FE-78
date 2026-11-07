import { useState } from "react";
import { AppBar, Toolbar } from "@mui/material";
import { BurgerButton } from "./BurgerButton";
import { SearchButton } from "./SearchButton";
import { ProfileButton } from "./ProfileButton";
import styles from "./Header.module.scss";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleClick = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
  return (
    <AppBar position="static" className={styles.appBar} elevation={0}>
      <Toolbar disableGutters className={styles.toolbar}>
        
        <div className={styles.leftZone}>
          <BurgerButton isOpen={isMenuOpen} onClick={handleClick} />
        </div>

        <div className={styles.spacer} />

        <div className={styles.rightZone}>
          <SearchButton />
          <ProfileButton />
        </div>

      </Toolbar>
    </AppBar>
  );
};

