import React from 'react'

function SignUp(props){

  function logInHandler(e) {
    e.preventDefault()            
    props.setIsLoggedIn(true)
    props.setIsSignUP(false)
  }

  function signUpSubmitHandler(e) {
    e.preventDefault()

    // TODO: validate the entered info 
    if(true) {
      alert('Your account has been created successfully ! .. You\'ll be redirected to the log in page after closing this message.')  
      setTimeout(()=>{
        props.setIsLoggedIn(true)
        props.setIsSignUP(false)
      }, 2000);
    }
  }
   
  return (
        <div className="w-full flex p-28 justify-center items-center transition duration-500 ease-out">

            <div id='signUpBox' className='w-fit p-20 rounded-2xl shadow-2xl flex flex-col justify-center items-center'>

                <div className='w-full text-4vw font-russo text-secondary-top pb-8 text-center'>
                    Sign up</div>

                <form onSubmit={(e)=>{signUpSubmitHandler(e)}} className='grid grid-cols-3 gap-5 w-full'>
                    <input required type="text" placeholder='First Name' className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    <input required type="text" placeholder='Middle Name' className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    <input required type="text" placeholder='Last Name' className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    <input required type="date" className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    <input required type="number" placeholder='ID number' className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    <input required type="email" placeholder='Email' className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    <input required type="tel" placeholder="Mobile number" className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    <input required type="password" placeholder='Password' className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    <input required type="password" placeholder='Verify the Password' className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    <input required type="text" placeholder='Bank Name' className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    <input required type="number" placeholder='Bank IBM' className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    <input required type="number" placeholder='Bank Verification Code' className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    
                    <div className='col-span-3 flex justify-center items-center'>
                      <button className='font-bold rounded-2xl m-2 text-white bg-secondary-top px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white hover:text-secondary-top transition duration-200 ease-in'>
                          Sign up as a Passenger
                      </button>
                    </div>
                
                </form>

                <div className='text-secondary-top mt-4 text-1vw'>Already have an account?</div>
                <div className='text-secondary-top mt-4 text-15vw font-bold cursor-pointer hover:scale-110 hover:bg-secondary-top hover:text-white
                transition duration-500 ease-out p-2 rounded-full' 
                onClick={(e) => logInHandler(e)}>Sign In to your Account</div>

            </div>

        </div>
        )   
        

}

export default SignUp







