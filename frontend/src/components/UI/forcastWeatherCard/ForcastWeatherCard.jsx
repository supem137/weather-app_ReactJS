import PropTypes from 'prop-types';
import './ForecastWeatherCard.css'; // Import custom CSS file

function ForecastWeatherCard({ selectedData }) {
  const isLoading = !selectedData || selectedData.length === 0;

  return (
    <div className="flex flex-col items-center px-4 my-8">
      <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">
        Weather Forecast
      </h2>
      <div className="w-full max-w-4xl overflow-x-auto scrollbar-custom">
        <div className="flex py-4 space-x-6">
          {isLoading
            ? Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center px-4 py-6 transition-transform transform rounded-lg shadow-lg w-60 bg-gradient-to-br from-gray-200 to-gray-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="absolute inset-0 transition-opacity rounded-lg opacity-0 bg-gradient-to-br from-white/30 via-transparent to-transparent -z-10 blur-md hover:opacity-100"></div>
                  <div className="w-32 h-6 mb-2 skeleton-text"></div>
                  <div className="w-24 h-4 mb-2 skeleton-text"></div>
                  <div className="w-20 h-20 mt-2 skeleton-circle"></div>
                  <div className="w-20 h-6 mt-2 skeleton-text"></div>
                </div>
              ))
            : selectedData.slice(0, 5).map((element, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-center w-60 px-4 py-6 bg-gradient-to-br from-${getColor(
                    element.weather[0].main
                  )}-400 to-${getColor(
                    element.weather[0].main
                  )}-600 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-opacity-90`}
                >
                  <div className="absolute inset-0 transition-opacity rounded-lg opacity-0 bg-gradient-to-br from-white/30 via-transparent to-transparent -z-10 blur-md hover:opacity-100"></div>
                  <p className="text-lg font-medium text-gray-800">
                    {new Date(element.dt * 1000).toLocaleDateString('en-US')}
                  </p>
                  <p className="text-sm text-gray-700">
                    {new Date(element.dt * 1000).toLocaleTimeString('en-US')}
                  </p>
                  <img
                    src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                    className="w-20 h-20 mt-2"
                  />
                  <p className="mt-2 text-2xl font-bold text-gray-800">
                    {`${element.main.temp} \u00B0C`}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

ForecastWeatherCard.propTypes = {
  selectedData: PropTypes.array,
};

export default ForecastWeatherCard;

function getColor(weatherCondition) {
  switch (weatherCondition) {
    case 'Clear':
      return 'sky-blue';
    case 'Clouds':
      return 'sky-blue';
    case 'Rain':
      return 'blue';
    case 'Snow':
      return 'light-blue';
    case 'Thunderstorm':
      return 'blue-gray';
    default:
      return 'indigo';
  }
}
