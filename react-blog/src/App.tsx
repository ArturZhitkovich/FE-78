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

       
        <Route path="*" element={<NotFoundPage />} /> 
      </Route>
    </Routes>
  );
}

export default App;