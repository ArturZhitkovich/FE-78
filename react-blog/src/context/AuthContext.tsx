import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { AUTH_CHANGE_EVENT, tokens } from '../shared/tokens';
import { isTokenExpired } from '../shared/jwt';

interface AuthContextType {
  isAuth: boolean;
  login: (access: string, refresh: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Залогинен, если есть живой refresh: access по нему всегда можно обновить
const checkAuth = () => {
  const refresh = tokens.getRefresh();
  return Boolean(refresh) && !isTokenExpired(refresh!);
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState(checkAuth);

  useEffect(() => {
    const controller = new AbortController();
    const sync = () => setIsAuth(checkAuth());

    // токены поменялись в этой вкладке (логин, выход, refresh в baseApi)
    window.addEventListener(AUTH_CHANGE_EVENT, sync, { signal: controller.signal });
    // ...или в другой вкладке: событие storage приходит только в остальные вкладки
    window.addEventListener('storage', sync, { signal: controller.signal });

    return () => controller.abort();
  }, []);

  const login = (access: string, refresh: string) => tokens.save(access, refresh);
  const logout = () => tokens.clear();

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth должен использоваться внутри AuthProvider');
  }

  return context;
};
