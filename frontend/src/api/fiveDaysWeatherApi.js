import axios from 'axios';

export default async function getPredictedWeatherApiData(lat, lon) {
  try {
    const response = await axios.get(
      `https://weather-app-backend-nodejs.onrender.com/predicted?lat=${lat}&lon=${lon}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching today's weather:", error);
    // You can handle the error here, such as returning a default value or showing an error message
    return null;
  }
}
