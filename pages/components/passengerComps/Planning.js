import React, { useState, useRef } from 'react'
import { 
    GoogleMap, 
    Marker,
} from '@react-google-maps/api'


function Planning(props) {

    const [center, setCenter] = useState({lat:31.952936314023113, lng:35.911021633699036, zoom:10})

    const [selectingPickUpPin, setSelectingPickUpPin] = useState(false)
    const [selectingDropOffPin, setSelectingDropOffPin] = useState(false)

    const pickUpStation = useRef()
    const dropOffStation = useRef()

    const baseColor = "text-secondary-top"
    const baseBGColor = "bg-white"
    const activeColor = "text-white"
    const activeBGColor = "bg-secondary-top"

    const options={zoomControl: false, streetViewControl: false, mapTypeControl: false, fullscreenControl: false}
    const icon = './icons/busStop.ico'

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
        if (selectingPickUpPin) {
            props.setSelectedPickUpPin(marker)
            setCenter({lat: marker.lat, lng: marker.lon, zoom:15})
            document.getElementById("pickUpStationField").value = marker.name
        } else if (selectingDropOffPin) {
            props.setSelectedDropOffPin(marker)   
            setCenter({lat: marker.lat, lng: marker.lon, zoom:15})
            document.getElementById("dropOffStationField").value = marker.name
        } else {
            alert("Please select a pin first (click on one of the above buttons)")
        }
    }

    return(

        <div id='planning'
        className='w-4/5 p-20 rounded-2xl shadow-2xl flex flex-col justify-center items-center'>

            <div className='w-full text-4vw font-russo text-secondary-top pb-8 text-center'>
                Plan Your Trip</div>

            <form  
            className='flex flex-col items-center justify-center w-full'>

                <label className='rounded-2xl px-2 py-1 text-secondary-top my-3 font-bold'>
                    Select your pick-up and drop-off stations by activating the targeted button above then click on the station on the map 
                </label>

                <div className='w-full flex justify-evenly items-center'>
                    <label htmlFor="pickUpStationField"
                    className='rounded-2xl px-2 py-1 text-secondary-top m-1 font-bold'>
                        Select your pick-up station
                    </label>

                    <button id='pickUp-button'
                    onClick={(e) => {
                        e.preventDefault()
                        selectingPinHandler('pickUp-button')
                    }}
                    className='w-fit font-bold rounded-2xl m-2 px-4 py-2 shadow-md bg-white text-secondary-top transition duration-200 ease-in hover:scale-110'>
                        Select Pick-up
                    </button>
                </div>

                <input required id='pickUpStationField' type="text" placeholder='pick-up station' ref={pickUpStation}
                className='w-full rounded-2xl px-2 py-1 my-2 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>

                <div className='w-full flex justify-evenly items-center'>
                    <label htmlFor="dropOffStationField"
                    className='rounded-2xl px-2 py-1 text-secondary-top m-1 font-bold'>
                        Select your drop-off station
                    </label>

                    <button id='dropOff-button'
                    onClick={(e) => {
                        e.preventDefault()
                        selectingPinHandler('dropOff-button')
                    }} 
                    className='w-fit font-bold rounded-2xl m-2 px-4 py-2 shadow-md bg-white text-secondary-top transition duration-200 ease-in hover:scale-110'>
                        Select Drop-off
                    </button>
                </div>

                <input required id='dropOffStationField' type="text" placeholder='drop-off station' ref={dropOffStation}
                className='w-full rounded-2xl px-2 py-1 my-2 border-[1px] focus:border-secondary-top m-1 focus:shadow-md focus:outline-none focus:ring-0'/>

                <div id='stationsMapSelector' style={{height: "50vh", width: "100%"}}
                className='my-5 border-2 border-secondary-top rounded-3xl flex justify-center items-center overflow-hidden'>

                    <GoogleMap
                        mapContainerStyle={{width:'100%', height:'100%'}}
                        center={{lat: center.lat, lng: center.lng}}
                        zoom={center.zoom}
                        options={options}
                        >
                        
                            <div>
                                {
                                    Array.isArray(props.planningData) ?
                                        props.planningData.map(station => 
                                            <Marker
                                                position={{lat: station.lat, lng: station.lon}}
                                                onClick={()=>{pinClickHandler(station)}}    
                                                icon={{
                                                    url: (icon),
                                                    scaledSize: new google.maps.Size(70,70)
                                                }}
                                            />
                                        )
                                    :
                                    <div>Error loding data</div>
                                }
                            </div>

                        </GoogleMap>

                </div>
                
                <button onClick={(e)=>{
                    e.preventDefault()
                    if (typeof props.selectedPickUpPin === 'object' && props.selectedPickUpPin !== null
                        && typeof props.selectedDropOffPin === 'object' && props.selectedDropOffPin !== null) {
                        if(Object.keys(props.selectedPickUpPin).length === 0 || 
                            Object.keys(props.selectedDropOffPin).length === 0) {
                            alert("Please select a pick-up and drop-off station first")
                        } else {
                            document.querySelector('#availablePlans').scrollIntoView({behavior: 'smooth'})
                        } 
                    } else {
                        alert("Error in the type of the object")
                        return
                    }
                    
                }}
                className='w-fit font-bold rounded-2xl m-2 text-white bg-secondary-top px-4 py-2 shadow-md hover:bg-white hover:text-secondary-top transition duration-200 ease-in'>
                    Create plan
                </button>

            </form>

        </div>

    )
}


export default Planning