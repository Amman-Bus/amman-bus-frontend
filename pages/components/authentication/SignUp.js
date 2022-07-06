import React, { useState, useRef } from 'react'
import axios from 'axios'


function SignUp(props){

  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const mobile = useRef()
  const password = useRef()
  const username = useRef()
  
  const [tokenState, setTokenState] = useState('')
  const [refreshState, setRefreshState] = useState('')

  function logInHandler(e) {
    e.preventDefault()            
    props.setIsLoggedIn(true)
    props.setIsSignUP(false)
  }

  async function signUpSubmitHandler(e) {
    e.preventDefault()

    // log in in the admin account
    try {
        await axios.post(props.BACKEND_HEROKU_URL + "/api/token/", {
          "username": "admin",
          "password": "abcd1234"
        })
        .then(res => {
          setTokenState(res.data.access)
          setRefreshState(res.data.refresh)
          localStorage.setItem('token', JSON.stringify(res.data.access))
          localStorage.setItem('refresh', JSON.stringify(res.data.refresh))
          console.log("log in successfully !!");
        }) 
        .catch(err => {console.log(err)})
    } catch (error) {
        console.error(error.message);
    }

    // sign up
    try {
      // const token = JSON.parse(localStorage.getItem('token'))
      const radios = document.getElementsByName('accountTypeSignUp')
      var userType = "guest"

      if(radios[0].checked) {
          userType = "passenger"
      } else if(radios[1].checked) {
          userType = "driver"
      } else {
          alert("You have to select an account type")
          return
      }

      const config={
          headers:{
              'Authorization': `Bearer ${tokenState}`
          }
      }

      const newUser = {
        "username": username.current.value,
        "first_name": firstName.current.value,
        "last_name": lastName.current.value,
        "phone_number": mobile.current.value,
        "email": email.current.value,
        "password": password.current.value,
        "user_type": userType
        }

      await axios.post(props.BACKEND_HEROKU_URL+"/accounts/register/", newUser, config)
        .then(res => {
          console.log("sign up successfully !!");
          alert('Your account has been created successfully ! .. You\'ll be redirected to the log in page after closing this message.')  
          setTimeout(()=>{
            props.setIsLoggedIn(true)
            props.setIsSignUP(false)
          }, 2000);
        }) 
        .catch(err => {
          console.log(err)
        })


    } catch (error) {
        console.error(error.message);
    }

  }
   
  return (
        <div className="w-full flex p-28 justify-center items-center transition duration-500 ease-out">

            <div id='signUpBox' className='w-fit p-20 rounded-2xl shadow-2xl flex flex-col justify-center items-center'>

                <div className='w-full text-4vw font-russo text-secondary-top pb-8 text-center'>
                    Sign up</div>

                <form onSubmit={(e)=>{signUpSubmitHandler(e)}} className='flex flex-col justify-center items-center w-full'>
                    <input required type="text" placeholder='First Name' ref={firstName}
                    className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    
                    <input required type="text" placeholder='Last Name' ref={lastName}
                    className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    
                    <input required type="email" placeholder='Email' ref={email}
                    className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    
                    <input required type="tel" placeholder="Mobile number" ref={mobile}
                    className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    
                    <input required type="password" placeholder='Password' ref={password}
                    className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>

                    <input required type="text" placeholder='Username' ref={username}
                    className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    
                    <div className='grid grid-cols-2'>    
                        <label className='col-span-2 text-secondary-top mt-4 text-[3vh]'
                            >Select the type of your account</label>
                        
                        <label className='text-center text-secondary-top mt-4 text-[3vh] font-bold'>Passenger</label>
                        <input required className='mt-4 w-6 h-6' type="radio" id="passSignUp" value="Passenger" name='accountTypeSignUp'/>
                        
                        <label className='text-center text-secondary-top mt-4 text-[3vh] font-bold'>Driver</label>
                        <input required className='mt-4 w-6 h-6' type="radio" id="driveSignUp" value="Driver" name='accountTypeSignUp'/>
                    
                    </div>                    
                
                    <div className='col-span-3 flex justify-center items-center'>
                      <button className='font-bold rounded-2xl m-2 text-white bg-secondary-top px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white hover:text-secondary-top transition duration-200 ease-in'>
                          Sign up as a Passenger
                      </button>
                    </div>
                
                </form>

                <div className='text-secondary-top mt-4 text-1vw'>Already have an account?</div>
                <div className='text-secondary-top mt-4 text-15vw font-bold cursor-pointer hover:scale-110 hover:bg-secondary-top hover:text-white
                transition duration-500 ease-out p-2 rounded-full' 
                onClick={(e) => logInHandler(e)}>Log In to your Account</div>

                <button onClick={(e)=>{
                    e.preventDefault()
                    props.setIsLoggedIn(false)
                    props.setIsSignUP(false)
                    document.querySelector('#main').scrollIntoView({behavior: 'smooth'})
                }}
                className='w-fit font-bold rounded-2xl m-2 mt-10 text-white bg-secondary-top px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white hover:text-secondary-top transition duration-200 ease-in'>
                    Back to the main page
                </button>

                
            </div>

        </div>
        )   
        

}

export default SignUp







