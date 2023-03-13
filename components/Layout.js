import { ConfigProvider } from 'antd'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Head from 'next/head'


const Layout = ({children}) => {
  return (
    <ConfigProvider
    theme={{
        token: {
          colorPrimary: '#141a86',
        },
      }}
    >
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300&family=M+PLUS+Rounded+1c:wght@300&display=swap" rel="stylesheet" />
      </Head>
     <Header />
      {children}
      <Footer />
    </ConfigProvider>
  )
}

export default Layout