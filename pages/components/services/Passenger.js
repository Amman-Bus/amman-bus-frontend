import React, { useState } from 'react'
import Planning from '../passengerComps/Planning'
import AvailablePlans from '../passengerComps/AvailablePlans'
import MyTrip from '../passengerComps/MyTrip'
import busData from '../../../public/json/busData.json'
import axios from "axios"


function Passenger(props) {

    const [planningData, setPlanningData] = useState([])
    const [busesData, setBusesData] = useState([])

    const [selectedPickUpPin, setSelectedPickUpPin] = useState({})
    const [selectedDropOffPin, setSelectedDropOffPin] = useState({})

    const [value, setValue] = useState('');
    const [size, setSize] = useState(256);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: response} = await axios.get(props.BACKEND_HEROKU_URL + "/api/stations/")
                setPlanningData(response)
            } catch(error) {
                console.error(error.message)
            }
        }
        fetchData()

    }, []);

    return(
        <div className="w-full py-28 flex flex-col justify-center items-center">

            <Planning 
                API_KEY={props.API_KEY} 
                BACKEND_HEROKU_URL={props.BACKEND_HEROKU_URL}
                selectedPickUpPin={selectedPickUpPin}
                selectedDropOffPin={selectedDropOffPin}
                setSelectedPickUpPin={setSelectedPickUpPin}
                setSelectedDropOffPin={setSelectedDropOffPin}
                planningData={planningData}
                />

            <img className='my-10 w-[10vw] h-[10vw] animate-arrows' src=".\images\arrow.png"/>
            
            <AvailablePlans
                API_KEY={props.API_KEY} 
                BACKEND_HEROKU_URL={props.BACKEND_HEROKU_URL}
                setValue={setValue}
                value={value}
                selectedPickUpPin={selectedPickUpPin}
                selectedDropOffPin={selectedDropOffPin}
                busesData={busesData}
                setBusesData={setBusesData}
                />

            <img className='my-10 w-[10vw] h-[10vw] animate-arrows' src=".\images\arrow.png"/>

            <MyTrip
                BACKEND_HEROKU_URL={props.BACKEND_HEROKU_URL}
                setIsService={props.setIsService}
                value={value}
                size={size}
                />

        </div>
    )
}


export default Passenger