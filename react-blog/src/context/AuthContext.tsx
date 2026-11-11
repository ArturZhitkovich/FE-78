import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface AuthContextType {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
  toogleAuth: () => void;
} 

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}


export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState<boolean>(() => {
    return localStorage.getItem('isAuth') === 'true'
  });

  useEffect(() => {
    localStorage.setItem('isAuth', String(isAuth));
  }, [isAuth])

  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener(
      'storage', 
      (event: StorageEvent) => {
        console.log('event', event)

        if( event.key === 'isAuth') {
          setIsAuth(event.newValue === 'true');
        }
      },
      { signal: controller.signal }
    );

    return () => controller.abort();
  }, [])

  // useEffect(() => {
  //   const handleStorageChange = (event: StorageEvent) => {
  //     console.log('event', event)

  //     if( event.key === 'isAuth') {
  //       setIsAuth(event.newValue === 'true');
  //     }
  //   } 

  //   window.addEventListener('storage', handleStorageChange);

  //   // ОБЯЗАТЕЛЬНО очищаем слушатель при размонтировании компонента
  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange);
  //   }
  // }, []) 


  const login = () => setIsAuth(true);
  const logout = () => setIsAuth(false);
  const toogleAuth = () => setIsAuth(prev => !prev);

  return <AuthContext.Provider value={{ isAuth, login, logout, toogleAuth }}>
    {children}
  </AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth должен использоваться внутри AuthProvider');
  }

  return context;
}