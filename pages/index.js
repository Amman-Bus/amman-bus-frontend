import Head from 'next/head'
import Header from '../components/Header'
import MapSection from '../components/MapSection'

function Home() {
  return (
    <div>
      <Head>
        <title>Amman Bus</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <MapSection />


    </div>

  )
}

export default Home