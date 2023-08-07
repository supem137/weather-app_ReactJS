import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPredictedWeatherData } from '../../../app/features/weatherSlice';
import ForcastWeatherCard from '../../UI/forcastWeatherCard/ForcastWeatherCard';

function SearchCiryPredicted() {
  const selectCityName = useSelector(
    (state) => state.getWeatherDetails.selectCityName
  );

  const predictedWeatherData = useSelector(
    (state) => state.getWeatherDetails.predictedWeatherData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(
          fetchPredictedWeatherData({
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

  const selectedData = predictedWeatherData.list;

  return (
    <>
      <ForcastWeatherCard selectedData={selectedData} />
    </>
  );
}

export default SearchCiryPredicted;
