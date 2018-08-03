import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import Location from './Location';
import LocationMarker from './LocationMarker';

class Map extends Component {
  render () {

    const CopenhagenMap = withScriptjs(withGoogleMap((props) =>
         <GoogleMap
            defaultZoom={ 13 }
            center={{ lat: 55.6760968, lng: 12.5683372 }}>
         </GoogleMap>
      ));

    return (
      <div className="google-map">
         <div className="map-title">
            <h1>Copenhagen, Denmark</h1>
         </div>
         <div className="copenhagen-map">
            <CopenhagenMap
               googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCIMSlxPLSZiskk6up0GprtdKpQzUXthNE&v=3.exp&libraries=geometry,drawing,places`}
               loadingElement={<div style={{ height: `100%` }} />}
               containerElement={<div style={{ height: `600px`, width: `100%` }} />}
               mapElement={<div style={{ height: `100%` }} />}
               locations={this.props.locations}
            />
         </div>
      </div>
    );
  }
}

export default Map;
