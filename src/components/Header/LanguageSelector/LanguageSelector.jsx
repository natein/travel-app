import React, { useCallback } from 'react';
import { Box, fade, makeStyles } from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';

const useStyles = makeStyles((theme) => ({
    select: {
        color: fade(theme.palette.common.white, 0.5),
        fontSize: '1rem',
        padding: '8px',
        minWidth: '5rem',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.background.default, 0.15),
        border: 'none',
        outline: 'none',
        appearance: 'none',
        '&:hover': {
            backgroundColor: fade(theme.palette.background.default, 0.4),
        },
        '&>option': {
            color: theme.palette.common.black
        }
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            marginRight: theme.spacing(1)
        }
    },
    icon: {
        color: fade(theme.palette.common.white, 0.5),
        marginRight: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }
}));

const LanguageSelector = ({ currentLocale, onLocaleChange }) => {
    const classes = useStyles();

    const onLanguageChange = useCallback(
        (e) => {
            onLocaleChange(e.target.value);
        },
        [onLocaleChange],
    );

    return (
        <Box className={classes.container}>
            <TranslateIcon className={classes.icon}/>
            <select value={currentLocale} onChange={onLanguageChange} className={classes.select}>
                <option value="ru">Russian</option>
                <option value="en">English</option>
                <option value="uk">Ukranian</option>
            </select>
        </Box>
    );
};

export default LanguageSelector;
