import React, { useState, useRef } from 'react'
import Planning from '../passengerComps/Planning'
import AvailablePlans from '../passengerComps/AvailablePlans'
import MyTrip from '../passengerComps/MyTrip'
import QRCode from '../passengerComps/QRCode'


function Passenger(props) {

    const [selectedPickUpPin, setSelectedPickUpPin] = useState([null, null, null])
    const [selectedDropOffPin, setSelectedDropOffPin] = useState([null, null, null])

    return(
        <div className="w-full py-28 flex flex-col justify-center items-center">

            <Planning 
                API_KEY={props.API_KEY} 
                selectedPickUpPin={selectedPickUpPin}
                setSelectedPickUpPin={setSelectedPickUpPin}
                selectedDropOffPin={selectedDropOffPin}
                setSelectedDropOffPin={setSelectedDropOffPin}
                />

            <img className='my-10 w-[10vw] h-[10vw] animate-arrows' src=".\images\arrow.png"/>
            
            <AvailablePlans
                API_KEY={props.API_KEY} 
                selectedPickUpPin={selectedPickUpPin}
                setSelectedPickUpPin={setSelectedPickUpPin}
                selectedDropOffPin={selectedDropOffPin}
                setSelectedDropOffPin={setSelectedDropOffPin}
                />

            <img className='my-10 w-[10vw] h-[10vw] animate-arrows' src=".\images\arrow.png"/>

            <MyTrip
                selectedPickUpPin={selectedPickUpPin}
                setSelectedPickUpPin={setSelectedPickUpPin}
                selectedDropOffPin={selectedDropOffPin}
                setSelectedDropOffPin={setSelectedDropOffPin}
                />

            <img className='my-10 w-[10vw] h-[10vw] animate-arrows' src=".\images\arrow.png"/>

            <QRCode
                selectedPickUpPin={selectedPickUpPin}
                setSelectedPickUpPin={setSelectedPickUpPin}
                selectedDropOffPin={selectedDropOffPin}
                setSelectedDropOffPin={setSelectedDropOffPin}
                />

        </div>
    )
}


export default Passenger