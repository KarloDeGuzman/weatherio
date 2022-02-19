import WeatherImage from '../WeatherImage';

function Card({
  weatherData: {
    //destructuring weatherData Object to get corresponding data
    main: { temp_max, temp, temp_min }, // destructuring main Object from weatherData Object
    name,
    weather: [{ main: weatherType, description, icon }], // destructuring object values in array
  },
}) {
  console.log('Card Function');
  console.log('name', name);
  console.log('temp_max', temp_max);
  console.log('description', description);
  return (
    <div className="w-72 h-[21rem] p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <h1 className="font-bold text-2xl my-2 text-center">{name}</h1>
      <h2 className="text-lg font-medium text-center mb-3.5">{weatherType}</h2>
      <WeatherImage weatherStatus={weatherType} />
      <p className="text-lg text-gray-600 mt-2 text-center">{description}</p>
      <p className="text-lg text-gray-600 mt-2 text-center">
        Temperature: {temp}&#8451;
      </p>
    </div>
  );
}

export default Card;
