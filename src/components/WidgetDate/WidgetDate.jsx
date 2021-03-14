import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const ucFirst = (str) => str[0].toUpperCase() + str.slice(1);

const useStyles = makeStyles({
    date: {
        fontSize: '24px',
    },
    time: {
        fontSize: '28px',
    },
    center: {
        textAlign: 'center',
    },
});

function WidgetDate({ locale, timezone }) {
    const classes = useStyles();
    const timezoneName = timezone.name;

    const optionsDate = {
        timeZone: timezoneName,
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    };

    const optionsTime = {
        timeZone: timezoneName,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
    };

    const getDate = () => new Date().toLocaleString(locale, optionsDate);
    const getTime = () => new Date().toLocaleString(locale, optionsTime);

    const [date, setDate] = useState(getDate());
    const [time, setTime] = useState(getTime());

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(getDate());
            setTime(getTime());
        }, 1000);

        return () => clearInterval(timerId);
    });

    return (
        <Box className={classes.center}>
            <Typography className={classes.date}>{ucFirst(date)}</Typography>
            <Typography className={classes.time}>{time}</Typography>
        </Box>
    );
}

WidgetDate.propTypes = {
    locale: PropTypes.oneOf(['en', 'ru', 'uk']).isRequired,
    timezone: PropTypes.shape({
        name: PropTypes.string.isRequired,
        offset: PropTypes.string.isRequired,
    }),
};

export default WidgetDate;
