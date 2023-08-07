import { useEffect } from 'react';
import { getCurrentLocation } from '../../../api/geolocationApi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPredictedWeatherData } from '../../../app/features/weatherSlice';
import ForcastWeatherCard from '../../UI/forcastWeatherCard/ForcastWeatherCard';

function CurrentCityPredictedWeather() {
  const predictedWeatherData = useSelector(
    (state) => state.getWeatherDetails.predictedWeatherData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const code = await getCurrentLocation();

        dispatch(
          fetchPredictedWeatherData({
            lat: code.lat,
            lon: code.lon,
          })
        );
      } catch (error) {
        console.error('Error fetching current location:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  const selectedData = predictedWeatherData.list;

  return (
    <>
      <ForcastWeatherCard selectedData={selectedData} />
    </>
  );
}

export default CurrentCityPredictedWeather;
