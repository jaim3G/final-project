import React, {Component} from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

class GoogleMaps extends Component {
    
    render() {
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={14}
              defaultCenter={{ lat: 40.3922548836379, lng: -3.6972600161683276}}
            >
              <Marker
                position={{ lat: 40.3922548836379, lng: -3.6972600161683276 }} 
              />
            </GoogleMap>
          ));
          
          
        return (
            <div>
                <MapWithAMarker
            googleMapURL={process.env.REACT_APP_API_KEY}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
            </div>
        )
    }
}

export default GoogleMaps
