import React, { useCallback, useEffect } from 'react';
import { Box, fade, makeStyles } from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

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
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(currentLocale);
    }, [currentLocale, i18n]);

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
                <option value="ru">{t('labels.locale.ru')}</option>
                <option value="en">{t('labels.locale.en')}</option>
                <option value="uk">{t('labels.locale.uk')}</option>
            </select>
        </Box>
    );
};

LanguageSelector.propTypes = {
    currentLocale: PropTypes.oneOf(['en', 'uk', 'ru']),
    onLocaleChange: PropTypes.func.isRequired,
};

LanguageSelector.defaultProps = {
    currentLocale: 'ru'
};

export default LanguageSelector;
