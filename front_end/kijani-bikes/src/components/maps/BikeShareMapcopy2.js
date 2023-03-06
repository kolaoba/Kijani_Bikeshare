import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';
import LocationPicker from 'react-location-picker';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    location: {
      position: {
        lat: -1.2884,
        lng: 36.8233
      },
      address: "Nairobi, Kenya"
    }
  };

  handleLocationChange = ({ position, address, places }) => {
    this.setState({
      location: { position, address }
    });
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        <Marker onClick={this.onMarkerClick} name={'Current Location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={this.state.location.position}
        >
          <LocationPicker
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '400px' }} />}
            defaultPosition={this.state.location.position}
            onChange={this.handleLocationChange}
          />
        </Map>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBcpaRCdTJvNwze31A2BaNxbaUYfvrgb-4'
})(MapContainer);

