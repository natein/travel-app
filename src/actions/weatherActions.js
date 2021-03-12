import * as weatherService from '../api/weatherService';

export const loadWeather = (lat, lon, lang) => (dispatch) => {
    return weatherService
        .getWeather(lat, lon, lang)
        .then((data) => dispatch(onWeatherLoaded(data)))
};

export const onWeatherLoaded = (payload) => ({ type: 'WEATHER', payload });
