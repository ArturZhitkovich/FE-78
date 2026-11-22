import { Typography } from "@mui/material";
import { Link } from "react-router";

export const HomePage = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        HOME PAGE
      </Typography>

      <Link to={`./posts`} >
        <Typography variant="h5" gutterBottom>
          Перейти к постам
        </Typography>
      </Link>
    </>
  );
};
