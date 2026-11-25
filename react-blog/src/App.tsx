import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { HomePage } from './pages/HomePage/HomePage';
import { PostsPage } from './pages/PostsPage/PostsPage';
import { PostPage } from './pages/PostPage/PostPage';
import { PATHS } from './paths';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { useAuth } from './context/AuthContext';
import { ActivatePage } from './pages/ActivatePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

function App() {
  const { isAuth } = useAuth()
  const hasViewCard = true;

  return (
    <Routes>
      {/* Layout — общий каркас, страницы появляются на месте <Outlet /> */}
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={PATHS.about()} element={<AboutPage />} />
       
        <Route element={<ProtectedRoute isAllowed={isAuth} />}>
          <Route path={PATHS.posts()} element={<PostsPage />} />
          <Route path={PATHS.post(':id')} element={<PostPage />} />
        </Route>

        <Route element={<ProtectedRoute isAllowed={isAuth  &&  hasViewCard} />}>
          <Route path={PATHS.cards()} element={<PostsPage />} />
          <Route path={PATHS.card(':id')} element={<PostPage />} />
        </Route>

        <Route path={PATHS.login()} element={<LoginPage />} />
        <Route path={PATHS.register()} element={<RegisterPage />} />

        <Route path={PATHS.activate(':uid', ':token')} element={<ActivatePage />} />
        
        <Route path="*" element={<NotFoundPage />} /> 
      </Route>
    </Routes>
  );
}

export default App;