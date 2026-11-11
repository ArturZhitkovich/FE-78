import Container from "@mui/material/Container";
import { Header } from "../Header/Header";
import { Box, Paper } from "@mui/material";
import { Outlet } from "react-router";

export function Layout()  {
  return <div>
    <Header />

    <Box component='main'>
      <Container>
        <Paper sx={{ px: 3, py: 2 }}  >
          <Outlet />
        </Paper>
        
      </Container>
    </Box>
    
  </div>
}

