import { Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import CountryMap from '../CountryMap';
import WidgetDate from '../WidgetDate';
import WidgetCurrency from '../WidgetCurrency';
import WidgetWeather from '../WidgetWeather';
import SightGallery from '../SightGallery';
import Video from '../Video'
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    countryMap: {
        overflow: 'hidden',
        position: 'relative',
        minHeight: '40vh',
    },

    descriptionGrid: {
        [theme.breakpoints.down('xs')]: {
            padding: 'initial',
            marginBottom: theme.spacing(4),
        },
        [theme.breakpoints.down('sm')]: {
            padding: 'initial',
            marginBottom: theme.spacing(4),
        },
        
        padding: theme.spacing(0, 10, 0, 0),
    },

    widgetBox: {
        padding: theme.spacing(2),
        backgroundColor: '#e2e5f4',
        marginBottom: theme.spacing(2),   
    },

    image: {
        width: '100%',
    },

    capital: {
        padding: theme.spacing(3, 0, 2, 0),
    },
}));

function Country({ country, currency }) {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                {country.name}
            </Typography>

            <Grid container>
                <Grid item xs={12} md={9} className={classes.descriptionGrid}>
                    {<img className={classes.image} src={country.image} alt={country.name} />}
                    <Typography className={classes.capital}>
                        <b>{t('labels.capital')}</b> {country.capital.name}
                    </Typography>
                    <Typography gutterBottom>{country.description}</Typography>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Paper elevation={0} className={classes.widgetBox}>
                        <WidgetWeather />
                    </Paper>

                    {
                        currency
                            ?
                            <Paper elevation={0} className={classes.widgetBox}>
                                <WidgetCurrency />
                            </Paper>
                            : ''
                    }

                    <Paper elevation={0} className={classes.widgetBox}>
                        <WidgetDate />
                    </Paper>
                </Grid>
            </Grid>

            <Box my={5}>
                <SightGallery />
            </Box>

            <Box my={5}>
                <CountryMap className={classes.countryMap} />
            </Box>

            <Box my={5}>
                <Video />
            </Box>
        </Box>
    );
}

export default Country;
