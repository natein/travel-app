import axios from 'axios';

const weatherKey = process.env.REACT_APP_WEATHER_KEY || '';


export const getWeather = (lat, lon, lang) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=${lang}&appid=${weatherKey}`;

  return axios
    .get(url)
    .then((response) => response.data);
};
