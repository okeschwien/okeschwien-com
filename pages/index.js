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

      <Header headline='Hi, my name is Oke' subline='This is my portfolio' />

      <div>
        {posts.map((post) => (
          <Post key={post.identifier} post={post} />
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
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
