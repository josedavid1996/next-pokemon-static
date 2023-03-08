import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from '../ui/Navbar'

interface Props {
  children: ReactNode
  title?: string
}

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
      </Head>
      {/* Navbar */}
      <Navbar />
      <main style={{ padding: '0 20px' }}>{children}</main>
    </>
  )
}

export default Layout
