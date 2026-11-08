import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  // MUI создаст CSS-переменные (--mui-palette-...), их можно использовать в SCSS
  cssVariables: { colorSchemeSelector: "data" },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: "#900020" },
        background: { default: "#f5f5f5", paper: "#ffffff" },
        text: {
          primary: "#900020",
        },
      },
    },
    dark: {
      palette: {
        primary: { main: "#90caf9" },
        background: { default: "#121212", paper: "#1e1e1e" },
      },
    },
  },
  // Контрольные точки экрана. Оставляем стандартные значения MUI:
  // xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536.
  // Если понадобится другая ширина (например, xl: 1440), задаём её здесь:
  // breakpoints: {
  //   values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1440 },
  // },
  components: {
    // Любой <Container> по умолчанию будет шириной до xl (1536px)
    MuiContainer: {
      defaultProps: { maxWidth: "xl" },
    },
    // MuiTypography: {

    //   variants: [
    //     {
    //       props: { variant: 'h2' },
    //       style: {
    //         color: 'green',
    //       },
    //     },
    //   ],
    // }
  },
});
