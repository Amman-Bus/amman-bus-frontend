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
                            API_KEY={props.API_KEY} 
                            /> : 
                        <Driver
                            API_KEY={props.API_KEY} 
                            />
                : 
                
                <MainPage 
                    API_KEY={props.API_KEY} 
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