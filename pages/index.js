import Page from '../components/Page'
import fetchPosts from '../utils/fetchPosts'
import Post from '../components/Post'
import Grid from '../components/Grid'
import FeaturedPost from '../components/FeaturedPost'

const Home = ({ featuredPost, posts }) => (
  <Page subline='Portfolio'>
    <FeaturedPost>
      <Post post={featuredPost} />
    </FeaturedPost>
    <Grid>
      {posts.map((post) => (
        <Post key={post.identifier} post={post} />
      ))}
    </Grid>
  </Page>
)

export const getStaticProps = async () => {
  const res = await fetchPosts()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      featuredPost: posts.filter((post) => post.featured)[0],
      posts: posts.filter((post) => !post.featured),
    },
  }
}

export default Home
