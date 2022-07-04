import React, { useState, useRef } from 'react'
import { 
    GoogleMap, 
    LoadScript, 
    useJsApiLoader,
    Marker,
    Autocomplete, 
    DirectionsRenderer
} from '@react-google-maps/api'
import busData from '../../../public/json/busData.json'


function AvailablePlans(props) {

    const [center, setCenter] = useState({lat:31.952936314023113, lng:35.911021633699036, zoom:10})
    const [markers, setMarkers] = useState([])
    const [map, setMap] = useState(/** @type google.maps.Map */ null)

    const busesData = busData.buses
    const [selectedBus, setSelectedBus] = useState(busesData[0])

    const { isLoaded } = useJsApiLoader({googleMapsApiKey: props.API_KEY})
    if (!isLoaded) {return <div>Loading...</div>}

    function pinClickHandler(bus) {
        setSelectedBus(bus)
    }

    function displayAllBuses() {
        setMarkers(busesData)
    }

    function submissiomHandler(e) {
        e.preventDefault()
        document.querySelector('#myTrip').scrollIntoView({behavior: 'smooth'})
        const qrcode = document.getElementById('qrcode')

        // TODO: create the QR-Code
         
    }


    return(

        <div id='availablePlans'
        className='w-4/5 p-20 rounded-2xl shadow-2xl flex flex-col justify-center items-center'>

                <div className='w-full text-4vw font-russo text-secondary-top pb-8 text-center'>
                    Available Buses
                </div>

                <div id='busInfo' className='w-full grid grid-cols-3 gap-3'>

                    <div className='my-1 font-bold text-[80%] bg-secondary-top rounded-lg p-2 w-full text-center text-white'>
                        BusID: {selectedBus["BusID"]}
                    </div>

                    <div className='my-1 font-bold text-[80%] bg-secondary-top rounded-lg p-2 w-full text-center text-white'>
                        RouteID: {selectedBus["RouteID"]}
                    </div>

                    <div className='my-1 font-bold text-[80%] bg-secondary-top rounded-lg p-2 w-full text-center text-white'>
                        Departure: {selectedBus["Departure"]}
                    </div>

                    <div className='my-1 font-bold text-[80%] bg-secondary-top rounded-lg p-2 w-full text-center text-white'>
                        Arrival: {selectedBus["Arrival"]}
                    </div>

                    <div className='my-1 font-bold text-[80%] bg-secondary-top rounded-lg p-2 w-full text-center text-white'>
                        Capacity: {selectedBus["Capacity"]}
                    </div>

                    <div className='my-1 font-bold text-[80%] bg-secondary-top rounded-lg p-2 w-full text-center text-white'>
                        Ratings: {
                            ((selectedBus["Ratings"].reduce((a,b)=>a+b))/selectedBus["Ratings"].length).toFixed(2)
                        }
                    </div>

                </div>

                <div id='availableBusesTracker' style={{height: "50vh", width: "100%"}}
                className='my-5 border-2 border-secondary-top rounded-3xl flex justify-center items-center overflow-hidden'>
                    <GoogleMap
                        mapContainerStyle={{width:'100%', height:'100%'}}
                        center={{lat: center.lat, lng: center.lng}}
                        zoom={center.zoom}
                        onLoad={map => {
                            setMap(map)
                            displayAllBuses()
                        }}
                        options={{
                            zoomControl: false,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false
                        }}
                    >
                    
                        <div id='markers'>
                            {markers.map(bus => 
                                <Marker
                                    position={{lat: bus["Location"].lat, lng: bus["Location"].lng}}
                                    onClick={e => pinClickHandler(bus)}
                                    icon={{
                                        url: ('./icons/busStop.ico'),
                                        scaledSize: new google.maps.Size(70,70)
                                    }}
                                />
                            )}

                        </div> 

                    </GoogleMap>
                </div>
                
                <button 
                onClick={(e) => {
                    e.preventDefault()
                    submissiomHandler(e)
                }} 
                className='w-fit font-bold rounded-2xl m-2 text-white bg-secondary-top px-4 py-2 shadow-md hover:bg-white hover:text-secondary-top transition duration-200 ease-in'>
                    Confirm payment
                </button>

        </div>

    )
}


export default AvailablePlans