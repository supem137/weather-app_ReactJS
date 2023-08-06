import CitySearchBar from '../components/UI/citySearchBar/CitySearchBar';
import SuggestBox from '../components/UI/suggestBox/SuggestBox';
import CurrentCityPredictedWeather from '../components/hourlyPredictedWeather/curr_city_predict/Curr_city_predict';
import SearchCiryPredicted from '../components/hourlyPredictedWeather/searchCityPredict/SearchCiryPredicted';
import OtherCondition from '../components/otherCondition/OtherCondition';
import CurrentCityTodayWeather from '../components/todayWeather/currentCityTodayWeather/CurrentCityTodayWeather';
import SearchCityTodayWeather from '../components/todayWeather/searchCityTodayWeather/SearchCityTodayWeather';
import { useSelector } from 'react-redux';

function Home() {
  const selectCityName = useSelector(
    (state) => state.getWeatherDetails.selectCityName
  );

  return (
    <>
      {console.log(selectCityName.lat)}
      <CitySearchBar />
      <SuggestBox />
      {selectCityName ? (
        <>
          {/* {console.log('hi')}
          {console.log(selectCityName)} */}
          <SearchCityTodayWeather />
          <SearchCiryPredicted />
          <OtherCondition key={[selectCityName.lat, selectCityName.lat]} />
        </>
      ) : (
        <>
          {console.log('hi')}
          {console.log(selectCityName)}
          <CurrentCityTodayWeather />
          <CurrentCityPredictedWeather />
          <OtherCondition key={[selectCityName.lat, selectCityName.lat]} />
        </>
      )}
    </>
  );
}

export default Home;
