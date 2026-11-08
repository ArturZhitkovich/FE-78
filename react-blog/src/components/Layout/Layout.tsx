import Container from "@mui/material/Container";
import Header from "../Header/Header";
import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Box component="main">
        <Container>{children}</Container>
      </Box>
    </>
  );
}
