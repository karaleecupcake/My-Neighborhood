import React, { Component } from 'react';
import { locations } from './Location';

class List extends Component {

  state = {
    locations: locations,
  }

  const locationList = {this.state.locations.map(location => (
    <li>
  )

  render () {
    return (
      <li>
      </li>

    );
  }
}

export default List;
