import Head from 'next/head'
import Header from './components/Header'
import React from 'react'
import MainPage from './components/MainPage'
import Driver from './components/Driver'

function Home() {

  return (
    <div id="main" className='bg-white'>

      <Head>
        <title>Amman Bus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <MainPage />

      <Driver />
        
    </div>
  )
}

export default Home