import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchGeoCodeAndCityNames,
  setSelectCityName,
} from '../../../app/features/weatherSlice';

function SuggestBox() {
  const searchCityName = useSelector(
    (state) => state.getWeatherDetails.searchCityName
  );
  const cityApiData = useSelector(
    (state) => state.getWeatherDetails.cityApiData
  );

  const [isListVisible, setListVisible] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchGeoCodeAndCityNames(searchCityName));
        setListVisible(true);
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };
    fetchData();
  }, [searchCityName, dispatch]);

  const selectNameHandler = (event, index) => {
    setListVisible(false);
    dispatch(
      setSelectCityName({
        lat: cityApiData[index].latitude,
        lon: cityApiData[index].longitude,
      })
    );
  };

  return (
    <div className="absolute z-10 w-full max-w-md transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-lg left-1/2">
      {isListVisible && cityApiData && (
        <div className="overflow-y-auto max-h-60">
          {cityApiData.map((ele, index) => (
            <p
              className="px-4 py-2 transition duration-300 ease-in-out border-b border-gray-200 cursor-pointer hover:bg-gray-100"
              key={index}
              onClick={(event) => selectNameHandler(event, index)}
            >
              {ele.name}, {ele.country}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default SuggestBox;
