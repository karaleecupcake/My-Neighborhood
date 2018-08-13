import React, { Component } from 'react';

class List extends Component {
  state = {
    query: '',
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    this.updateQuery(query)
  }

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
      <div className="search">
         <input
            type="text"
            placeholder="Search for museum"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            role="search"
         />
         <div className="museumList">
            <ul>
               {venueList}
            </ul>
         </div>
      </div>
    );
  }
}

export default List;
