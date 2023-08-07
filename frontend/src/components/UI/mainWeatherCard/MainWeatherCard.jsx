import PropTypes from 'prop-types';

function MainWeatherCard({ todayWeatherData }) {
  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-center w-1/4 h-48 bg-blue-400 rounded-lg">
        <div className="mr-4">
          {todayWeatherData.length !== 0 && (
            <img
              src={`https://openweathermap.org/img/wn/${todayWeatherData.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
          )}
        </div>
        <div className="mr-3">
          {todayWeatherData.length !== 0 && (
            <>
              <p className="text-4xl">{todayWeatherData.name}</p>
              <p className="text-lg">
                {todayWeatherData.weather[0].description}
              </p>
              <p className="text-3xl">{`${todayWeatherData.main.temp} \u00B0C`}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

MainWeatherCard.propTypes = {
  todayWeatherData: PropTypes.array,
};
export default MainWeatherCard;
