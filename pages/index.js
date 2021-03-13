import { useCallback, useState, useEffect } from 'react'

import Page from '../components/Page'
import fetchPosts from '../utils/fetchPosts'
import Post from '../components/Post'
import Grid from '../components/Grid'
import FeaturedPost from '../components/FeaturedPost'
import Lightbox from '../components/Lightbox'

const Home = ({ featuredPost, posts }) => {
  const allPosts = [...[featuredPost], ...posts]
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

  // useEffect(() => {
  //   console.log('SELECTED POST', lightboxSelectedPost)
  // }, [lightboxSelectedPost])

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

  // const keydownListener = useCallback(
  //   (event) => {
  //     console.log(event.keyCode)

  //     // keys: arrowRight = 39, space = 32, enter = 13, arrowUp = 38
  //     if ([39, 32, 13, 38].includes(event.keyCode)) {
  //       event.preventDefault()
  //       event.stopPropagation()
  //       selectNextPost()
  //     }

  //     //keys: arrowLeft = 37, arrowDown = 40
  //     if ([37, 40].includes(event.keyCode)) {
  //       event.preventDefault()
  //       event.stopPropagation()
  //       selectPreviousPost()
  //     }
  //   },
  //   [
  //     lightboxSelectedPost,
  //     handleNextOrPreviousPost,
  //     selectPreviousPost,
  //     selectNextPost,
  //   ]
  // )

  // useEffect(() => {
  //   document.addEventListener('keydown', keydownListener)

  //   return () => {
  //     document.removeEventListener('keydown', keydownListener)
  //   }
  // }, [])

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
        onNextOrPrevious={handleNextOrPreviousPost}
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
