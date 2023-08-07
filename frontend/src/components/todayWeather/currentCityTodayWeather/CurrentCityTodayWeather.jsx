import { useEffect } from 'react';
import { getCurrentLocation } from '../../../api/geolocationApi';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTodayWeatherData,
  resetPredictedWeatherData,
} from '../../../app/features/weatherSlice';
import MainWeatherCard from '../../UI/mainWeatherCard/MainWeatherCard';

function CurrentCityTodayWeather() {
  const todayWeatherData = useSelector(
    (state) => state.getWeatherDetails.todayWeatherData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const code = await getCurrentLocation();
        dispatch(resetPredictedWeatherData());
        dispatch(
          fetchTodayWeatherData({
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

  return (
    <>
      <MainWeatherCard todayWeatherData={todayWeatherData} />
    </>
  );
}

export default CurrentCityTodayWeather;
