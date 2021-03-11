import React from 'react';
import Grid from '@material-ui/core/Grid';
import { fade, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: '0 auto',
        '&:hover': {
            boxShadow: `0 5px 8px 0 ${fade(theme.palette.primary.main, 0.4)},
                        0 5px 8px 0 ${fade(theme.palette.primary.main, 0.4)}`,
            '& *': {
                color: theme.palette.primary.light,
            }
        }
    }
}));

function Home({ countries, onPreview }) {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <>
            <Grid container spacing={4}>
                {countries.map((country) => (
                    <Grid item xs={12} sm={6} md={3} key={country.isoCode}>
                        <Card className={classes.root}>
                            <CardActionArea onClick={() => onPreview(country.isoCode)}>
                                <CardMedia
                                    component="img"
                                    alt={country.capital.name}
                                    height="140"
                                    image={country.image}
                                    title={country.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {country.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {t('labels.capital')} {country.capital.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => onPreview(country.isoCode)}>
                                    {t('labels.view')}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Home;
