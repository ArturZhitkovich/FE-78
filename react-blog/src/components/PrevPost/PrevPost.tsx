import styles from "./PrevPost.module.css";

interface PrevPostProps {
  title: string;
  link: string;
}

export const PrevPost = ({ title, link }: PrevPostProps) => {
  return (
    <a href={link} className={styles.component}>
      <span className={styles.arrow} aria-hidden="true">
        ←
      </span>
      <div className={styles.content}>
        <span className={styles.label}>Prev</span>
        <h4 className={styles.title}>{title}</h4>
      </div>
    </a>
  );
};
