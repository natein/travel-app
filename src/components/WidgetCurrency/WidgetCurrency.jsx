import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '24px',
    },
    center: {
        textAlign: 'center',
    },
    currency: {
        fontSize: '18px',
    },
    currencyItem: {
        display: 'block',
    },
}));

function WidgetCurrency({ currency, country }) {
    const classes = useStyles();
    const { t } = useTranslation();

    const currencyAll = currency.Valute;
    const countryCurrencyCode = country.currency.code;
    const countryCurrencyToRub = countryCurrencyCode === 'RUB' ? 1 : currencyAll[countryCurrencyCode].Value / currencyAll[countryCurrencyCode].Nominal;
    const countryCurrencyRubToUsd = countryCurrencyCode === 'RUB' ? currencyAll['USD'].Value : (countryCurrencyToRub / currencyAll['USD'].Value);
    const countryCurrencyRubToEur = countryCurrencyCode === 'RUB' ? currencyAll['EUR'].Value : (countryCurrencyToRub / currencyAll['EUR'].Value);

    const currencyBox = [
        {
            name: 'RUB',
            value: countryCurrencyToRub.toFixed(2),
        },
        {
            name: 'USD',
            value: countryCurrencyRubToUsd.toFixed(2),
        },
        {
            name: 'EUR',
            value: countryCurrencyRubToEur.toFixed(2),
        },
    ];

    return (
        <Box className={classes.center}>
            <Typography className={classes.title}>
                {t('labels.currency')} {countryCurrencyCode}
            </Typography>
            <Typography className={classes.currency}>
                {currencyBox.map((item) => {
                    if (countryCurrencyCode !== item.name) {
                        return (
                            <Box className={classes.currencyItem} component="span" key={item.name}>
                                {`${item.value} ${item.name}`}
                            </Box>
                        );
                    }
                    return '';
                })}
            </Typography>
        </Box>
    );
}

WidgetCurrency.propTypes = {
    currency: PropTypes.shape({
        Valute: PropTypes.object.isRequired,
    }).isRequired,
    country: PropTypes.shape({
        currency: PropTypes.shape({
            code: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
};

export default WidgetCurrency;
