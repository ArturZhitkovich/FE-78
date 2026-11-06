import { Container } from "@mui/material";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <Container>
      <footer className={styles.customFooter}>
        <div className={styles.footerCopyright}>© 2026 FE78_AS</div>
        <div className={styles.footerRights}>All rights reserved.</div>
      </footer>
    </Container>
  );
}
