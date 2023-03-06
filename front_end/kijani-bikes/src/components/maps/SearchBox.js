import React from 'react';
import PropTypes from 'prop-types';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.onPlacesChanged = this.onPlacesChanged.bind(this);
  }

  componentDidMount() {
    const { google, map } = this.props;

    if (google && map) {
      const input = this.refs.input;
      const searchBox = new google.maps.places.SearchBox(input);

      searchBox.addListener('places_changed', this.onPlacesChanged);
    }
  }

  componentWillUnmount() {
    const { google } = this.props;

    if (google && google.maps && this.searchBox) {
      google.maps.event.clearInstanceListeners(this.searchBox);
    }
  }

  onPlacesChanged() {
    const { google } = this.props;

    if (google && google.maps && this.searchBox) {
      const places = this.searchBox.getPlaces();

      if (this.props.onPlacesChanged) {
        this.props.onPlacesChanged(places);
      }
    }
  }

  render() {
    return (
      <input
        ref="input"
        type="text"
        placeholder={this.props.placeholder}
        className={this.props.className}
      />
    );
  }
}

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  onPlacesChanged: PropTypes.func,
  className: PropTypes.string
};

export default SearchBox;
