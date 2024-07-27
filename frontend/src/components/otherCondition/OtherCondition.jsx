import { useState } from 'react';
import { useSelector } from 'react-redux';

function OtherCondition() {
  const todayWeatherData = useSelector(
    (state) => state.getWeatherDetails.todayWeatherData
  );

  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex justify-center px-4 my-8">
      <div
        className={`${
          toggle
            ? 'w-full max-w-3xl px-8 py-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg transition-transform transform translate-y-8'
            : 'w-full max-w-3xl px-8 py-10 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 shadow-md'
        }`}
      >
        <h1 className="mb-6 text-2xl font-semibold text-center text-black">
          Other Conditions
        </h1>

        <button
          className="block w-full px-4 py-2 mb-6 text-lg font-semibold text-blue-900 transition-colors bg-white rounded-lg shadow-sm hover:bg-gray-100"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? 'See Less' : 'See More'}
        </button>

        <div
          className={`grid gap-4 ${
            toggle ? 'grid-cols-2' : 'grid-cols-1'
          } text-center`}
        >
          {todayWeatherData.length !== 0 && (
            <>
              {toggle && (
                <>
                  <p className="p-4 text-blue-900 rounded-lg shadow-md bg-gradient-to-r from-green-200 to-green-300 animate-bg-change">
                    Temp Min: {todayWeatherData.main.temp_min} °C
                  </p>
                  <p className="p-4 text-blue-900 rounded-lg shadow-md bg-gradient-to-r from-yellow-200 to-yellow-300 animate-bg-change">
                    Temp Max: {todayWeatherData.main.temp_max} °C
                  </p>
                  <p className="p-4 text-blue-900 rounded-lg shadow-md bg-gradient-to-r from-pink-200 to-pink-300 animate-bg-change">
                    Humidity: {todayWeatherData.main.humidity} %
                  </p>
                  <p className="p-4 text-blue-900 rounded-lg shadow-md bg-gradient-to-r from-purple-200 to-purple-300 animate-bg-change">
                    Pressure: {todayWeatherData.main.pressure} hPa
                  </p>
                </>
              )}
              <p className="p-4 text-blue-900 rounded-lg shadow-md bg-gradient-to-r from-indigo-200 to-indigo-300 animate-bg-change">
                Feels Like: {todayWeatherData.main.feels_like} °C
              </p>
              <p className="p-4 text-blue-900 rounded-lg shadow-md bg-gradient-to-r from-teal-200 to-teal-300 animate-bg-change">
                Wind Speed: {todayWeatherData.wind.speed} m/s
              </p>
              {toggle && (
                <>
                  <p className="p-4 text-blue-900 rounded-lg shadow-md bg-gradient-to-r from-red-200 to-red-300 animate-bg-change">
                    Sea Level: {todayWeatherData.main.sea_level} hPa
                  </p>
                  <p className="p-4 text-blue-900 rounded-lg shadow-md bg-gradient-to-r from-orange-200 to-orange-300 animate-bg-change">
                    Ground Level: {todayWeatherData.main.grnd_level} hPa
                  </p>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default OtherCondition;
