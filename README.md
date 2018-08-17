# My Neighborhood Project

## Introduction

The My Neighborhood Project is a single-page web application that displays a map of museums in Copenhagen, Denmark. Users can click on a marker to display the address of the museum as well as search for museums by name in the sidebar.

## Instructions
- Download or clone the repository
- Install all project dependencies with `npm install`
- Start the development server with `npm start`
- The project will run on `http://localhost:3000`

## Service Worker 
The service worker only runs in production mode. To start production mode after installing the project dependencies:
- Run `npm run build`
- Serve the serve with `npm install -g serve`
- Start production mode with `serve -s build`
- The project will run on `http://localhost:5000`

## Features 
- A map of Copenhagen provided by Google Maps API
- Markers and info windows with the address of museums in Copenhagen fetched from the FourSquare API
- Ability to search and filter the museums in the side bar

## Dependencies
- [create-react-app](https://github.com/facebook/create-react-app) 
- [react-google-maps](https://github.com/tomchentw/react-google-maps)
- [react-burger-menu](https://github.com/negomi/react-burger-menu)
- [Google Maps API](https://cloud.google.com/maps-platform/)
- [FourSquare API](https://developer.foursquare.com/)