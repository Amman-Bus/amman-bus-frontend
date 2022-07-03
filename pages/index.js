import Head from 'next/head'
import React from 'react'
import Header from './components/pageStructure/Header'
import MainPage from './components/pageStructure/MainPage'
import Footer from './components/pageStructure/Footer'
import SignIn from './components/authentication/SignIn'


function Home() {
  
  const API_KEY = "AIzaSyCMl98QtnsYKsQ6PbhTowjVYmD0qHwFBVY"

  return (
    <div id="main" className='bg-tratiary-top w-full'>

      <Head>
        <title>Amman Bus</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Russo+One&display=swap" rel="stylesheet"/>
      </Head>

      {/* <SignIn /> */}
      
      <Header />
      <MainPage API_KEY={API_KEY}/>
      <Footer />

    </div>
  )
}

export default Home