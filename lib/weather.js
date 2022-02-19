import fs from 'fs';
import path from 'path';
import { WeatherData } from '../data/example-data';

export async function getWeatherForecastData(city) {
  let cityCoordinate;

  if (city.toUpperCase() === 'DUBLIN') {
    cityCoordinate = { lon: -6.266155, lat: 53.35014 };
  } else {
    cityCoordinate = await getLatitudeAndLongitude(city);
  }

  const res =
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityCoordinate.lat}&lon=${cityCoordinate.lon}&units=metric&appid=${process.env.API_KEY}
  `);

  const cityData = await res.json();
  console.log('cityData', cityData);
  return cityData;
}

export async function getLatitudeAndLongitude(city) {
  const res = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.API_KEY}`
  );
  const data = await res.json();
  console.log('latLon', data);

  return { lon: data[0].lon, lat: data[0].lat };
}
