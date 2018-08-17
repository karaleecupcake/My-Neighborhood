import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

class List extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    this.props.updateFilteredVenues(this.filterQuery(this.props.venues, query))
  }

  filterQuery = (venues, query) => venues.filter(venue => venue.name.toLowerCase().includes(query.toLowerCase()));

  render () {

    const venueList = this.filterQuery(this.props.venues, this.state.query).map((venue, index) => {
      return (
        <li className= "museum"
           key={venue.id}
           tabIndex={0}
           onClick={() => {this.props.toggleWindow(index)}}
           onKeyPress={() => {this.props.toggleWindow(index)}}
           role="button"
           >
        {venue.name}
        </li>
      )
    })

    return (
      <Menu noOverlay>
         <div className="search">
            <input
               type="text"
               placeholder="Search for museum"
               value={this.state.query}
               onChange={(event) => this.updateQuery(event.target.value)}
               role="search"
               aria-label="Search for museum by name"
            />
            <div className="museumList">
               <ul>
                  {venueList}
               </ul>
            </div>
         </div>
      </Menu>
    );
  }
}

export default List;
