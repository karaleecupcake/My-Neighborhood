import React, { Component } from 'react';
import { Marker } from 'react-google-maps';

class LocationMarker extends Component {
  render() {
    return(
      <Marker
         position={this.props.locations}>
      </Marker>
    )
  }
}

export default LocationMarker;
