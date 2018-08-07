import React, { Component } from 'react';
import Map from './Map';
//import List from './List';
import './App.css';

class App extends Component {

  state = {
    locations: [],
    selectedLocation: null,
    venues: [],
    selectedVenue: null,
  }

  componentDidMount() {
    fetch('https://api.foursquare.com/v2/venues/search?ll=55.679452,12.580216999999948&intent=browse&radius=10000&query=museum&client_id=0V25KPKE3QMUS3BPCJBUABV5KJMFFD33UQGDFOEGHTJFQF2J&client_secret=332MWGWQZIATESF1GIGOSQX2KI2NRZZRPIPKHJPZJARUN3VC&v=20180802')
    .then(response => response.json())
    .then((response) => {
      this.setState({
        venues: response.response.venues
      })
    })
    .catch((error) => {
      alert('Error getting data from the FourSquare API')
      console.log('Error getting data from the FourSquare API')
    })
  }

  openWindow = (selectedVenue) => {
    this.setState({
      selectedVenue: selectedVenue
    })
  }

  closeWindow = () => {
    this.setState({
      selectedVenue: null
    })
  }

  render() {

    return (
      <div className="App">
        <Map
           locations = {this.state.locations}
           selectedLocation = {this.state.selectedLocation}
           venues = {this.state.venues}
           selectedVenue = {this.state.selectedVenue}
           openWindow = {this.openWindow}
           closeWindow = {this.closeWindow}
        />
      </div>
    );
  }
}

export default App;
