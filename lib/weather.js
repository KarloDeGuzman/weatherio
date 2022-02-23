export async function getWeatherForecastData(city) {
  let cityCoordinate;

  // TODO try a not so hard coded location
  if (city.toUpperCase() === 'DUBLIN') {
    cityCoordinate = { lon: -6.266155, lat: 53.35014 };
  } else {
    cityCoordinate = await getLatitudeAndLongitude(city);
  }

  //TODO make a better try catch block
  //TODO can try to not use latitude and longitude for fewer api calls
  try {
    const res =
      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityCoordinate.lat}&lon=${cityCoordinate.lon}&units=metric&appid=${process.env.API_KEY}
  `);

    const cityData = await res.json();
    console.log('cityData', cityData);
    return cityData;
  } catch {
    return {};
  }
}

export async function getLatitudeAndLongitude(city) {
  //TODO make a better try catch block
  try {
    const res = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.API_KEY}`
    );
    const data = await res.json();
    console.log('latLon', data);

    return { lon: data[0].lon, lat: data[0].lat };
  } catch {
    return { lon: -6.266155, lat: 53.35014 };
  }
}
