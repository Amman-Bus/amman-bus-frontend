  import React, { useState } from 'react'
  import { FaUser } from 'react-icons/fa';


  function Header() {

    const [isAccountList, setIsAccountList] = useState(false)

    const navItems = [
      ["Timelines", "divider1"], 
      ["Stations", "divider2"],
      ["Routes", "divider3"], 
      ["Prices", "divider4"],
      ["Services", "s"]
     ]

    // only work after rendering the components  
    React.useEffect(() => {
      
      var lastScroll = 0;
      const transformNone = "transform-none"
      const negativeTranslateYFull = "-translate-y-full"
    
      window.addEventListener("scroll", () => {
          const currentScroll = window.pageYOffset
          const header = document.getElementById("header")
    
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

    function servicesHandler() {
      
    }


    return (
      <header className='w-full h-fit'>
      
        <div id="header" className='transform-none top-0 flex justify-between m-0 bg-primary-top z-20
        items-center border-secondary-top border-b fixed w-full transition duration-500 ease-out h-r15'>

          <button className='bg-primary-top h-full transition duration-300 ease-out hover:opacity-75 hover:translate-x-10 w-3/12'>
            <img src='./images/logo1.png' alt='logo' className='h-full'/>
          </button>

          <div className='flex bg-primary-top w-7/12 h-full items-center'>
            {navItems.map(item =>
                {
                  if(item[1] !== "s") {
                    return <div className='h-fit w-1/6 p-r2'>
                        <button style={{fontSize: "100%"}} onClick={()=>{document.querySelector('#'+item[1]).scrollIntoView({behavior: 'smooth'})}}
                        className='bg-secondary-top h-full w-full p-r8 text-tratiary-top font-bold 
                        transition duration-300 ease-out hover:-skew-y-6 hover:scale-130 hover:bg-primary-top 
                        hover:text-secondary-top rounded-lg z-20'>
                          {item[0]}</button>
                      </div>
                    } else {
                      return <div className='h-fit w-1/6 p-r2'>
                        <button style={{fontSize: "100%"}} onClick={servicesHandler}
                        className='bg-secondary-top h-full w-full p-r8 text-tratiary-top font-bold 
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
          {["Sign up", "Log in"].map(title => <button className='bg-secondary-top p-2 m-1 rounded-xl z-10'>{title}</button>)}
          <button className='bg-secondary-top p-2 m-1 rounded-xl z-10 invisible'>Log out</button>
        </div>


        

      </header>
    )
  }
  
  export default Header