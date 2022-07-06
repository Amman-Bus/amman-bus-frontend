import React from 'react'
import Header from './Header'
import HomePage from './HomePage'


function MainPage(props){

    return(
        <div className='w-full h-fit'>
            <Header
                BACKEND_HEROKU_URL={props.BACKEND_HEROKU_URL}
                isLoggedIn={props.isLoggedIn} 
                setIsLoggedIn={props.setIsLoggedIn}
                isSignUP={props.isSignUP}
                setIsSignUP={props.setIsSignUP}
                isAuthorized={props.isAuthorized}
                setIsAuthorized={props.setIsAuthorized}
                userType={props.userType}
                setUserType={props.setUserType}
                isService={props.isService} 
                setIsService={props.setIsService}    
                />
            <HomePage 
                API_KEY={props.API_KEY} 
                BACKEND_HEROKU_URL={props.BACKEND_HEROKU_URL}
                isLoggedIn={props.isLoggedIn} 
                setIsLoggedIn={props.setIsLoggedIn}
                isSignUP={props.isSignUP}
                setIsSignUP={props.setIsSignUP}
                isAuthorized={props.isAuthorized}
                setIsAuthorized={props.setIsAuthorized}
                userType={props.userType}
                setUserType={props.setUserType}
                isService={props.isService} 
                setIsService={props.setIsService}    
                />
        </div>
    )
}

export default MainPage