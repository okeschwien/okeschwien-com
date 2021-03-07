import Head from 'next/head'
import { container } from '../styles/Main.module.css'

import fetchPosts from '../utils/fetchPosts'
import Post from '../components/Post'
import Header from '../components/Header'

export default function Home({ posts }) {
  return (
    <div className={container}>
      <Head>
        <title>okeschwien.com</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header headline='hi, my name is oke' />

      <div>
        {posts.map((post, index) => (
          <Post key={`${post.timestamp}-${index}`} post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchPosts()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}
