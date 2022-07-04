import React, { useState, useRef } from 'react'
import busData from '../../../public/json/busData.json'


function MyTrip(props) {

    const stationsData = busData.stations

    return(

        <div id='availablePlans'
        className='w-4/5 p-20 rounded-2xl shadow-2xl flex flex-col justify-center items-center'>

                <div className='w-full text-4vw font-russo text-secondary-top pb-8 text-center'>
                    My Plan</div>
                
                <button className='w-fit font-bold rounded-2xl m-2 text-white bg-secondary-top px-4 py-2 shadow-md hover:bg-white hover:text-secondary-top transition duration-200 ease-in'>
                    Confirm payment
                </button>

        </div>

    )
}


export default MyTrip