import Head from 'next/head'
import Header from './components/Header'
import MapSection from './components/MapSection'
// import Account from './components/Account'
import React from 'react'


function Home() {



  return (
    <div>
      <Head>
        <title>Amman Bus</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        {/* <Account /> */}
        <MapSection />

        
    </div>
  )
}

export default Home