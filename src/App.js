import React, { Component } from 'react';
import Map from './Map';
//import List from './List';
import './App.css';

class App extends Component {

  state = {
    locations: [],
    venues: [],
    selectedVenue: {},
    isOpen: false,
  }

  componentDidMount() {
    fetch('https://api.foursquare.com/v2/venues/search?ll=55.679452,12.580216999999948&intent=browse&radius=10000&query=museum&client_id=0V25KPKE3QMUS3BPCJBUABV5KJMFFD33UQGDFOEGHTJFQF2J&client_secret=332MWGWQZIATESF1GIGOSQX2KI2NRZZRPIPKHJPZJARUN3VC&v=20180802')
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

    window.gm_authFailure = () => {
      alert('Error loading Google Maps. Check the API key.')
    }
  }

  openWindow = (selectedVenue) => {
    this.setState({
      selectedVenue: selectedVenue,
      isOpen: true
    })
  }

  closeWindow = () => {
    this.setState({
      selectedVenue: {},
      isOpen: false
    })
  }

  render() {

    return (
      <div className="App" role="main">
        <Map
           locations = {this.state.locations}
           venues = {this.state.venues}
           address = {this.state.address}
           selectedVenue = {this.state.selectedVenue}
           openWindow = {this.openWindow}
           closeWindow = {this.closeWindow}
        />
      </div>
    );
  }
}

export default App;
