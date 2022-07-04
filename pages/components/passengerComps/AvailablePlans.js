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

    const [selectingPickUpPin, setSelectingPickUpPin] = useState(false)
    const [selectingDropOffPin, setSelectingDropOffPin] = useState(false)

    const stationsData = busData.stations

    const { isLoaded } = useJsApiLoader({googleMapsApiKey: props.API_KEY})
    if (!isLoaded) {return <div>Loading...</div>}

    function selectingPinHandler(btnID) {
        if (btnID == 'pickUp-button') {
            if(selectingDropOffPin) {
                setSelectingDropOffPin(false)
                const element = document.getElementById("dropOff-button")
                element.classList.remove(activeColor)
                element.classList.remove(activeBGColor)
                element.classList.add(baseColor)
                element.classList.add(baseBGColor)
            }

            if(selectingPickUpPin) {
                setSelectingPickUpPin(false)
                const element = document.getElementById(btnID)
                element.classList.remove(activeColor)
                element.classList.remove(activeBGColor)
                element.classList.add(baseColor)
                element.classList.add(baseBGColor)
            } else {
                setSelectingPickUpPin(true)
                const element = document.getElementById(btnID)
                element.classList.remove(baseColor)
                element.classList.remove(baseBGColor)
                element.classList.add(activeColor)
                element.classList.add(activeBGColor)
            }
        } 
        else {
            if(selectingPickUpPin) {
                setSelectingPickUpPin(false)
                const element = document.getElementById("pickUp-button")
                element.classList.remove(activeColor)
                element.classList.remove(activeBGColor)
                element.classList.add(baseColor)
                element.classList.add(baseBGColor)
            }

            if(selectingDropOffPin) {
                setSelectingDropOffPin(false)
                const element = document.getElementById(btnID)
                element.classList.remove(activeColor)
                element.classList.remove(activeBGColor)
                element.classList.add(baseColor)
                element.classList.add(baseBGColor)
            } else {
                setSelectingDropOffPin(true)
                const element = document.getElementById(btnID)
                element.classList.remove(baseColor)
                element.classList.remove(baseBGColor)
                element.classList.add(activeColor)
                element.classList.add(activeBGColor)
            }
        } 
    }

    function pinClickHandler(marker) {
        
    }

    // function displayAllStations() {
    //     const allMarkers = stationsData.map(obj => {
    //         console.log(obj.Name)
    //         return {
    //             "lat": obj['Location'].lat, 
    //             "lng": obj['Location'].lng, 
    //             "name": obj['Name']}
    //         })
    //     setMarkers(allMarkers)
    // }

    return(

        <div id='availablePlans'
        className='w-4/5 p-20 rounded-2xl shadow-2xl flex flex-col justify-center items-center'>

                <div className='w-full text-4vw font-russo text-secondary-top pb-8 text-center'>
                    Available Buses</div>

                <div id='availableBusesTracker' style={{height: "50vh", width: "100%"}}
                className='my-5 border-2 border-secondary-top rounded-3xl flex justify-center items-center overflow-hidden'>
                    <GoogleMap
                        mapContainerStyle={{width:'100%', height:'100%'}}
                        center={{lat: center.lat, lng: center.lng}}
                        zoom={center.zoom}
                        onLoad={map => {
                            setMap(map)
                            // displayAllStations()
                        }}
                        options={{
                            zoomControl: false,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false
                        }}
                    >
                    
                        <div id='markers'>
                            {markers.map(marker => 
                                <Marker
                                    position={{lat: marker.lat, lng: marker.lng}}
                                    onClick={(e) => pinClickHandler(marker)}
                                    icon={{
                                        url: ('./icons/busStop.ico'),
                                        scaledSize: new google.maps.Size(70,70)
                                    }}
                                />
                            )}

                        </div> 

                    </GoogleMap>
                </div>
                
                <button className='w-fit font-bold rounded-2xl m-2 text-white bg-secondary-top px-4 py-2 shadow-md hover:bg-white hover:text-secondary-top transition duration-200 ease-in'>
                    Confirm the bus
                </button>

        </div>

    )
}


export default AvailablePlans