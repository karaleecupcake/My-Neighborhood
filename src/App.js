import React, { Component } from 'react';
import Map from './Map';
import List from './List';
import './App.css';

class App extends Component {

  state = {
    venues: [],
    selectedVenue: {}
  }

// Fetches data for museums from FourSquare and handles errors
  componentDidMount() {
    fetch('https://api.foursquare.com/v2/venues/search?ll=55.6760968,12.5683372&intent=browse&radius=10000&query=museum&client_id=0V25KPKE3QMUS3BPCJBUABV5KJMFFD33UQGDFOEGHTJFQF2J&client_secret=332MWGWQZIATESF1GIGOSQX2KI2NRZZRPIPKHJPZJARUN3VC&v=20180802')
    .then(response => response.json())
    .then((data) => {
      this.setState({
        venues: data.response.venues
      })
    })
    .catch((error) => {
      alert('Error getting data from the FourSquare API. Check the key.')
      console.log('Error getting data from the FourSquare API. Check the key.')
    })

// Handles errors for Google Maps
    window.gm_authFailure = () => {
      alert('Error loading Google Maps. Check the API key.')
    }
  }

// Toogles info window when venue is clicked
  toggleWindow = (selectedVenue) => {
    this.setState({
      selectedLocation: selectedVenue
    })
  }

  render() {

    return (
      <div className="app" role="main">
        <Map
           venues = {this.state.venues}
           selectedLocation = {this.state.selectedLocation}
           toggleWindow = {this.toggleWindow}
        />
        <List
           venues = {this.state.venues}
           toggleWindow = {this.toggleWindow}
        />
      </div>
    );
  }
}

export default App;
