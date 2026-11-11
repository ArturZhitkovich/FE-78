import { Navigate, Outlet } from "react-router"
import { PATHS } from "../../paths";

interface ProtectedRouteProps {
  isAllowed: boolean; // Флаг авторизации
  redirectPath?: string; // куда вернуть 
}

export const ProtectedRoute = ({ isAllowed, redirectPath = PATHS.notFound() }: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} />
  }

  return <Outlet />
}