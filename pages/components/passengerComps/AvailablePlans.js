import React, { useState } from 'react'
import { 
    GoogleMap, 
    Marker,
} from '@react-google-maps/api'
import axios from 'axios'


function AvailablePlans(props) {

    const [center, setCenter] = useState({lat:31.952936314023113, lng:35.911021633699036, zoom:10})
    const [markers, setMarkers] = useState([])
    const [selectedRoute, setSelectedRoute] = useState({})
    const [selectedStation, setSelectedStation] = useState({})

    const options={zoomControl: false, streetViewControl: false, mapTypeControl: false, fullscreenControl: false}
    const icon = './icons/busStop.ico'

    React.useEffect(() => {
    }, [])

    async function fetchData() {
        if(Object.keys(props.selectedPickUpPin).length === 0 || 
            Object.keys(props.selectedDropOffPin).length === 0) {
                alert("Please select a pick-up and drop-off station first")
                return}

        try {
            await axios.get(
                props.BACKEND_HEROKU_URL+"/api/find/" + 
                props.selectedPickUpPin.id + '/' +
                props.selectedDropOffPin.id 
            ).then(res => {
                try {
                    setSelectedRoute({
                        "path": res.data.paths[0].path,
                        "distance": res.data.paths[0].distance,
                        "route": {
                            "route_name": res.data.paths[0].routes[0]['route_name'],
                            "station_stops": res.data.paths[0].routes[0]['station_stops']
                        }
                    })                    
                } catch (error) {
                    alert("No routes found")
                    console.log(error.message);
                }
        
                setMarkers(selectedRoute['route']['station_stops'])
            }).catch(err => {
                console.log(err);
            })
            
        } catch (error) {
            console.error(error.message);
        } 
    }

    function submissiomHandler(e) {
        if(Object.keys(props.selectedPickUpPin).length === 0 || 
            Object.keys(props.selectedDropOffPin).length === 0) {
                alert("Please select a pick-up and drop-off station first")
                return}

        if(Object.keys(selectedStation).length === 0) {            
            alert("Please select one of the displayed drop-off stations first")
            return}
    
        e.preventDefault()
        document.querySelector('#myTrip').scrollIntoView({behavior: 'smooth'})

        const currentUser = JSON.parse(localStorage.getItem('currentUser'))

        const name = currentUser.username
        const from = props.selectedPickUpPin.name
        const to = selectedStation.name

        const qrData = [name, from, to].map(item=>item.toString()).join(', ')
        props.setValue(qrData)
    }


    return(

        <div id='availablePlans'
        className='w-4/5 p-20 rounded-2xl shadow-2xl flex flex-col justify-center items-center'>

                <div className='w-full text-4vw font-russo text-secondary-top pb-8 text-center'>
                    Confirm your stop
                </div>

                <button 
                onClick={(e) => {
                    e.preventDefault()
                    fetchData()
                }} 
                className='w-fit font-bold rounded-2xl m-2 text-white bg-secondary-top px-4 py-2 shadow-md hover:bg-white hover:text-secondary-top transition duration-200 ease-in'>
                    Display all stops in your route
                </button>

                <div id='busInfo' className='w-full grid grid-cols-3 gap-3'>

                    <div className='my-1 font-bold text-[80%] bg-secondary-top rounded-lg p-2 w-full text-center text-white'>
                        Station name:
                    </div>

                    <div className='col-span-2 my-1 font-bold text-[100%] text-secondary-top rounded-lg p-2 w-full text-center'>
                        {selectedStation.name}
                    </div>

                    <div className='my-1 font-bold text-[80%] bg-secondary-top rounded-lg p-2 w-full text-center text-white'>
                        Needed distance: 
                    </div>

                    <div className='col-span-2 my-1 font-bold text-[100%] text-secondary-top rounded-lg p-2 w-full text-center'>
                        {selectedRoute['distance']}
                    </div>
                    

                </div>

                <div id='availableBusesTracker' style={{height: "50vh", width: "100%"}}
                className='my-5 border-2 border-secondary-top rounded-3xl flex justify-center items-center overflow-hidden'>

                    <GoogleMap
                        mapContainerStyle={{width:'100%', height:'100%'}}
                        center={{lat: center.lat, lng: center.lng}}
                        zoom={center.zoom}
                        options={options}
                        >
                        
                            <div>
                                {markers.map(station => 
                                    <Marker
                                        position={{lat: station.station.lat, lng: station.station.lon}}
                                        onClick={()=>{
                                            setSelectedStation(station.station)
                                            setCenter({lat: station.station.lat, lng: station.station.lon, zoom:15})
                                            setMarkers([station])
                                            }}    
                                        icon={{
                                            url: (icon),
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
                    Confirm Trip
                </button>

        </div>

    )
}


export default AvailablePlans