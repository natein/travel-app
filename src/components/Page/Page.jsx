import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import SightGallery from './SightGallery';
import CountryMap from '../CountryMap'

const useStyles = makeStyles({
    container: {
        marginTop: '85px',
    },

    countryMap: {
        overflow: 'hidden',
        position: 'relative',
        minHeight: '40vh',
    },
});

function Country({ country }) {
    const classes = useStyles();
    return (
        <Grid container spacing={2} className={classes.container} direction="column">
            
            <h3>Country {country.isoCode}</h3>
            <CountryMap className={classes.countryMap} />

            <SightGallery data={country} />

        </Grid>
    );
}

export default Country;
