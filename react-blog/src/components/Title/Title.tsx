import styles from './Title.module.scss';

type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.titleStyled}>{title}</h1>
    </div>
  );
};