import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodayWeatherData } from '../../../app/features/weatherSlice';
import MainWeatherCard from '../../UI/mainWeatherCard/MainWeatherCard';

function SearchCityTodayWeather() {
  const selectCityName = useSelector(
    (state) => state.getWeatherDetails.selectCityName
  );

  const todayWeatherData = useSelector(
    (state) => state.getWeatherDetails.todayWeatherData
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // dispatch(resetTodayWeatherData()); //reason --> rerender entire component
        dispatch(
          fetchTodayWeatherData({
            lat: selectCityName.lat,
            lon: selectCityName.lon,
          })
        );
      } catch (error) {
        console.error('Error fetching current location:', error);
      }
    };
    fetchData();
  }, [dispatch, selectCityName]);
  console.log(selectCityName);
  return (
    <>
      <MainWeatherCard todayWeatherData={todayWeatherData} />
    </>
  );
}

export default SearchCityTodayWeather;
