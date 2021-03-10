import { Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import CountryMap from '../CountryMap';
import WidgetDate from '../WidgetDate';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '85px',
    },

    countryMap: {
        overflow: 'hidden',
        position: 'relative',
        minHeight: '40vh',
    },

    descriptionGrid: {
        padding: theme.spacing(0, 10, 0, 0),
    },

    widgetBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
        marginBottom: theme.spacing(2),
    },

    image: {
        width: '100%'
    },

    capital: {
        padding: theme.spacing(3, 0, 2, 0),
    },
}));

function Country({ country }) {
    const classes = useStyles();
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                {country.name}
            </Typography>

            <Grid container>
                <Grid item xs={12} md={9} className={classes.descriptionGrid}>
                    {<img className={classes.image} src={country.image} alt={country.name} />}
                    <Typography className={classes.capital}>
                        <b>Столица:</b> {country.capital.name}
                    </Typography>
                    <Typography gutterBottom>
                        {country.description}
                    </Typography>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Paper elevation={0} className={classes.widgetBox}>
                        Погода
                    </Paper>

                    <Paper elevation={0} className={classes.widgetBox}>
                        Курс валют
                    </Paper>

                    <Paper elevation={0} className={classes.widgetBox}>
                        <WidgetDate />
                    </Paper>
                </Grid>

                <Grid container className={classes.container} direction="column">
                    <CountryMap className={classes.countryMap} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Country;
