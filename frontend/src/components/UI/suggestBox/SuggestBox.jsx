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
    console.log(cityApiData[index]);
    setListVisible(false);
    dispatch(
      setSelectCityName({
        lat: cityApiData[index].latitude,
        lon: cityApiData[index].longitude,
      })
    );
  };

  return (
    <div className="absolute -translate-x-2/4 left-2/4">
      {isListVisible &&
        cityApiData &&
        cityApiData.map((ele, index) => {
          return (
            <p
              className="pl-2 bg-slate-100 w-screen/2"
              key={index}
              onClick={(event) => selectNameHandler(event, index)}
            >
              {ele.name}, {ele.country}
            </p>
          );
        })}
    </div>
  );
}

export default SuggestBox;
