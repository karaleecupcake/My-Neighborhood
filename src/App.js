import React, { Component } from 'react';
import Map from './Map';
//import List from './List';
import './App.css';

class App extends Component {

  state = {
    locations: [],
    markers: []
  }

  render() {

    return (
      <div className="App">
        <Map
           locations={this.state.locations}
           markers={this.state.markers}
        />
      </div>
    );
  }
}

export default App;
