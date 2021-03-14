import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    weather: {
        padding: '10px 0 10px 10px',
    },
    weatherWrapper: {
      maxWidth: '300px',
      margin: '0 auto',
    },
    weatherHeader: {
        fontSize: '30px',
        fontWeight: 'bold',
        lineHeight: '30px',
        marginBottom: '10px',
    },
    tempContainer: {      
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    weatherTemp: {
        fontSize: '36px',
        fontWeight: 'bold',
    },
    weatherIcon: {
        width: '100px',
    },
    weatherDetail: {
        fontSize: '20px',
    },
});

function WidgetWeather({ weather, country }) {
    const classes = useStyles();
    const { t } = useTranslation();
    const capital = country ? country.capital.name : '';
    const description = weather.weather[0].description;
    const descUpper = description.substring(0,1).toUpperCase() + description.substr(1);

    return (
        <Box className={classes.weather}>
            <Box className={classes.weatherWrapper}>
                <Typography className={classes.weatherHeader}>{capital}</Typography>
                <Box className={classes.tempContainer}>
                    <Typography className={classes.weatherTemp}>{Math.round(weather.main.temp)} °C</Typography>
                    <img
                        className={classes.weatherIcon}
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt={weather.weather[0].description}
                    />
                </Box>
                <Typography className={classes.weatherDetail}>
                    {descUpper}
                </Typography>            
                <Typography className={classes.weatherDetail}>
                    {t('labels.wind')} {weather.wind.speed} {t('labels.speed')}
                </Typography>
                <Typography className={classes.weatherDetail}>
                    {t('labels.humidity')} {weather.main.humidity}{"%"}
                </Typography>
            </Box>
        </Box>
    );
}

WidgetWeather.propTypes = {
    weather: PropTypes.shape({
        main: PropTypes.shape({
            temp: PropTypes.number.isRequired,
            humidity: PropTypes.number.isRequired
        }).isRequired,
        wind: PropTypes.shape({
            speed: PropTypes.number.isRequired
        }).isRequired,
        weather: PropTypes.arrayOf(PropTypes.shape({
            description: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        })).isRequired
    }).isRequired,
    country: PropTypes.shape({
        capital: PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
};

export default WidgetWeather;
