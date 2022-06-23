import React, {useState} from 'react'
import Header from './Header'
import SignIn from './SignIn'
import SignUp from './SignUp'


function Account() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (
    <div>
        <Header />
        {isLoggedIn?(<SignIn isLoggedIn={isLoggedIn}/>):(<SignUp/>)}
    
    </div>


    
  )
}

export default Account