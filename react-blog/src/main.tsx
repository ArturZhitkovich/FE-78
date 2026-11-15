import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.tsx'
import { theme } from './theme/theme.ts'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme} defaultMode="system">
        <CssBaseline />
          <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
