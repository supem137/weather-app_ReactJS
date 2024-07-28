import PropTypes from 'prop-types';
import './SkeletonLoader.css'; // Import the CSS file for skeleton loader

function MainWeatherCard({ todayWeatherData }) {
  const isLoading = !todayWeatherData || !todayWeatherData.weather;

  return (
    <div className="flex justify-center px-4 my-8">
      <div
        className={`flex items-center justify-center w-full max-w-md transition-transform transform rounded-lg shadow-lg h-60 ${
          isLoading
            ? 'bg-gray-200'
            : 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
        } hover:scale-105 hover:shadow-2xl`}
      >
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex-shrink-0 mr-4">
              <div className="w-24 h-24 skeleton-circle"></div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="w-32 h-6 mb-2 skeleton-text"></div>
              <div className="w-48 h-6 mb-2 skeleton-text"></div>
              <div className="w-24 h-8 skeleton-text"></div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-shrink-0 mr-4">
              <img
                src={`https://openweathermap.org/img/wn/${todayWeatherData.weather[0].icon}@2x.png`}
                alt="Weather Icon"
                className="w-24 h-24"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-3xl font-semibold text-white">
                {todayWeatherData.name}
              </p>
              <p className="text-lg text-white">
                {todayWeatherData.weather[0].description}
              </p>
              <p className="text-4xl font-bold text-white">{`${todayWeatherData.main.temp} \u00B0C`}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

MainWeatherCard.propTypes = {
  todayWeatherData: PropTypes.object,
};

export default MainWeatherCard;
