import { Box, Container } from "@mui/material";
import { Header } from "../Header/Header";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <Header />
      <Box>
        <Container>
          <Outlet />
        </Container>
      </Box>
    </>
  );
};
