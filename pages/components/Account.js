import React, {useState} from 'react'
import Head from 'next/head'
import Header from './Header'
import SignIn from './SignIn'
import SignUp from './SignUp'


function Account() {

    const [isLoggedIn, setIsLoggedIn] = useState(true)


  return (
    <div>
      
      
        <Header />
        {isLoggedIn?(<SignIn isLoggedIn={isLoggedIn}/>):(<SignUp/>)}
    
    </div>


    
  )
}

export default Account