import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa';


  function Header(props) {

    const [isAccountList, setIsAccountList] = useState(false)

    const navItems = [
      ["Timelines", "divider1"], 
      ["Stations", "divider2"],
      ["Routes", "divider3"], 
      ["Services", "s"]
     ]

    // only work after rendering the components  
    React.useEffect(() => {
      
      var lastScroll = 0;
      const transformNone = "transform-none"
      const negativeTranslateYFull = "-translate-y-full"
      
      const logInButton = document.getElementById("logInButton")
      const signUpButton = document.getElementById("signUpButton")
      const logOutButton = document.getElementById("logOutButton")
      
      // if he is a user
      if (props.isAuthorized) {
        logInButton.classList.add("invisible")
        logInButton.classList.add("absolute")

        signUpButton.classList.add("invisible")
        signUpButton.classList.add("absolute")
        
        logOutButton.classList.remove("invisible")
        logOutButton.classList.remove("absolute")
      }
      // if he is a guest 
      else {
        logInButton.classList.remove("invisible")
        logInButton.classList.remove("absolute")

        signUpButton.classList.remove("invisible")
        signUpButton.classList.remove("absolute")
        
        logOutButton.classList.add("invisible")
        logOutButton.classList.add("absolute")
      }


      window.addEventListener("scroll", () => {
          const currentScroll = window.pageYOffset
          const header = document.getElementById("header")

          try {
        
              if (currentScroll <= 0) {
                header.classList.remove(transformNone)
                return
              }
        
              // down
              if (currentScroll > lastScroll && !header.classList.contains(negativeTranslateYFull)) {
                header.classList.remove(transformNone);
                header.classList.add(negativeTranslateYFull);
                accountListPopper("close")
              // up
              } else if (currentScroll < lastScroll && header.classList.contains(negativeTranslateYFull)) {
                header.classList.remove(negativeTranslateYFull);
                header.classList.add(transformNone);
              }
              
              lastScroll = currentScroll;

              } catch(e) {}
          })
      })
    
    function accountListPopper(order) {
      const accountList = document.getElementById("accountList")
      const accountIcon = document.getElementById("accountIcon")
      

      if (order === "open" && !isAccountList) {
        setIsAccountList(true)
        accountList.classList.remove("-translate-y-full")
        accountList.classList.remove("-top-50")
        accountList.classList.add("top-r15")
        accountIcon.classList.add("scale-50")
      } 
      else if (order === "close" && isAccountList) {
        setIsAccountList(false)
        accountList.classList.add("-translate-y-full")
        accountList.classList.remove("top-r15")
        accountList.classList.add("-top-50")
        accountIcon.classList.remove("scale-50")
      }
      else if (order === "trigger") {
        // the list was opened, close it
        if (isAccountList) {
          setIsAccountList(false)
          accountList.classList.add("-translate-y-full")
          accountList.classList.remove("top-r15")
          accountList.classList.add("-top-50")
          accountIcon.classList.remove("scale-50")
        }
        // the list was closed, open it
        else { 
          setIsAccountList(true)
          accountList.classList.remove("-translate-y-full")
          accountList.classList.remove("-top-50")
          accountList.classList.add("top-r15")
          accountIcon.classList.add("scale-50")
        }
      }
    }

    function logInHandler(e) {
      e.preventDefault()
      props.setIsLoggedIn(true)
      props.setIsSignUP(false)
    }
    
    function signUpHandler(e) {
      e.preventDefault()
      props.setIsLoggedIn(false)
      props.setIsSignUP(true)
    }

    function logOutHandler(e) {      
      e.preventDefault()
      localStorage.setItem('currentUser', JSON.stringify({}))      
      props.setIsLoggedIn(true)
      props.setIsSignUP(false)
      props.setIsAuthorized(false)
      props.setUserType('guest') 
    }

    function servicesHandler() {
      if (props.isAuthorized) {
        props.setIsService(true)
      } else {
        alert("You must be a logged-in user to access this page !")
      }

    }


    return (
      <header className='w-full h-fit'>
      
        <div id="header" className='transform-none top-0 flex justify-between m-0 bg-primary-top z-20
        items-center border-secondary-top border-b fixed w-full transition duration-500 ease-out h-r15'>

          <button onClick={()=>{location.reload()}}
          className='bg-primary-top h-full transition duration-300 ease-out hover:opacity-75 hover:translate-x-10 w-3/12'>
            <img src='./images/logo1.png' alt='logo' className='h-full'/>
          </button>

          <div className='flex bg-primary-top w-6/12 h-full items-center'>
            {navItems.map(item =>
                {
                  if(item[1] !== "s") {
                    return <div className='h-fit w-full'>
                        <button style={{fontSize: "1vw"}} onClick={()=>{document.querySelector('#'+item[1]).scrollIntoView({behavior: 'smooth'})}}
                        className='bg-secondary-top h-full w-8/12 p-r8 text-tratiary-top font-bold 
                        transition duration-300 ease-out hover:-skew-y-6 hover:scale-130 hover:bg-primary-top 
                        hover:text-secondary-top rounded-lg z-20'>
                          {item[0]}</button>
                      </div>
                    } else {
                      return <div className='h-fit w-full'>
                        <button style={{fontSize: "1vw"}} onClick={servicesHandler}
                        className='bg-secondary-top h-full w-8/12 p-r8 text-tratiary-top font-bold 
                        transition duration-300 ease-out hover:-skew-y-6 hover:scale-130 hover:bg-primary-top 
                        hover:text-secondary-top rounded-lg z-20'>
                          {item[0]}</button>
                      </div> 
                    }
                }
            )}
          </div>

          <div className='w-1/12 flex justify-center items-center'>
            <button className='bg-secondary-top p-4 rounded-full h-fit transition duration-300 ease-out 
            hover:opacity-50'
            onClick={()=>{accountListPopper("trigger")}} id='accountIcon'>
              <FaUser size="1.5vw" color='white'/>
            </button>
          </div>

        </div>

        <div id='accountList' className='fixed bg-transparent w-32  right-3 flex flex-col text-lg font-bold text-tratiary-top
        transition -translate-y-full duration-500 ease-out z-10'>

          <button onClick={(e)=>{logInHandler(e)}} id='logInButton'
          className='bg-secondary-top p-2 m-1 rounded-xl z-10 hover:opacity-50 hover:scale-110 transition duration-500 ease-out'
          >Log In</button>
          
          <button onClick={(e)=>{signUpHandler(e)}} id='signUpButton'
          className='bg-secondary-top p-2 m-1 rounded-xl z-10 hover:opacity-50 hover:scale-110 transition duration-500 ease-out'
          >Sign Up</button>

          <button onClick={(e)=>{logOutHandler(e)}} id='logOutButton'
          className='bg-secondary-top p-2 m-1 rounded-xl z-10 hover:opacity-50 hover:scale-110 transition duration-500 ease-out'
          >Log Out</button>
          
        </div>


        

      </header>
    )
  }
  
  export default Header