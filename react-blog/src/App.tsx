import { Layout } from './components/Layout/Layout'
import { PostCard } from './components/PostCard/PostCard'
import { posts } from './constants'
import styles from './App.module.scss'


function App() {

  return (
    <>
      <Layout title='Blog' showBackLink={true}>
        <div className={styles.row}>
            <PostCard post={posts[0]} variant="large" />
            <PostCard post={posts[1]} variant="medium" />
            <PostCard post={posts[2]} variant="small" />
        </div>
      </Layout>
    </>
  )
}

export default App
