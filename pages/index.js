import Head from 'next/head'
import Header from './components/Header'
import React from 'react'
import MainPage from './components/MainPage'

function Home() {

  return (
    <div id="main" className='bg-white'>

      <Head>
        <title>Amman Bus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <MainPage />
        
    </div>
  )
}

export default Home