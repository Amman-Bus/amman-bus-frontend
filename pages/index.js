import Head from 'next/head'
import React, {useState} from "react"
import AccountCheck from './components/authentication/AccountCheck'
import { 
  GoogleMap, 
  useJsApiLoader,
  Marker,
} from '@react-google-maps/api'

function App() {

  const API_KEY = "AIzaSyCMl98QtnsYKsQ6PbhTowjVYmD0qHwFBVY"
  const BACKEND_HEROKU_URL = "https://ammanbus-backend.herokuapp.com"
  
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [userType, setUserType] = useState('guest')

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isSignUP, setIsSignUP] = useState(false)

  const [isService, setIsService] = useState(false)

  const { isLoaded } = useJsApiLoader({googleMapsApiKey: API_KEY})
  if (!isLoaded) {return <div>Loading...</div>}

  
  return (
    <>
    <div id="main" className='bg-tratiary-top w-full h-full'>

      <Head>
        <title>Amman Bus</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Russo+One&display=swap" rel="stylesheet"/>
      </Head>

      <AccountCheck 
          API_KEY={API_KEY} 
          BACKEND_HEROKU_URL={BACKEND_HEROKU_URL}
          isLoggedIn={isLoggedIn} 
          setIsLoggedIn={setIsLoggedIn}
          isSignUP={isSignUP}
          setIsSignUP={setIsSignUP}
          isAuthorized={isAuthorized}
          setIsAuthorized={setIsAuthorized}
          userType={userType}
          setUserType={setUserType}
          isService={isService} 
          setIsService={setIsService}
       />

      </div>
    </>
  )
}

export default App