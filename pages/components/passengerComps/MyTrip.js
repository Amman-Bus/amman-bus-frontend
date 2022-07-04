import React, { useState, useRef } from 'react'
import busData from '../../../public/json/busData.json'


function MyTrip(props) {

    const stationsData = busData.stations

    function downloadQRCode() {
        document.querySelector('#myTrip').scrollIntoView({behavior: 'smooth'})
        const qrcode = document.getElementById('qrcode')

        // TODO: create the QR-Code
         
    }

    return(

        <div id='myTrip'
        className='w-4/5 p-20 rounded-2xl shadow-2xl flex flex-col justify-center items-center'>

                <div className='w-full text-4vw font-russo text-secondary-top pb-8 text-center'>
                    My Plan</div>

                <div id='qrcode' className='w-[50vh] h-[50vh]'></div>
                
                <button 
                onClick={(e) => {
                    e.preventDefault()
                    downloadQRCode()
                }}
                className='w-fit font-bold rounded-2xl m-2 text-white bg-secondary-top px-4 py-2 shadow-md hover:bg-white hover:text-secondary-top transition duration-200 ease-in'>
                    Download the QR-Code
                </button>

                <button 
                onClick={(e) => {
                    e.preventDefault()
                    props.setIsService(false)
                }}
                className='w-fit font-bold rounded-2xl m-2 hover:text-white hover:bg-secondary-top px-4 py-2 shadow-md bg-white text-secondary-top transition duration-200 ease-in'>
                    Back to the main page
                </button>

        </div>

    )
}


export default MyTrip