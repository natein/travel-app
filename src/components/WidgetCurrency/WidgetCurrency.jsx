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
  }
}));

function WidgetCurrency({ currency }) {
  const classes = useStyles();


  return (
    <Box className={classes.center}>
      <Typography className={classes.title}>
        Курс валют {currency}
      </Typography>
    </Box>
  );
}

export default WidgetCurrency;
