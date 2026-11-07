// import { Header } from "../Header/Header";
// import { Footer } from "../Footer/Footer";
import { Container } from "@mui/material";
import styles from "./SignIn.module.css";

export function SignIn() {
  return (
    <Container>
      {/* <div className={styles.pageWrapper}> */}
        {/* <Header /> */}
        <main className={styles.pageMain}>
          <a href="#back" className={styles.backToHome}>
            ← Back to home
          </a>
          <h1 className={styles.formPageTitle}>Sign In</h1>

          <div className={styles.authCard}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputFieldGroup}>
                <label className={styles.inputLabel}>Email</label>
                <input
                  type="email"
                  placeholder="Your email"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.inputFieldGroup}>
                <label className={styles.inputLabel}>Password</label>
                <input
                  type="password"
                  placeholder="Your password"
                  className={styles.formInput}
                />
              </div>

              <a href="#forgot" className={styles.forgotPasswordLink}>
                Forgot password?
              </a>

              <button type="submit" className={styles.submitActionBtn}>
                Sign In
              </button>

              <div className={styles.authFooterRedirect}>
                Don't have an account? <a href="#signup">Sign up</a>
              </div>
            </form>
          </div>
        </main>
        {/* <Footer /> */}
      {/* </div> */}
    </Container>
  );
}
