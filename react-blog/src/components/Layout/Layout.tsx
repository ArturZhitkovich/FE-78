import Container from "@mui/material/Container";
import { Header } from "../Header/Header";
import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps)  {
  return <>
    <Header />
    <Box component='main'>
      <Container>
        {children}
      </Container>
    </Box>
  </>
}


// function plus2(number: number) {
//   return number + 2
// }

// interface Man {
//   name: string,
//   age: number
// }

// function printMan(man: Man) {
//   const { name, age } = man;

//   return `${name} - ${age} лет`
// }

// printMan({ name: 'Ivan', age: 22 }) // 'Ivan - 22 лет'
// printMan({ o: 'Vera', age: 10 }) // 'Vera - 10 лет'
