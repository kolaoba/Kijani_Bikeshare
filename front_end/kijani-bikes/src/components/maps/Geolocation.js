import axios from 'axios';

const GeoLocation = {
  getCurrentLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve([latitude, longitude]);
        },
        (error) => {
          reject(error);
        }
      );
    });
  },

  sendLocationToServer(location) {
    axios.post('/api/location', {
      latitude: location[0],
      longitude: location[1]
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
  }
};

export default GeoLocation;

