import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import { locations } from './Location';

class Map extends Component {

  state = {
    locations: locations
  }

  render () {

    const CopenhagenMap = withScriptjs(withGoogleMap((props) =>
       <GoogleMap
          defaultZoom={ 14 }
          center={{ lat: 55.679452, lng: 12.580216999999948 }}>

          {this.props.venues.map((venue, index) =>
             <Marker
                key={location.index}
                id={location.id}
                title={location.title}
                position={{lat: location.location.lat, lng: location.location.lng}}
                onClick={this.props.openWindow}>
                  <InfoWindow
                  onCloseClick={this.props.closeWindow}>
                  <div className="info-window">
                     <h4>{location.title}</h4>
                     <p>{venue.location.formattedAddress}</p>
                  </div>
              </InfoWindow>
            )}



            </Marker>
          )}
      </GoogleMap>
  ));

    return (
      <div className="google-map">
         <div className="map-title">
            <h1>Copenhagen, Denmark</h1>
         </div>
         <div className="copenhagen-map">
            <CopenhagenMap
               googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCIMSlxPLSZiskk6up0GprtdKpQzUXthNE&v=3.exp&libraries=geometry,drawing,places"
               loadingElement={<div style={{ height: `100%` }} />}
               containerElement={<div style={{ height: `600px`, width: `100%` }} />}
               mapElement={<div style={{ height: `100%` }} />}
               />
         </div>
      </div>
    );
  }
}

export default Map;
