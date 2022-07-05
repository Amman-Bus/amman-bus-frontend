import React from 'react'
import axios from 'axios'


function SignUp(props){

  function logInHandler(e) {
    e.preventDefault()            
    props.setIsLoggedIn(true)
    props.setIsSignUP(false)
  }

  async function signUpSubmitHandler(e) {
    e.preventDefault()

    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
    axios.defaults.xsrfCookieName = "csrftoken"

    await axios.post('https://ammanbus.herokuapp.com/admin/login', {     
        username: 'admin',
        password: 'abcd1234'
    }, {
      withCredentials: true,
      headers: {
      'Content-Type': 'application/json',
      // 'X-CSRFTOKEN': csrf_token,
      },
    })
    .then(res => {console.log(res)}) 
    .catch(err => {console.log(err)}) 

    // await axios.post(props.BACKEND_HEROKU_URL + "/admin/accounts/account/add/", {
    //   "username": "admin",
    //   "first_name": "mustafa",
    //   "last_name": "hasanat",
    //   "phone_number": "0000",
    //   "email": "m@m.com",
    //   "password": "0000",
    //   "user_type": "passenger",
    // })
    // .then(res => {console.log(res)}) 
    // .catch(err => {console.log(err)}) 



    if(false) {
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

                <form onSubmit={(e)=>{signUpSubmitHandler(e)}} className='flex flex-col justify-center items-center w-full'>
                    {/* <input required type="text" placeholder='First Name' className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    <input required type="text" placeholder='Last Name' className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    <input required type="email" placeholder='Email' className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    <input required type="tel" placeholder="Mobile number" className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>
                    <input required type="password" placeholder='Password' className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>

                    <div className='grid grid-cols-2'>    
                        <label className='col-span-2 text-secondary-top mt-4 text-[3vh]'
                            >Select the type of your account</label>
                        
                        <label className='text-center text-secondary-top mt-4 text-[3vh] font-bold'>Passenger</label>
                        <input required className='mt-4 w-6 h-6' type="radio" id="pass" value="Passenger" name='accountType'/>
                        
                        <label className='text-center text-secondary-top mt-4 text-[3vh] font-bold'>Driver</label>
                        <input required className='mt-4 w-6 h-6' type="radio" id="drive" value="Driver" name='accountType'/>
                    
                    </div>                     */}
                
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







