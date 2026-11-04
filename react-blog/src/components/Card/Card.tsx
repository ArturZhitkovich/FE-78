import { Typography } from "@mui/material"
import styles from './Card.module.scss';

export const Card = () => {
  return (
  <div className={styles.card}>
    <Typography variant="h3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Typography>
    <Typography className={styles.card} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam necessitatibus natus fugiat eaque velit consequatur aliquam recusandae, ducimus cum. Sapiente incidunt voluptate aliquam inventore perspiciatis velit, quisquam harum quos totam?</Typography>
  </div>
  )
}