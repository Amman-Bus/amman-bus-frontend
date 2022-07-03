import React, { useState } from 'react'

function SignIn (props){


    return (
    <div className="w-full flex p-28 justify-center items-center transition duration-500 ease-out">

        <div className='w-fit p-20 rounded-2xl shadow-2xl flex flex-col justify-center items-center'>

            <div className='w-full text-4vw font-russo text-secondary-top pb-8 text-center'>Sign In</div>


            <form className='flex flex-col items-center justify-center w-full'>
                <input type="email" className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0' placeholder='Email'/>
                <input type="password" className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0' placeholder='Password'/>
                <button className='w-fit font-bold rounded-2xl m-2 text-white bg-secondary-top px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white hover:text-secondary-top transition duration-200 ease-in'>
                    Sign In
                </button>
            </form>


            <div className='inline-block bo rder-[1px] justify-center w-20 border-blue-400 border-solid'></div>
            <p className='text-blue-400 mt-4 text-sm'>Don't Have an Account?</p>
            <p className='text-blue-400 mt-4 text-sm font-medium cursor-pointer' onClick={() => props.setIsLoggedIn(false)}>Create an Account?</p>

        </div>

    </div>
    )   
}

export default SignIn