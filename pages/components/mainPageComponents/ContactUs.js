import React from 'react'


function ContactUs(props) {

    function formSubmitHandler(e) {
        e.preventDefault()
    }

    return (
        <div id='section5' className="w-full flex justify-center items-center -z-20">

            <div className="w-full flex justify-center items-center px-20 py-[30vh]
            bg-[url('/images/mapWallpaper.jpg')]" 
            style={{backgroundSize: "100% 100%"}}> 

                <div className='w-1/2 flex justify-center items-center'>
                    <div id='contactCaption' style={{textShadow: "5px 5px 3px #000"}} 
                    className='text-tratiary-top z-10 text-center font-bold text-4vw font-russo opacity-90 '>
                    We'll be happay to hear from you !</div>
                </div>
                
                <div className='w-1/2 flex justify-center items-center'>            
                    <form onSubmit={(e)=>{formSubmitHandler(e)}} className='opacity-90 w-1/2 z-10 flex flex-col justify-center items-start'>
                        <label style={{textShadow: "5px 5px 3px #000"}} 
                        className='w-full font-bold text-tratiary-top text-2vw pb-1'
                        htmlFor='contactName'>Name:</label>
                        <input className='p-2 rounded-xl w-full font-bold drop-shadow-xl focus:bg-secondary-top focus:text-tratiary-top
                        cursor-pointer hover:scale-110 transition duration-500'
                        type='text' placeholder='Your name' id='contactName' required/>

                        <label style={{textShadow: "5px 5px 3px #000"}}
                        className='w-full font-bold text-tratiary-top text-2vw pb-1'
                        htmlFor='contactEmail'>Email:</label>
                        <input className='p-2 rounded-xl w-full font-bold drop-shadow-xl focus:bg-secondary-top focus:text-tratiary-top
                        cursor-pointer hover:scale-110 transition duration-500' 
                        type='email' placeholder='Your email address' id='contactEmail' required/>

                        <label style={{textShadow: "5px 5px 3px #000"}}
                        className='w-full font-bold text-tratiary-top text-2vw pb-1'
                        htmlFor='contactMessage'>Message</label>
                        <input className='p-2 rounded-xl w-full font-bold drop-shadow-xl break-words focus:bg-secondary-top focus:text-tratiary-top
                        cursor-pointer hover:scale-110 transition duration-500'
                        type='text' placeholder='Your message' id='contactMessage' required/>

                        <input className='w-full mt-5 p-2 rounded-xl font-bold text-2vw bg-secondary-top
                        cursor-pointer hover:scale-110 transition duration-500'
                        type='submit' defaultValue="Send"/>
                    </form>
                </div>
            </div>

      </div>

    )
}


export default ContactUs