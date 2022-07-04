import React, { useState, useRef } from 'react'

function SignIn (props){

    const email = useRef()
    const password = useRef()

    function signUpHandler(e) {
        e.preventDefault()
        props.setIsLoggedIn(false)
        props.setIsSignUP(true)
    }

    function signInSubmitHandler(e) {
        e.preventDefault()

        // TODO: validate email and password
        
        const enteredEmail = email.current.value
        const enteredPassword = password.current.value

        if(true) {
            props.setIsLoggedIn(false)
            props.setIsSignUP(false)
        }
    }

    return (
    <div className="w-full flex p-28 justify-center items-center transition duration-500 ease-out">

        <div className='w-fit p-20 rounded-2xl shadow-2xl flex flex-col justify-center items-center'>

            <div className='w-full text-4vw font-russo text-secondary-top pb-8 text-center'>Sign In</div>

            <form onSubmit={(e)=>{signInSubmitHandler(e)}} 
            className='flex flex-col items-center justify-center w-full'>
                <input ref={email} type="email" className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0' placeholder='Email'/>
                <input ref={password} type="password" className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0' placeholder='Password'/>
                <button className='w-fit font-bold rounded-2xl m-2 text-white bg-secondary-top px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white hover:text-secondary-top transition duration-200 ease-in'>
                    Sign In
                </button>
            </form>

            <p className='text-secondary-top mt-4 text-1vw'>Don't Have an Account?</p>
            <p className='text-secondary-top mt-4 text-15vw font-bold cursor-pointer hover:scale-110 hover:bg-secondary-top hover:text-white
            transition duration-500 ease-out p-2 rounded-full' 
            onClick={(e) => signUpHandler(e)}>Create an Account</p>

        </div>

    </div>
    )   
}

export default SignIn