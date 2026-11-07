// import { Header } from "../Header/Header";
// import { Footer } from "../Footer/Footer";
import { Container } from "@mui/material";
import styles from "./Success.module.css";

export function Success() {
  return (
    <Container>
      {/* <div className={styles.successPageWrapper}> */}
      {/* <Header /> */}
      <main className={styles.successPageMain}>
        <a href="#back" className={styles.successBackLink}>
          ← Back to home
        </a>
        <h1 className={styles.successPageTitle}>Success</h1>

        <div className={styles.successCard}>
          <h2 className={styles.successStatusTitle}>E-mail confirmed</h2>
          <p className={styles.successStatusDesc}>
            Your registration is now completed.
          </p>
          <button className={styles.successHomeBtn}>Go to home</button>
        </div>
      </main>
      {/* <Footer /> */}
      {/* </div> */}
    </Container>
  );
}
