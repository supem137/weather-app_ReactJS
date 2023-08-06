import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

function OtherCondition() {
  const todayWeatherData = useSelector(
    (state) => state.getWeatherDetails.todayWeatherData
  );

  const [toggle, setToggle] = useState(false);

  const memoizedWeatherData = useMemo(
    () => todayWeatherData,
    [todayWeatherData]
  );

  //rerender every toggle fix this --> i think i fixed it but double check it
  return (
    <div className="flex justify-center my-4 ">
      <div
        className={`${
          toggle
            ? ' absolute w-1/2 px-6 pb-6 rounded-lg bottom-10-14 bg-sky-100 -translate-y-1/3'
            : 'w-1/2 px-6 pb-6 rounded-lg bottom-10-14 bg-sky-100'
        }`}
      >
        <h1>Other condition</h1>

        <button
          className=" text-fuchsia-950"
          onClick={() => {
            return setToggle(!toggle);
          }}
        >
          See more
        </button>

        <div className="grid grid-cols-2 text-center">
          {toggle && todayWeatherData.length !== 0 && (
            <>
              <p className="p-5 m-1 bg-blue-400 rounded-lg">
                Temp min: {memoizedWeatherData.main.temp_min}
              </p>
              <p className="p-5 m-1 bg-blue-400 rounded-lg">
                Temp max: {memoizedWeatherData.main.temp_max}
              </p>
              <p className="p-5 m-1 bg-blue-400 rounded-lg">
                humidity: {memoizedWeatherData.main.humidity}
              </p>
              <p className="p-5 m-1 bg-blue-400 rounded-lg">
                pressure: {memoizedWeatherData.main.pressure}
              </p>
            </>
          )}
        </div>

        <div className="grid grid-cols-2 text-center">
          {todayWeatherData.length !== 0 && (
            <>
              <p className="p-5 m-1 bg-blue-400 rounded-lg">
                Feels like: {memoizedWeatherData.main.feels_like}
              </p>
              <p className="p-5 m-1 bg-blue-400 rounded-lg">
                Wind speed: {memoizedWeatherData.wind.speed}
              </p>
              <p className="p-5 m-1 bg-blue-400 rounded-lg">
                pressure: {memoizedWeatherData.main.pressure}
              </p>
              <p className="p-5 m-1 bg-blue-400 rounded-lg">
                humidity: {memoizedWeatherData.main.humidity}
              </p>
              <p className="p-5 mt-1 ml-1 bg-blue-400 rounded-lg">
                Sea level: {memoizedWeatherData.main.sea_level}
              </p>
              <p className="p-5 mt-1 ml-1 bg-blue-400 rounded-lg">
                grnd level: {memoizedWeatherData.main.grnd_level}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default OtherCondition;
