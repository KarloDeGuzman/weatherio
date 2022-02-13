import WeatherImage from './WeatherImage';
function Card({ weatherData }) {
  const { day, temperature } = weatherData;

  return (
    <div>
      <h1>Dublin</h1>
      <h2>{day}</h2>
      <WeatherImage weatherStatus={day} />
      <p>Temperature: {temperature}&#8451;</p>
    </div>
  );
}

export default Card;
