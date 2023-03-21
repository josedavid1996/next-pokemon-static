import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from '../ui/Navbar'

interface Props {
  children: ReactNode
  title?: string
}
const origin = typeof window === 'undefined' ? '' : window.location.origin
const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Jose david" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keyword" content={`${title},pokemon,pokedex`} />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      {/* Navbar */}
      <Navbar />
      <main style={{ padding: '0 20px' }}>{children}</main>
    </>
  )
}

export default Layout
