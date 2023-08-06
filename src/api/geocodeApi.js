import axios from 'axios';

export default async function getGeoCodeAndCityNames(location) {
  console.log('Location: ' + location);
  if (location !== '') {
    try {
      const response = await axios.get(
        `http://localhost:5000/geocode?location=${location}`
      );
      return response.data;
    } catch (error) {
      console.log('Cannot fetch cities');
    }
  } else {
    return;
  }
}
