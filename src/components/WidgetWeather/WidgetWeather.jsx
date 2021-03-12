import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';
import imageUrl1 from '../../assets/weather/02.svg'

const useStyles = makeStyles((theme) => ({
    weather: {
        padding: '10px 0 10px 10px',        
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
}));

function WidgetWeather({ weather, country }) {
    console.log(weather)
    const classes = useStyles();
    const { t } = useTranslation();    
    const temp = "-3°C";
    const capital = (country) ? country.capital.name : '';

    return (
        <Box className={classes.weather}>
            <Typography className={classes.weatherHeader}>
                { capital }
            </Typography>
            <Box className={classes.tempContainer}>
                <Typography className={classes.weatherTemp}>
                  { temp }
                </Typography>
                <img className={classes.weatherIcon} src={imageUrl1} />
            </Box>
            <Typography className={classes.weatherDetail}>
                {t('labels.wind')}
            </Typography>
            <Typography className={classes.weatherDetail}>
                {t('labels.humidity')}
            </Typography>
        </Box>
    );
}

export default WidgetWeather;
