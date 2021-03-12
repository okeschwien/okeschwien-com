import Page from '../components/Page'
import fetchPosts from '../utils/fetchPosts'
import Post from '../components/Post'
import Grid from '../components/Grid'
import FeaturedPost from '../components/FeaturedPost'
import Lightbox from '../components/Lightbox'
import { useCallback, useState } from 'react'

const Home = ({ featuredPost, posts }) => {
  const [lightboxSelectedPost, setLightboxSelectedPost] = useState(undefined)

  const handleCloseLightbox = useCallback(() => {
    setLightboxSelectedPost(undefined)
  }, [setLightboxSelectedPost])

  const handleSelectPost = useCallback(
    (identifier) => () => {
      setLightboxSelectedPost(
        [...[featuredPost], ...posts].filter(
          (post) => post.identifier === identifier
        )[0]
      )
    },
    [setLightboxSelectedPost, posts, featuredPost]
  )

  return (
    <Page subline='Portfolio'>
      <FeaturedPost>
        <Post post={featuredPost} onClick={handleSelectPost} />
      </FeaturedPost>
      <Grid>
        {posts.map((post) => (
          <Post key={post.identifier} post={post} onClick={handleSelectPost} />
        ))}
      </Grid>
      <Lightbox
        selectedPost={lightboxSelectedPost}
        onClose={handleCloseLightbox}
      />
    </Page>
  )
}

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
