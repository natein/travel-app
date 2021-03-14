import React from 'react';
import Grid from '@material-ui/core/Grid';
import { fade, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: '0 auto',
        // padding: '2px 0px 2px 0px',
        '&:hover': {
            boxShadow: `0 5px 8px 0 ${fade(theme.palette.primary.main, 0.4)},
                        0 5px 8px 0 ${fade(theme.palette.primary.main, 0.4)}`,
            '& *': {
                color: theme.palette.primary.light,
            },
        },
    },
    card: {
        padding: '2px 0px 2px 0px',
        height: '6rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
}));

function Home({ onPreview, countries }) {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <>
            <Grid container spacing={4}>
                {countries.map((country) => (
                    <Grid item xs={12} sm={6} md={3} key={country.isoCode} onClick={() => onPreview(country.isoCode)}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={country.capital.name}
                                    height="140"
                                    image={country.image}
                                    title={country.name}
                                />
                                <CardContent className={classes.card}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {country.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {t('labels.capital')} {country.capital.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

Home.propTypes = {
    onPreview: PropTypes.func.isRequired,
    countries: PropTypes.arrayOf(
        PropTypes.shape({
            isoCode: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            video: PropTypes.string.isRequired,
            currency: PropTypes.shape({
                code: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
            }).isRequired,
            timezone: PropTypes.shape({
                name: PropTypes.string.isRequired,
                offset: PropTypes.string.isRequired,
            }).isRequired,
            capital: PropTypes.shape({
                name: PropTypes.string.isRequired,
                coordinates: PropTypes.shape({
                    lat: PropTypes.number.isRequired,
                    lon: PropTypes.number.isRequired,
                }).isRequired,
            }).isRequired,
            sights: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    description: PropTypes.string.isRequired,
                    image: PropTypes.string.isRequired,
                    rating: PropTypes.arrayOf(
                        PropTypes.shape({
                            username: PropTypes.string.isRequired,
                            rate: PropTypes.number.isRequired,
                        }),
                    ),
                }),
            ).isRequired,
        }),
    ),
};

Home.defaultProps = {
    filteredCountries: [],
};

export default Home;
