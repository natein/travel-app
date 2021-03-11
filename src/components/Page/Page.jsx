import { Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import CountryMap from '../CountryMap';
import WidgetDate from '../WidgetDate';
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
        padding: theme.spacing(0, 10, 0, 0),
    },

    widgetBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
        marginBottom: theme.spacing(2),
    },

    image: {
        width: '100%',
    },

    capital: {
        padding: theme.spacing(3, 0, 2, 0),
    },
}));

function Country({ country }) {
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
                        {t('labels.weather')}
                    </Paper>

                    <Paper elevation={0} className={classes.widgetBox}>
                        {t('labels.currency')}
                    </Paper>

                    <Paper elevation={0} className={classes.widgetBox}>
                        <WidgetDate />
                    </Paper>
                </Grid>
            </Grid>

            <Box my={5}>
                <SightGallery/>
            </Box>

            <Box my={5}>
                <CountryMap className={classes.countryMap} />
            </Box>

            <Box my={5}>
                <Video/>
            </Box>
        </Box>
    );
}

export default Country;
