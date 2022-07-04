import React from "react"
import { 
    GoogleMap, 
    Marker,
} from '@react-google-maps/api'


function GlobalMap(props) {
    return (
            <GoogleMap
                mapContainerStyle={{width:'100%', height:'100%'}}
                center={{lat: props.center.lat, lng: props.center.lng}}
                zoom={props.center.zoom}
                onLoad={()=>{props.onLoadFunction(props.busesData)}}
                options={props.options}
            >
            
                <div>
                    {props.markers.map(bus => 
                        <Marker
                            position={{lat: bus["Location"].lat, lng: bus["Location"].lng}}
                            onClick={()=>{props.pinClickHandler(bus)}}    
                            icon={{
                                url: (props.icon),
                                scaledSize: new google.maps.Size(70,70)
                            }}
                        />
                    )}
                </div>

            </GoogleMap>
    )
}

export default GlobalMap