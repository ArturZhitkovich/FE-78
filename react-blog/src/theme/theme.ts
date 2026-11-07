import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  // MUI создаст CSS-переменные (--mui-palette-...), их можно использовать в SCSS
  cssVariables: { colorSchemeSelector: 'data' },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#2b3399' },
        background: { default: '#f5f5f5', paper: '#ffffff' },
        text: {
          primary: '#1e293b', 
          secondary: '#64748b', 
        },
        divider: '#0000001F',
      },
    },
    dark: {
      palette: {
        primary: { main: '#90caf9' },
        background: { default: '#121212', paper: '#1e1e1e' },
        text: {
          primary: '#f8fafc',
          secondary: '#94a3b8', 
        },
        divider: '#FFFFFF1F', 
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
      defaultProps: { maxWidth: 'xl' },
    },

    MuiButtonBase: {
      styleOverrides: {
        root: {
          '--header-btn-hover': 'rgba(255, 255, 255, 0.15)',
          '--header-btn-active': 'rgba(255, 255, 255, 0.25)',
        }
      }
    }
  },
});