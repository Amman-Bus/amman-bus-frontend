import React, { useState } from 'react'
import Timelines from '../mainPageComponents/Timelines'
import Stations from '../mainPageComponents/Stations'
import Routes from '../mainPageComponents/Routes'
import Prices from '../mainPageComponents/Prices'
import DownArrows from '../mainPageComponents/DownArrows'
import ContactUs from '../mainPageComponents/ContactUs'

import { ImCircleUp, ImCircleDown } from "react-icons/im"
import { IoBus } from "react-icons/io5"
import { RiMapPinTimeLine, RiMoneyDollarCircleFill } from "react-icons/ri"
import { BsFillBookmarkPlusFill } from "react-icons/bs"


function HomePage(props) {

  const [iconSize, setIconSize] = useState(110)

  const featuresData = [
    [<RiMapPinTimeLine color='#075278' size={iconSize}/>, "Check the timeline", "Get access to the departure and arrival times for each bus."],
    [<IoBus color='#075278' size={iconSize}/>, "Track your bus", "Aquire a specific location for the bus you want to catch."],
    [<RiMoneyDollarCircleFill color='#075278' size={iconSize}/>, "Check the costs", "Calculate exactly how much will the trip cost before leaving your house."],
    [<BsFillBookmarkPlusFill color='#075278' size={iconSize}/>, "Book your trip", "Register and pay in advance on your desired trip."]
  ]

  function triggerShowHideSection(section, SH, opacity='opacity-0', action='-translate-y-28') {
    if (SH == 'show') {
      section.classList.remove(opacity)
      section.classList.remove(action)
    } else if (SH == 'hide'){
      section.classList.add(opacity)
      section.classList.add(action)
    }
  }

  React.useEffect(() => {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    
    if (Object.keys(currentUser).length !== 0) {
      props.setIsLoggedIn(false)
      props.setIsSignUP(false)
      props.setIsAuthorized(true)
      
      const userType = currentUser["user_type"]
      if(userType == "passenger") {
          props.setUserType("passenger")
      } else if(userType == "driver") {
          props.setUserType("driver")
      } else {
          alert("there is a problem in the naming of the user type")
      }

    } else {
      localStorage.setItem('currentUser', JSON.stringify({}))
    }
    
    const screenHeight = window.screen.height

    window.addEventListener('load', () => {

      try {
        document.querySelector('#mainPage').scrollIntoView({behavior: 'smooth'})
        const map = document.getElementById('ammanMap')
        const caption = document.getElementById('caption')

        triggerShowHideSection(caption, 'show')
        triggerShowHideSection(map, 'show', 'opacity-0', 'scale-0')
      } catch(e) {}
    })

    window.addEventListener('scroll', () => {
      try {
        const map = document.getElementById('ammanMap')
        const caption = document.getElementById('caption')
        // const slogan = document.getElementById('slogan')
        const section1 = document.getElementById('section1')
        const section2 = document.getElementById('section2')
        const section3 = document.getElementById('section3')
        const section4 = document.getElementById('section4')
        // const section5 = document.getElementById('section5')
        const pageYOffset = window.scrollY

        const threshold = pageYOffset + screenHeight 

        if (pageYOffset < caption.offsetTop) {
          triggerShowHideSection(caption, 'show')
          triggerShowHideSection(map, 'show', 'opacity-0', 'scale-0')
        } else {
          triggerShowHideSection(caption, 'hide')
          triggerShowHideSection(map, 'hide', 'opacity-0', 'scale-0')
        }

        if (threshold < section1.offsetTop) 
        {
          triggerShowHideSection(section1, 'hide')
        } else {
          triggerShowHideSection(section1, 'show')
        } 

        if (threshold < section2.offsetTop) 
        {
          triggerShowHideSection(section2, 'hide')
        } else {
          triggerShowHideSection(section2, 'show')
        } 

        if (threshold < section3.offsetTop) 
        {
          triggerShowHideSection(section3, 'hide')
        } else {
          triggerShowHideSection(section3, 'show')
        } 

        if (threshold < section4.offsetTop) 
        {
          triggerShowHideSection(section4, 'hide')
        } else {
          triggerShowHideSection(section4, 'show')
        }
      } catch(e) {}

      })
  })

  return (
    <div id="mainPage" className="w-full h-fit">
        
        <div id="background" className="h-fit w-full h-screen flex justify-between items-center
        bg-[url('/images/busWallpaper.jpg')] p-20" 
        style={{backgroundRepeat: "no-repeat", backgroundSize: "100% 100%"}}>
            
            <div id='caption' style={{textShadow: "5px 5px 3px #000"}} 
            className='capitalize font-bold text-tratiary-top text-3vw font-russo
            w-2/5 leading-tight tracking-wider transition duration-1000 opacity-0 -translate-y-28'>
              Get <span className='text-secondary-top underline'>access</span> to the transportation system data, 
              <br/>and <span className='text-secondary-top underline'>book</span> your trip easily.</div>

            <div id="ammanMap" className='w-1/5 transition duration-1000 opacity-0 scale-0 hover:scale-130'>
                <img className='w-full opacity-95 rounded-full shadow-md shadow-secondary-top'
                src='.\images\amman.png' alt='amman map'/>
            </div>
        </div>

        <div id='upArrow' className='fixed bottom-5 right-5 bottom-20 transition duration-300 
        hover:-translate-y-3 hover:cursor-pointer hover:opacity-75 z-50'
        onClick={()=>{document.querySelector('#mainPage').scrollIntoView({behavior: 'smooth'})}}>
          <ImCircleUp color='#F55139' size={50}/>
        </div>

        <div id='downArrow' className='fixed bottom-5 right-5 transition duration-300 
        hover:translate-y-3 hover:cursor-pointer hover:opacity-75 z-50'
        onClick={()=>{document.querySelector('#footer').scrollIntoView({behavior: 'smooth'})}}>
          <ImCircleDown color='#F55139' size={50}/>
        </div>

        <div id='movingArrows' className='bg-gradient-to-b from-bg-1 to-tratiary-top opacity-95
        w-full h-60 flex justify-evenly items-end border-t-4 border-gray-700 z-30'>

          <DownArrows w="w-1/12" h="h-fit"/>
          
          <div id='slogan' 
          className='font-bold text-primary-top text-4vw font-russo'>
            <span className='text-secondary-top'>//</span> Keep your trip <br/>
            <span className='text-secondary-top'>//</span> under control
          </div>
          
          <DownArrows w="w-1/12" h="h-fit"/>
        
        </div>

        <div id='features' className='w-full h-fit grid grid-cols-2 pt-32 pr-20 pl-20 gap-5'>
          {           
            featuresData.map(feature => {
              return <div className='flex justify-center items-center border-4 border-bg-1 rounded-md opacity-80 p-5'>
              
                <div className='rounded-full h-full w-1/3 flex justify-center items-center'>
                  {feature[0]}
                </div>

                <div className='h-fit w-2/3 flex flex-col justify-center items-center '>
                  
                  <div className='h-1/2 w-full font-bold text-primary-top text-3vw font-russo'>
                    {feature[1]}
                  </div>
                  
                  <div className='h-1/2 w-full font-bold text-primary-top text-15vw'>
                    {feature[2]}
                  </div>
                
                </div>
              </div>
            })
          }
        </div>

        <div id='divider1' style={{textShadow: "5px 5px 8px #FFF"}}  
            className='opacity-100 w-full h-fit flex justify-center items-center p-16'>
                <div className='w-full font-bold text-primary-top text-4vw font-russo opacity-75 text-center leading-tight tracking-wider'>
                    Buses' Timelines</div>
        </div>

        <Timelines 
            API_KEY={props.API_KEY}
            BACKEND_HEROKU_URL={props.BACKEND_HEROKU_URL}
            />

        <div id='divider2' style={{textShadow: "5px 5px 8px #FFF"}}  
            className='opacity-100 w-full h-fit flex justify-center items-center p-20'>
                <div className='w-full font-bold text-primary-top text-4vw font-russo opacity-75 text-center leading-tight tracking-wider'>
                Buses' Stations
                </div>
        </div>

        <Stations 
            API_KEY={props.API_KEY}
            BACKEND_HEROKU_URL={props.BACKEND_HEROKU_URL}
            />

        <div id='divider3' style={{textShadow: "5px 5px 8px #FFF"}}  
            className='opacity-100 w-full h-fit flex justify-center items-center p-20'>
                <div className='w-full font-bold text-primary-top text-4vw font-russo opacity-75 text-center leading-tight tracking-wider'>
                Buses' Routes
                </div>
        </div>

        <Routes 
            BACKEND_HEROKU_URL={props.BACKEND_HEROKU_URL}
            />

        <div id='divider4' style={{textShadow: "5px 5px 8px #FFF"}}  
            className='opacity-100 w-full h-fit flex justify-center items-center p-20'>
                <div className='w-full font-bold text-primary-top text-4vw font-russo opacity-75 text-center leading-tight tracking-wider'>
                Trips' Prices
                </div>
        </div>

        <Prices
            BACKEND_HEROKU_URL={props.BACKEND_HEROKU_URL}
            />

        <div id='divider5' style={{textShadow: "5px 5px 8px #FFF"}}  
            className='opacity-100 w-full h-fit flex justify-center items-center p-20'>
                <div className='w-full font-bold text-primary-top text-4vw font-russo opacity-75 text-center leading-tight tracking-wider'>
                </div>
        </div>

        <ContactUs />

    </div>
  )
}

export default HomePage