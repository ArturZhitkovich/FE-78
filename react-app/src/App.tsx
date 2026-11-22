import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { PostsPage } from './pages/PostsPage/PostsPage';
import { PostPage } from './pages/PostPage/PostPage';
import { HomePage } from './pages/HomePage/HomePage';
import { PATHS } from './paths';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { useAuth } from './context/AuthContext';
// import { AboutPage } from './pages/AboutPage/AboutPage';

function App() {
  const { isAuth } = useAuth();

  return (
    <Routes>
      {/* Layout — общий каркас, страницы появляются на месте <Outlet /> */}
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="about" element={<AboutPage />} /> */}
        <Route path={PATHS.posts()} element={<PostsPage />} />

        <Route element={<ProtectedRoute isAllowed={isAuth} />} >
          <Route path={PATHS.post(':id')} element={<PostPage />} /> 
        </Route>
        
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
