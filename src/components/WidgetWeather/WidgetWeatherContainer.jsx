import { useEffect } from 'react';
import { connect } from 'react-redux';
import WidgetWeather from './WidgetWeather';
import * as weatherActions from '../../actions/weatherActions';
import LoadingPage from '../LoadingPage';
import { Box } from '@material-ui/core';

const WidgetWeatherContainer = ({ weather, country, locale, onLoadWeather }) => {
    useEffect(() => {
        if (country) {
            const lat = country.capital.coordinates.lat;
            const lon = country.capital.coordinates.lon;
            onLoadWeather(lat, lon, locale);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale, country.isoCode, onLoadWeather]);

    return (
        <Box position="relative" minWidth="5rem" minHeight="5rem">
            {!weather && <LoadingPage />}
            {weather && <WidgetWeather weather={weather} country={country} />}
        </Box>
    );
};

const mapStateToProps = (state) => ({
    locale: state.locale,
    weather: state.weather,
    country: state.country,
});

const mapDispatchToProps = (dispatch) => ({
    onLoadWeather: (lat, lon, lang) => dispatch(weatherActions.loadWeather(lat, lon, lang)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetWeatherContainer);
