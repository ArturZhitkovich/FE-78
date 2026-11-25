import { Navigate, Outlet, useLocation } from 'react-router';
import { PATHS } from '../../paths';

interface ProtectedRouteProps {
  isAllowed: boolean; // Флаг авторизации
  redirectPath?: string; // куда отправить, если нельзя
}

export const ProtectedRoute = ({ isAllowed, redirectPath = PATHS.login() }: ProtectedRouteProps) => {
  const location = useLocation();

  if (!isAllowed) {
    // запоминаем, куда шёл пользователь, — LoginPage вернёт его туда
    return <Navigate to={redirectPath} replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
};
