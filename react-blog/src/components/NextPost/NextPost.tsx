import styles from "./NextPost.module.css";

interface NextPostProps {
  title: string;
  link: string;
}

export const NextPost = ({ title, link }: NextPostProps) => {
  return (
    <a href={link} className={styles.component}>
      <div className={styles.content}>
        <span className={styles.label}>Next</span>
        <h4 className={styles.title}>{title}</h4>
      </div>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </a>
  );
};
