import React, { useRef, useState, useMemo } from 'react'
import { 
    GoogleMap, 
    LoadScript, 
    useJsApiLoader,
    Marker,
    Autocomplete, 
    DirectionsRenderer
} from '@react-google-maps/api'


function MapSection () {

    const API_KEY = "AIzaSyCMl98QtnsYKsQ6PbhTowjVYmD0qHwFBVY"

    // const center = useMemo(() => ({lat:30.5852, lng:36.2384, zoom:7}), [])
    const center = useMemo(() => ({lat:31.931641377563746, lng:35.9440551166519, zoom:12}), [])

    const [markers, setMarkers] = useState([])
    const [map, setMap] = useState(/** @type google.maps.Map */ null);
    
    const [selectingOriginPin, setSelectingOriginPin] = useState(false)
    const [selectingDestPin, setSelectingDestPin] = useState(false)

    const [origin, setOrigin] = useState({lat: null, lng: null})
    const [dest, setDest] = useState({lat: null, lng: null})
    const [currentLoc, setCurrentLoc] = useState({lat: null, lng: null});
    
    const [watchId, setWatchId] = useState('')
    const [liveData, setLiveData] = useState({
        latitude: null,
        longitude: null,
        altitude: null,
        accuracy: null,
        speed: null,
        heading: null
    })

    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance , setDistance] = useState('nothing yet')
    const [duration , setDuration] = useState('nothing yet')

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef1 = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destRef1 = useRef()


    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destRef = useRef()
    






    
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: API_KEY,
        libraries: ['places'],
    })

    if (!isLoaded) {
        return <div>Loading...</div>
    }

    function addMarker(latlng, label) {
        const newMarker = {
            label: label,
            lat: latlng.lat(),
            lng: latlng.lng(),
        }
        setMarkers([...markers, newMarker]);
    }

    function clearMarkers() {
        setMarkers([])
        document.getElementById("origin-coords").value = ''
        document.getElementById("dest-coords").value = ''
        setOrigin({lat: null, lng: null})
        setDest({lat: null, lng: null})
        setCurrentLoc({lat: null, lng: null})
    }

    function selectingPinHandler(btnID) {
        if (btnID == 'origin-button') {
            if(selectingDestPin) {
                // alert("Turn off the other button first !")
                // return
                setSelectingDestPin(false)
                var element = document.getElementById("dest-button")
                element.style.backgroundColor = "rgb(167 243 208)"
            }

            if(selectingOriginPin) {
                setSelectingOriginPin(false)
                var element = document.getElementById(btnID)
                element.style.backgroundColor = "rgb(167 243 208)"
            } else {
                setSelectingOriginPin(true)
                var element = document.getElementById(btnID)
                element.style.backgroundColor = '#f00'
            }
        } 
        else {
            if(selectingOriginPin) {
                // alert("Turn off the other button first !")
                // return
                setSelectingOriginPin(false)
                var element = document.getElementById("origin-button")
                element.style.backgroundColor = "rgb(167 243 208)"
            }

            if(selectingDestPin) {
                setSelectingDestPin(false)
                var element = document.getElementById(btnID)
                element.style.backgroundColor = "rgb(167 243 208)"
            } else {
                setSelectingDestPin(true)
                var element = document.getElementById(btnID)
                element.style.backgroundColor = '#f00'
            }
        } 
    }

    function mapClickHandler(latlng) {
        
        if(selectingOriginPin) {
            var element = document.getElementById("origin-coords")
            element.value = latlng.lat() + ', ' + latlng.lng()
            setOrigin({lat: latlng.lat(), lng: latlng.lng()})
            // addMarker(latlng, 'origin')
        } 
        if(selectingDestPin) {
            var element = document.getElementById("dest-coords")
            element.value = latlng.lat() + ', ' + latlng.lng()
            setDest({lat: latlng.lat(), lng: latlng.lng()})
            // addMarker(latlng, 'dest')
        }
    }
    
    function getCurrentLocation() {

        var options = {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 0
        }
        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var mylat = position.coords.latitude
                var mylng = position.coords.longitude
                setCurrentLoc({lat: mylat, lng: mylng})
            }, 
            () => {alert("failed to get the current location")},
            options)
    }

    function liveTracker() {
        navigator.geolocation.watchPosition(
            (position) => {
                var mylat = position.coords.latitude
                var mylng = position.coords.longitude
                var myAltitude = position.coords.altitude
                var myAccuracy = position.coords.accuracy
                var mySpeed = position.coords.speed
                var myHeading = position.coords.heading
                
                setLiveData({
                    latitude: mylat,
                    longitude: mylng,
                    altitude: myAltitude,
                    accuracy: myAccuracy,
                    speed: mySpeed,
                    heading: myHeading
                })

                var div = document.getElementById("liveTrack")
                div.innerHTML = 
                    "My live-tracker: <br>" +
                    "latitude: " + mylat + "<br>" + 
                    "longitude: " + mylng + "<br>" + 
                    "altitude: " + myAltitude + "<br>" + 
                    "accuracy: " + myAccuracy + "<br>" + 
                    "speed: " + mySpeed + "<br>" + 
                    "heading: " + myHeading

            }, 
            () => {alert("failed to get the current location")})
    }

    function stopTracking() {
        navigator.geolocation.clearWatch(watchId)
    }

    async function calcRoute(originField, destField) {
        if (originField.current.value === '' || destField.current.value === '') {
            alert("Please enter places of the origin and destination")
            return
        }

        const directionService = new google.maps.DirectionsService()
        const directionsRequest = {
            origin: originField.current.value,
            destination: destField.current.value,
            travelMode: google.maps.TravelMode.DRIVING,
        }

        const directions = await directionService.route(directionsRequest)

        setDirectionsResponse(directions)
        setDistance(directions.routes[0].legs[0].distance.text) 
        setDuration(directions.routes[0].legs[0].duration.text)


        console.log(directions);
    }


    function clearRoute(originField, destField) {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        originField.current.value = ''
        destField.current.value = ''
        // map.
    }

    liveTracker()


    return (
        <div id="map-sect">

        <div id='map-container'>

        <form id="search" 
        className='w-4/5 text-black font-bold m-2 p-2 grid grid-cols-4 bg-emerald-400 rounded-md'>
            <button 
                id='origin-button'
                className='bg-emerald-200 w-fit m-2 p-3 rounded-md'
                onClick={(e) => {
                    e.preventDefault();
                    selectingPinHandler('origin-button')
                }}
                >Origin</button>

            <button className='bg-emerald-200 w-fit m-2 p-3 rounded-md'
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("origin-coords").value = ''
                    setOrigin({lat: null, lng: null})
                }}
                >clear</button>

            <button 
                id='dest-button'
                className='bg-emerald-200 w-fit m-2 p-3 rounded-md'
                onClick={(e) => {
                    e.preventDefault();
                    selectingPinHandler('dest-button')
                }}
                >Destination</button>

            <button className='bg-emerald-200 w-fit m-2 p-3 rounded-md'
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("dest-coords").value = ''
                    setDest({lat: null, lng: null})
                }}
                >clear</button>

            <input id='origin-coords' type="text" placeholder='enter coordinates'
            ref={originRef1} className='h-fit p-2 m-2 rounded-md col-span-2'/>

            <input id='dest-coords' type="text" placeholder='enter coordinates'
            ref={destRef1} className='h-fit p-2 m-2 rounded-md col-span-2'/>

            <div className='h-fit w-full col-span-2'>
                <Autocomplete>
                    <input id='origin-place' type="text" placeholder='enter place'
                    ref={originRef} className='h-fit p-2 m-2 rounded-md'/>                
                </Autocomplete>
            </div>

            <div className='h-fit w-full col-span-2'>
                <Autocomplete>
                    <input id='dest-place' type="text" placeholder='enter place'
                    ref={destRef} className='h-fit p-2 m-2 rounded-md'/>                
                </Autocomplete>
            </div>

            <button className='bg-emerald-200 m-2 p-3 rounded-md'
                onClick={(e) => {
                    e.preventDefault();
                    calcRoute(originRef1, destRef1)
                }}
                >Calc route</button>

            <div className='m-2 p-3 text-black font-bold'>Distance: <br/>{distance}</div>
            <div className='m-2 p-3 text-black font-bold'>Duration: <br/>{duration}</div>

            <button className='bg-emerald-200 m-2 p-3 rounded-md'
                onClick={(e) => {
                    e.preventDefault();
                    clearRoute(originRef1, destRef1)
                }}
                >Clear route</button>

    

        </form>
    

        <button 
            className='text-black text-xl font-bold m-5 p-2 bg-blue-400'
            onClick={() => { 
                map.panTo({lat: center.lat, lng: center.lng})
                map.setZoom(center.zoom)
            }}
        >Center</button>

        <button 
            className='text-black text-xl font-bold m-5 p-2 bg-blue-400'
            onClick={clearMarkers}
        >Clear marks</button>

        <button 
            className='text-black text-xl font-bold m-5 p-2 bg-blue-400'
            onClick={getCurrentLocation}
        >Current Location</button>


        <GoogleMap
            mapContainerStyle={{width:'80%', height:'600px', "marginBottom":'50px'}}
            center={{lat: center.lat, lng: center.lng}}
            zoom={center.zoom}
            onLoad={map => setMap(map)}
            onClick={(e) => mapClickHandler(e.latLng)}
            options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: true,
                fullscreenControl: true
            }}
        >

            {/* {directionsResponse && <DirectionsRenderer directions={directionsResponse} />} */}
            
            {directionsResponse && <DirectionsRenderer 
                options={{ 
                    directions: directionsResponse
                  }} 
            />}


            <div id='markers'>
                {origin.lat != null || origin.lng != null ?
                    <Marker
                    position={{lat: origin.lat, lng: origin.lng}}
                    label='A'
                    onClick={(e) => alert(e.latLng)}
                    /> :
                    null
                }

                {dest.lat != null || dest.lng != null ?
                    <Marker
                    position={{lat: dest.lat, lng: dest.lng}}
                    label='B'
                    onClick={(e) => alert(e.latLng)}
                    /> :
                    null
                }

                {currentLoc.lat != null || currentLoc.lng != null ?
                    <Marker
                    position={{lat: currentLoc.lat, lng: currentLoc.lng}}
                    label='Me'
                    onClick={(e) => alert(e.latLng)}
                    /> :
                    null
                }

            </div> 

        </GoogleMap>

        <div id='liveTrack' className='text-black font-bold'></div>


        </div>






        </div>
    )
}

export default MapSection

