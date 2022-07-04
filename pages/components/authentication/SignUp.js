import React from 'react'
import axios from 'axios'


function SignUp(props){

  // React.useEffect(() => {
    async function createUser() {

      axios.defaults.xsrfCookieName = 'csrftoken'
      axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        
      try {
          axios.post(props.BACKEND_HEROKU_URL + "/admin/accounts/account/add/", {
        "last_login": "2022-07-04T20:01:11.629555Z",
        "is_superuser": true,
        "username": "admin",
        "is_staff": true,
        "is_active": true,
        "date_joined": "2022-07-04T19:43:00.523311Z",
        "first_name": null,
        "last_name": "",
        "phone_number": "",
        "email": "admin@admin.com",
        "password": "pbkdf2_sha256$320000$VZPQ63okWJj8cw1VyzPteA$7/TzgtIyxgXnKDH46leW2F4dj7nWxz4npPG7ifNmRr8=",
        "user_type": "",
        "groups": [],
        "user_permissions": []
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          
            // const {data: response} = await axios.get(BACKEND_HEROKU_URL + "api/routes/")

          } catch (error) {
            console.error(error.message);
        }
    }

  // }, [])

  function logInHandler(e) {
    e.preventDefault()            
    props.setIsLoggedIn(true)
    props.setIsSignUP(false)
  }

  function signUpSubmitHandler(e) {
    e.preventDefault()
    createUser()


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
                onClick={(e) => logInHandler(e)}>Sign In to your Account</div>

                <button onClick={(e)=>{
                    e.preventDefault()
                    props.setIsLoggedIn(false)
                    props.setIsSignUP(false)
                }}
                className='w-fit font-bold rounded-2xl m-2 mt-10 text-white bg-secondary-top px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white hover:text-secondary-top transition duration-200 ease-in'>
                    Back to the main page
                </button>

                
            </div>

        </div>
        )   
        

}

export default SignUp







