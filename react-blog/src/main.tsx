import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme/theme.ts'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/AuthContext.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import CardModal from './components/CardModal/CardModal.tsx'

// В письме ссылка с двойным слешем: //activate/uid/token — роутер такой адрес не узнаёт.
// Убираем лишние слеши в начале до старта приложения.
if (window.location.pathname.startsWith('//')) {
  const { pathname, search, hash } = window.location;
  window.history.replaceState(null, '', pathname.replace(/^\/+/, '/') + search + hash);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider >
          <ThemeProvider theme={theme} defaultMode="system">
            <CssBaseline />
            <App />
            <CardModal />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
     </Provider>
  </StrictMode>,
)
