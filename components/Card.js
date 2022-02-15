import WeatherImage from './WeatherImage';
function Card({ weatherData }) {
  const { location, day, temperature } = weatherData;

  return (
    <div className="w-60 h-72 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <h1 className="font-bold text-2xl my-2 text-center">{location}</h1>
      <h2 className="text-lg font-medium text-center mb-3.5">{day}</h2>
      <WeatherImage weatherStatus={day} />
      <p className="text-lg text-gray-600 mt-4 text-center">
        Temperature: {temperature}&#8451;
      </p>
    </div>
  );
}

export default Card;
