import { SelectedPost } from './components/SelectedPost/SelectedPost'
import { Success } from './components/Success/Success'
import { ConfirmationRegistration } from './components/Confirmation/ConfirmationRegistration'
import { SignIn } from './components/SignIn/SignIn'
import { SignUp } from './components/SignUp/SignUp'
import { Route, Routes } from 'react-router'
import { Layout } from './components/Layout/Layout'
import { HomePage } from './components/pages/HomePage'
import { PostListPage } from './components/pages/PostListPage'


function App() {

  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage/>} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="confirmation" element={<ConfirmationRegistration email="123Sample@mail.su" />} />
          <Route path="success" element={<Success />} />
          <Route path="posts" element={<PostListPage/>} />
          <Route path="posts/:id" element={<SelectedPost />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
    </>
  )
}

export default App
