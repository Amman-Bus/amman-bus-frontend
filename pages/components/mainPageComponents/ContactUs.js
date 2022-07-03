import React from 'react'


function ContactUs(props) {

    function formSubmitHandler(e) {
        e.preventDefault()
    }

    return (
        <div id='section5' className="w-full f-fit flex justify-center items-center -z-20 p-20">

            <img src='./images/mapWallpaper.jpg' className='absolute h-5/6 w-full z-0 brightness-50'/>

            <div className='w-1/2 flex justify-center items-center'>
                <div id='contactCaption' className='z-10 text-center font-bold text-tratiary-top text-4vw font-russo opacity-90 '>
                We'll be happay to hear from you !</div>
            </div>
            
            <div className='w-1/2 flex justify-center items-center'>            
                <form onSubmit={(e)=>{formSubmitHandler(e)}} className='opacity-90 w-1/2 z-10 flex flex-col justify-center items-start'>
                    <label className='w-full font-bold text-tratiary-top text-2vw pb-1'
                    htmlFor='contactName'>Name:</label>
                    <input className='p-2 rounded-xl w-full font-bold drop-shadow-xl focus:bg-secondary-top focus:text-tratiary-top
                    cursor-pointer hover:scale-110 transition duration-500'
                    type='text' placeholder='Your name' id='contactName' required/>

                    <label className='w-full font-bold text-tratiary-top text-2vw pb-1'
                    htmlFor='contactEmail'>Email:</label>
                    <input className='p-2 rounded-xl w-full font-bold drop-shadow-xl focus:bg-secondary-top focus:text-tratiary-top
                    cursor-pointer hover:scale-110 transition duration-500' 
                    type='email' placeholder='Your email address' id='contactEmail' required/>

                    <label className='w-full font-bold text-tratiary-top text-2vw pb-1'
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

    )
}


export default ContactUs