import Container from "@mui/material/Container";
import { Header } from "../Header/Header";
import { Box } from "@mui/material";
import { Outlet } from "react-router";

export function Layout()  {
  return <div>

    <Header />

    <Box component='main'>
      <Container>
        <Outlet />
      </Container>
    </Box>
    
  </div>
}

