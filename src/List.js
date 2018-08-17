import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

class List extends Component {

  state = {
    query: ''
  }

// Updates and filters query
  updateQuery = (query) => {
    this.setState({ query: query })
    this.props.updateFilteredVenues(this.filterQuery(this.props.venues, query))
  }

  filterQuery = (venues, query) => venues.filter(venue => venue.name.toLowerCase().includes(query.toLowerCase()));

  render () {
// Displays the list of museums 
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
// Uses react-burger-menu to display the list of museums with a hamburger icon
      <Menu noOverlay>
         <div className="search" aria-label="List of museums with search bar" tabIndex={0}>
            <input
               type="text"
               placeholder="Search for museum"
               value={this.state.query}
               onChange={(event) => this.updateQuery(event.target.value)}
               role="search"
               aria-label="Enter name to search for museum"
            />
            <div className="museumList">
               <ul
               role="menu"
               aria-label="List of museums">
                  {venueList}
               </ul>
            </div>
         </div>
      </Menu>
    );
  }
}

export default List;
