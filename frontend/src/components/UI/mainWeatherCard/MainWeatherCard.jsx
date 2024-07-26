import PropTypes from 'prop-types';

function MainWeatherCard({ todayWeatherData }) {
  return (
    <div className="flex justify-center px-4 my-8">
      <div className="flex items-center justify-center w-full max-w-md transition-transform transform rounded-lg shadow-lg h-60 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:scale-105 hover:shadow-2xl">
        <div className="flex-shrink-0 mr-4">
          {todayWeatherData && todayWeatherData.weather && (
            <img
              src={`https://openweathermap.org/img/wn/${todayWeatherData.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              className="w-24 h-24"
            />
          )}
        </div>
        <div className="flex flex-col justify-center">
          {todayWeatherData && todayWeatherData.weather && (
            <>
              <p className="text-3xl font-semibold text-white">
                {todayWeatherData.name}
              </p>
              <p className="text-lg text-white">
                {todayWeatherData.weather[0].description}
              </p>
              <p className="text-4xl font-bold text-white">{`${todayWeatherData.main.temp} \u00B0C`}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

MainWeatherCard.propTypes = {
  todayWeatherData: PropTypes.object,
};

export default MainWeatherCard;
