// import { Box, Skeleton } from '@mui/material'
// import { Layout } from './components/Layout/Layout'
// import { Card } from './components/Card/Card';
// import { MOCK_POSTS } from './mocks';
// import type { Post } from './types/post';
// import { useEffect, useState } from 'react';

// const getPosts = (): Promise<Post[]> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(MOCK_POSTS)
//     }, 3000);
//   })
// }

// function App() {
//   const [isLoading, setIsLoading] = useState<boolean>(true)
//   const [posts, setPosts] = useState<Post[]>([])

//   const firstPost = posts[0] ?? null
//   const mediumPosts = posts.slice(1,5)
//   const smallPosts = posts.slice(5)

//   useEffect(() => {
//     getPosts()
//       .then((fetched) => {
//         setPosts(fetched)
//       })
//       .catch(() => {
//         console.error('error')
//       })
//       .finally(() => {
//         setIsLoading(false)
//       })
//   }, [])

//   return (
//    <Layout>

//     {isLoading ? <Skeleton height={300} width={600} /> : (
//       <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
//         {firstPost && <Card key={firstPost.id} postData={firstPost} />}
//         {mediumPosts.map((post) => <Card key={post.id} postData={post} variant='medium' />)}
//         {smallPosts.map((post) => <Card key={post.id} postData={post} variant='small' />)}
//       </Box>
//     )}

   
//    </Layout>
//   )
// }

// export default App

import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { HomePage } from './pages/HomePage/HomePage';
import { PostsPage } from './pages/PostsPage/PostsPage';
import { PostPage } from './pages/PostPage/PostPage';

function App() {
  return (
    <Routes>
      {/* Layout — общий каркас, страницы появляются на месте <Outlet /> */}
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
       
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:id" element={<PostPage />} />
        <Route path="*" element={<NotFoundPage />} /> 
      </Route>
    </Routes>
  );
}

export default App;