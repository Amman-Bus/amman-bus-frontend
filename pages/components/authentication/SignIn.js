import React, { useRef } from 'react'
import axios from 'axios'


function SignIn (props){

    const email = useRef()
    const password = useRef()

    // React.useEffect(() => {
    // })

    function goToAdminPage(e) {
        e.preventDefault()
        window.open(props.BACKEND_HEROKU_URL + "/admin/", '_blank')
    }

    function signUpHandler(e) {
        e.preventDefault()
        props.setIsLoggedIn(false)
        props.setIsSignUP(true)
    }

    async function signInSubmitHandler(e) {
        e.preventDefault()

        const enteredEmail = email.current.value
        const enteredPassword = password.current.value
        const radios = document.getElementsByName('accountType')

        const data = await axios.get(props.BACKEND_HEROKU_URL + "/accounts/register/")
        const usersData = data.data

        var userType = "guest"

        if(radios[0].checked) {
            userType = "passenger"
        } else if(radios[1].checked) {
            userType = "driver"
        } else {
            alert("You have to select an account type")
        }

        console.log(usersData)
        console.log(enteredEmail)
        console.log(enteredPassword)
        console.log(userType)

        for (let index = 0; index < usersData.length; index++) {   
            if(
                usersData[index]["email"] == enteredEmail && 
                usersData[index]["password"] == enteredPassword &&
                usersData[index]["user_type"] == userType 
                ) {
                    if(userType == "passenger") {
                        props.setUserType("passenger")
                    } else if(userType == "driver") {
                        props.setUserType("driver")
                    }

                    localStorage.setItem('currentUser', JSON.stringify(usersData[index]))

                    props.setIsLoggedIn(false)
                    props.setIsSignUP(false)
                    props.setIsAuthorized(true)
            }    
        }

        const currentUser = JSON.parse(localStorage.getItem('currentUser'))
        
        if (Object.keys(currentUser).length === 0) {
            alert("Invalid email or password, or you may have selected the wrong account type associated with your email")
        }


    }

    return (
    <div className="w-full flex p-28 justify-center items-center transition duration-500 ease-out">

        <div className='w-fit p-20 rounded-2xl shadow-2xl flex flex-col justify-center items-center'>

            <div className='w-full text-4vw font-russo text-secondary-top pb-8 text-center'>Log In</div>

            <form onSubmit={(e)=>{signInSubmitHandler(e)}} 
            className='flex flex-col items-center justify-center w-full'>
                <input required ref={email} type="email" className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0' placeholder='Email'/>
                <input required ref={password} type="password" className='w-full rounded-2xl px-2 py-1 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0' placeholder='Password'/>
                
                <div className='grid grid-cols-2'>    
                    <label className='col-span-2 text-secondary-top mt-4 text-[3vh]'
                        >Select the type of your account</label>
                    
                    <label className='text-center text-secondary-top mt-4 text-[3vh] font-bold'>Passenger</label>
                    <input required className='mt-4 w-6 h-6' type="radio" id="pass" value="Passenger" name='accountType'/>
                    
                    <label className='text-center text-secondary-top mt-4 text-[3vh] font-bold'>Driver</label>
                    <input required className='mt-4 w-6 h-6' type="radio" id="drive" value="Driver" name='accountType'/>
                
                </div>

                <button 
                className='w-fit font-bold rounded-2xl m-2 mt-10 text-white bg-secondary-top px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white hover:text-secondary-top transition duration-200 ease-in'>
                    Log In
                </button>

            </form>


            <div className='text-secondary-top mt-4 text-[3vh]'>Don't Have an Account?</div>

            <button className='text-secondary-top mt-4 text-[3vh] font-bold cursor-pointer hover:scale-110 hover:bg-secondary-top hover:text-white
            transition duration-500 ease-out p-2 rounded-full' 
                onClick={(e) => signUpHandler(e)}>Create an Account</button>

            <button onClick={(e)=>{
                e.preventDefault()
                props.setIsLoggedIn(false)
                props.setIsSignUP(false)
                document.querySelector('#main').scrollIntoView({behavior: 'smooth'})
            }}
            className='w-fit font-bold rounded-2xl m-2 mt-10 text-white bg-secondary-top px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white hover:text-secondary-top transition duration-200 ease-in'>
                Back to the main page
            </button>

            <button className='w-fit font-bold rounded-2xl m-2 mt-10 text-white bg-secondary-top px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white hover:text-secondary-top transition duration-200 ease-in'
            onClick={(e)=>{goToAdminPage(e)}}>
                Go To Admin Page
            </button>

        </div>

    </div>
    )   
}

export default SignIn