import Head from 'next/head'

import { container } from '../../styles/Page.module.css'

import Header from '../Header'
import Footer from '../Footer'

const Page = ({ children, subline, imageUrl }) => (
  <div className={container}>
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <title>okeschwien.com</title>

      <meta name='title' content='okeschwien.com' />
      <meta name='description' content='Portfolio' />
      <meta name='viewport' content='initial-scale=1.0, user-scalable=no' />

      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://okeschwien.com/' />
      <meta property='og:title' content='okeschwien.com' />
      <meta property='og:description' content={subline} />
      {imageUrl && <meta property='og:image' content={`https:${imageUrl}`} />}

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content='https://okeschwien.com/' />
      <meta property='twitter:title' content='okeschwien.com' />
      <meta property='twitter:description' content={subline} />
      {imageUrl && (
        <meta property='twitter:image' content={`https:${imageUrl}`} />
      )}
    </Head>
    <Header headline='Oke' subline={subline} />
    {children}
    <Footer />
  </div>
)

export default Page
