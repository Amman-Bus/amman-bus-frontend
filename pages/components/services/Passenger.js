import React, { useState } from 'react'
import Planning from '../passengerComps/Planning'
import AvailablePlans from '../passengerComps/AvailablePlans'
import MyTrip from '../passengerComps/MyTrip'


function Passenger(props) {

    const [selectedPickUpPin, setSelectedPickUpPin] = useState([null, null, null])
    const [selectedDropOffPin, setSelectedDropOffPin] = useState([null, null, null])
    const [selectedBusObject, setSelectedBusObject] = useState(null)

    return(
        <div className="w-full py-28 flex flex-col justify-center items-center">

            <Planning 
                API_KEY={props.API_KEY} 
                BACKEND_HEROKU_URL={props.BACKEND_HEROKU_URL}
                selectedPickUpPin={selectedPickUpPin}
                setSelectedPickUpPin={setSelectedPickUpPin}
                selectedDropOffPin={selectedDropOffPin}
                setSelectedDropOffPin={setSelectedDropOffPin}
                />

            <img className='my-10 w-[10vw] h-[10vw] animate-arrows' src=".\images\arrow.png"/>
            
            <AvailablePlans
                API_KEY={props.API_KEY} 
                BACKEND_HEROKU_URL={props.BACKEND_HEROKU_URL}
                selectedPickUpPin={selectedPickUpPin}
                setSelectedPickUpPin={setSelectedPickUpPin}
                selectedDropOffPin={selectedDropOffPin}
                setSelectedDropOffPin={setSelectedDropOffPin}
                selectedBusObject={selectedBusObject}
                setSelectedBusObject={setSelectedBusObject}
                />

            <img className='my-10 w-[10vw] h-[10vw] animate-arrows' src=".\images\arrow.png"/>

            <MyTrip
                BACKEND_HEROKU_URL={props.BACKEND_HEROKU_URL}
                selectedPickUpPin={selectedPickUpPin}
                setSelectedPickUpPin={setSelectedPickUpPin}
                selectedDropOffPin={selectedDropOffPin}
                setSelectedDropOffPin={setSelectedDropOffPin}
                selectedBusObject={selectedBusObject}
                setSelectedBusObject={setSelectedBusObject}
                userType={props.userType}
                setUserType={props.setUserType}
                isService={props.isService} 
                setIsService={props.setIsService}
                />

        </div>
    )
}


export default Passenger