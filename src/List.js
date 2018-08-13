import React, { Component } from 'react';

class List extends Component {


  render () {

    const venueList = this.props.venues.map((venue, index) => (
      <li className= "museum"
         key={index}
         onClick={() => {this.props.toggleWindow(index)}}
         onKeyPress={() => {this.props.toggleWindow(index)}}
         >
      {venue.name}
      </li>
    ))

    return (
      <ul className="museumList">
      {venueList}
      </ul>
    );
  }
}

export default List;
