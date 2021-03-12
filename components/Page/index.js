import Head from 'next/head'

import { container } from '../../styles/Page.module.css'

import Header from '../Header'
import Footer from '../Footer'

const Page = ({ children, subline }) => (
  <div className={container}>
    <Head>
      <title>okeschwien.com</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header headline='Oke' subline={subline} />
    {children}
    <Footer />
  </div>
)

export default Page
