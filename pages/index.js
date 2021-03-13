import { useCallback, useState, useMemo } from 'react'

import Page from '../components/Page'
import fetchPosts from '../utils/fetchPosts'
import Post from '../components/Post'
import Grid from '../components/Grid'
import FeaturedPost from '../components/FeaturedPost'
import Lightbox from '../components/Lightbox'

const Home = ({ featuredPost, posts }) => {
  const allPosts = useMemo(() => [...[featuredPost], ...posts], [
    featuredPost,
    posts,
  ])
  const [lightboxSelectedPost, setLightboxSelectedPost] = useState(undefined)

  const handleCloseLightbox = useCallback(() => {
    setLightboxSelectedPost(undefined)
  }, [setLightboxSelectedPost])

  const handleSelectPost = useCallback(
    (identifier) => () => {
      setLightboxSelectedPost(
        allPosts.filter((post) => post.identifier === identifier)[0]
      )
    },
    [setLightboxSelectedPost, posts, featuredPost]
  )

  const selectNextPost = useCallback(() => {
    if (!lightboxSelectedPost) {
      return
    }

    const selectedIndex = allPosts.indexOf(lightboxSelectedPost)

    setLightboxSelectedPost(
      allPosts[selectedIndex === allPosts.length - 1 ? 0 : selectedIndex + 1]
    )
  }, [
    setLightboxSelectedPost,
    posts,
    featuredPost,
    lightboxSelectedPost,
    allPosts,
  ])

  const selectPreviousPost = useCallback(() => {
    if (!lightboxSelectedPost) {
      return
    }

    const selectedIndex = allPosts.indexOf(lightboxSelectedPost)

    setLightboxSelectedPost(
      allPosts[selectedIndex === 0 ? allPosts.length - 1 : selectedIndex - 1]
    )
  }, [
    setLightboxSelectedPost,
    posts,
    featuredPost,
    lightboxSelectedPost,
    allPosts,
  ])

  const handleNextOrPreviousPost = useCallback(
    (direction) => (event) => {
      event.stopPropagation()

      if (direction === 'next') {
        selectNextPost()
        return
      }

      selectPreviousPost()
    },
    [selectPreviousPost, selectNextPost]
  )

  return (
    <>
      <Page
        subline='Portfolio'
        imageUrl={featuredPost.assetImage.fields.file.url}
      >
        <FeaturedPost>
          <Post post={featuredPost} onClick={handleSelectPost} />
        </FeaturedPost>
        <Grid>
          {posts.map((post) => (
            <Post
              key={post.identifier}
              post={post}
              onClick={handleSelectPost}
            />
          ))}
        </Grid>
      </Page>
      <Lightbox
        selectedPost={lightboxSelectedPost}
        onClose={handleCloseLightbox}
        onNextOrPrevious={handleNextOrPreviousPost}
      />
    </>
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
