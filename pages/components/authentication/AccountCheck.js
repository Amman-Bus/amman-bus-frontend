import React, { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import MainPage from '../pageStructure/MainPage'
import Passenger from "../services/Passenger"
import Driver from "../services/Driver"


function AccountCheck(props){
    
    return(
        props.isLoggedIn ? 
        <SignIn
            BACKEND_HEROKU_URL={props.BACKEND_HEROKU_URL}
            isLoggedIn={props.isLoggedIn} 
            setIsLoggedIn={props.setIsLoggedIn}
            isSignUP={props.isSignUP}
            setIsSignUP={props.setIsSignUP}
            isAuthorized={props.isAuthorized}
            setIsAuthorized={props.setIsAuthorized}
            userType={props.userType}
            setUserType={props.setUserType}
            /> :
            
            props.isSignUP ?
            <SignUp
                BACKEND_HEROKU_URL={props.BACKEND_HEROKU_URL}
                isLoggedIn={props.isLoggedIn} 
                setIsLoggedIn={props.setIsLoggedIn}
                isSignUP={props.isSignUP}
                setIsSignUP={props.setIsSignUP}
                isAuthorized={props.isAuthorized}
                setIsAuthorized={props.setIsAuthorized}         
                userType={props.userType}
                setUserType={props.setUserType}            
                /> :

                props.isService ?
                    props.userType == "passenger" ? 
                        <Passenger
                            BACKEND_HEROKU_URL={props.BACKEND_HEROKU_URL}
                            userType={props.userType}
                            setUserType={props.setUserType}
                            isService={props.isService} 
                            setIsService={props.setIsService}
                            /> : 
                        <Driver
                            BACKEND_HEROKU_URL={props.BACKEND_HEROKU_URL}
                            userType={props.userType}
                            setUserType={props.setUserType}
                            isService={props.isService} 
                            setIsService={props.setIsService}
                            /> : 
                
                <MainPage 
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
    )
}

export default AccountCheck