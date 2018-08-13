import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

class Map extends Component {

  render () {

// Uses react-google-maps to create a Google Map with markers and info windows from the FourSquare API
    const CopenhagenMap = withScriptjs(withGoogleMap((props) =>
       <GoogleMap
          defaultZoom={ 13 }
          center={{ lat: 55.6803344, lng: 12.5847101 }}>

          {this.props.venues.map((venue, index) =>
             <Marker
                key={index}
                id={venue.id}
                name={venue.name}
                position={{lat: venue.location.lat, lng: venue.location.lng}}
                onClick={() => {this.props.toggleWindow(index)}}
                 animation={this.props.selectedLocation == index ? window.google.maps.Animation.DROP: null}>

                  {this.props.selectedLocation === index && (
                    <InfoWindow
                    onCloseClick={props.onToggleOpen}>
                    <div className="info-window">
                       <h4>{venue.name}</h4>
                       <p>{venue.location.formattedAddress[0]}</p>
                       <p>{venue.location.formattedAddress[1]}</p>
                       <p>{venue.location.formattedAddress[2]}</p>
                    </div>
                </InfoWindow>
              )}

            </Marker>
          )}
      </GoogleMap>
  ));

    return (
      <div className="google-map">
         <header>
            <h1>Museums in Copenhagen, Denmark</h1>
         </header>
         <div className="copenhagen-map" role="application">
            <CopenhagenMap
               googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCIMSlxPLSZiskk6up0GprtdKpQzUXthNE&v=3.exp&libraries=geometry,drawing,places"
               loadingElement={<div style={{ height: `100%` }} />}
               containerElement={<div style={{ height: `600px`, width: `100%` }} />}
               mapElement={<div style={{ height: `100%` }} />}
               />
         </div>
         <footer className="footer">
            <p>Created by Karalee Shotola and integrated with FourSquare API</p>
         </footer>
      </div>
    );
  }
}

export default Map;
