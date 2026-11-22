// import { Header } from "../Header/Header";
// import { Footer } from "../Footer/Footer";
// import { Container } from "@mui/material";
import styles from "./SignIn.module.css";

export function SignIn() {
  return (
    <>
      {/* <Container> */}
      {/* <div className={styles.pageWrapper}> */}
      {/* <Header /> */}
      <main className={styles.signinPageMain}>
        <a href="#back" className={styles.signinBackToHome}>
          ← Back to home
        </a>
        <h1 className={styles.signinPageTitle}>Sign In</h1>

        <div className={styles.signinAuthCard}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.signinInputFieldGroup}>
              <label className={styles.signinInputLabel}>Email</label>
              <input
                type="email"
                placeholder="Your email"
                className={styles.signinInput}
              />
            </div>

            <div className={styles.signinInputFieldGroup}>
              <label className={styles.signinInputLabel}>Password</label>
              <input
                type="password"
                placeholder="Your password"
                className={styles.signinInput}
              />
            </div>

            <a href="#forgot" className={styles.signinForgotPasswordLink}>
              Forgot password?
            </a>

            <button type="submit" className={styles.signinSubmitActionBtn}>
              Sign In
            </button>

            <div className={styles.signinAuthFooterRedirect}>
              Don't have an account? <a href="#signup">Sign up</a>
            </div>
          </form>
        </div>
      </main>
      {/* <Footer /> */}
      {/* </div> */}
      {/* </Container> */}
    </>
  );
}
