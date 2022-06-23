import React from 'react'

function SignUpAsPassenger (){
   
    return (
        <div className="bg-blue-400 text-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
            <h2 className='p-3 text-3xl font-bold text-white'>Sign up as Passenger</h2>
            <div className='inline-block border-[1px] justify-center w-20 border-white border-solid'></div>
            <h3 className='text-xl font-semibold text-white pt-2'>Create an Account!</h3>
    
    
            <form className='flex flex-col items-center justify-center mt-2'>
                <input type="text" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='First Name'></input>
                <input type="text" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Middle Name'></input>
                <input type="text" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Last Name'></input>
                <input type="date" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0'></input>
                <input type="number" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='ID number'></input>
                <input type="email" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Email'></input>
                <input type="tel" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder="Mobile number"></input>
                <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
                <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Verify the Password'></input>
                <input type="text" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Bank Name'></input>
                <input type="number" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Bank IBM'></input>
                <input type="number" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Bank Verification Code'></input>
                



                <button className='rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in'>
                    Sign In As A Passenger
                </button>
            </form>
    
    
            <div className='inline-block border-[1px] justify-center w-20 border-white border-solid'></div>
            <p className='text-white mt-4 text-sm'>Already have an account?</p>
            <p className='text-white mt-4 text-sm font-medium cursor-pointer' onClick={() => setIsLoggedIn(true)}>Sign In to your Account?</p>
    
    
        </div>
        )   
        

}

export default SignUpAsPassenger







