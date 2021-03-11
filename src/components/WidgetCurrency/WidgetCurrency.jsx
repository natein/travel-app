import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '24px',
  },
  center: {
    textAlign: 'center'
  },
  currency: {
    fontSize: '18px'
  }
}));

function WidgetCurrency({ currency, country }) {
  const classes = useStyles();

  const currencyAll = currency.Valute;
  const countryCurrencyCode = country.currency.code;
  const countryCurrencyToRub = currencyAll[countryCurrencyCode].Value;

  const currencyBox = [
    {
      name: 'RUB',
      value: countryCurrencyToRub.toFixed(2)
    },
    {
      name: 'USD',
      value: (countryCurrencyToRub / currencyAll['USD'].Value).toFixed(2)
    },
    {
      name: 'EUR',
      value: (countryCurrencyToRub / currencyAll['EUR'].Value).toFixed(2)
    },
  ];

  return (
    <Box className={classes.center}>
      <Typography className={classes.title}>
        Курс валюты {countryCurrencyCode}
      </Typography>
      <Typography className={classes.currency}>
        {
          currencyBox.map(item => {
            if (countryCurrencyCode !== item.name) {
              return (
                <Box>{`${item.value} ${item.name}`}</Box>
              )
            }
            return '';
          })
        }
      </Typography>
    </Box>
  );
}

export default WidgetCurrency;
