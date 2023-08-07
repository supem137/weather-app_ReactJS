import PropTypes from 'prop-types';

function ForcastWeatherCard({ selectedData }) {
  return (
    <div className="flex justify-center my-4 ">
      <div className="flex-wrap w-1/2 px-6 pb-6 rounded-lg bg-sky-100 ">
        <h2 className="">Weather forecast</h2>
        <div className="flex justify-between">
          {selectedData &&
            selectedData.slice(0, 5).map((element, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center w-1/6 py-3 bg-blue-500 rounded-lg"
                >
                  <p>
                    {new Date(element.dt * 1000).toLocaleDateString('en-US')}
                  </p>
                  <p>
                    {new Date(element.dt * 1000).toLocaleTimeString('en-US')}
                  </p>
                  <img
                    src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
                    alt="Weather Icon"
                  />
                  <p>{`${element.main.temp} \u00B0C`}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

ForcastWeatherCard.propTypes = {
  selectedData: PropTypes.array,
};
export default ForcastWeatherCard;
