import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  resetSearchCityName,
  setSearchCityName,
} from '../../../app/features/weatherSlice';

function CitySearchBar() {
  const [debounceName, setDebounceName] = useState('');
  const dispatch = useDispatch();

  const changeNameHandler = (event) => {
    setDebounceName(event.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (debounceName.trim() === '') {
        dispatch(resetSearchCityName());
      } else {
        dispatch(setSearchCityName(debounceName.trim()));
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [dispatch, debounceName]);

  return (
    <div className="flex justify-center my-6">
      <input
        onChange={changeNameHandler}
        type="text"
        autoComplete="off"
        required
        className="w-full max-w-3xl px-4 py-2 transition-all duration-300 ease-in-out bg-white border rounded-md shadow-md focus:ring-2 focus:ring-sky-500"
        placeholder="Search city name"
      />
    </div>
  );
}

export default CitySearchBar;
