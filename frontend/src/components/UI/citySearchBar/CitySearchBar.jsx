import { useEffect, useState } from 'react';
import {
  resetSearchCityName,
  setSearchCityName,
} from '../../../app/features/weatherSlice';
import { useDispatch } from 'react-redux';

function CitySearchBar() {
  const [debounceName, setDebounceName] = useState();
  const dispatch = useDispatch();

  const changeNameHandler = (event) => {
    setDebounceName(event.target.value);
  };

  useEffect(() => {
    let timeoutId;

    timeoutId = setTimeout(() => {
      if (debounceName === '') {
        dispatch(resetSearchCityName());
      }
      dispatch(setSearchCityName(debounceName));
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, debounceName]);

  return (
    <div className="grid justify-items-center ">
      <input
        onChange={changeNameHandler}
        id="email-address"
        name="email"
        type="text"
        autoComplete="email"
        required
        // className="w-1/2 my-4 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        className=" border-2 focus:outline-none w-1/2 my-4 flex-auto rounded-md px-3.5 py-2  shadow-sm ring-2 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        placeholder="Search city name"
      />
    </div>
  );
}

export default CitySearchBar;
