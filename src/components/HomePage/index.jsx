import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const mockArr = [
  {
    countryName: "Belarus",
    capital: "Minsk",
    img: "https://i.ytimg.com/vi/Mf38AgvXG8c/maxresdefault.jpg",
  },
  {
    countryName: "Russia",
    capital: "Moscow",
    img:
      "https://wwd.com/wp-content/uploads/2018/09/saint-laurent-front-rowrtw-spring-2019-paris-fashion-week0399sf.jpg",
  },
  {
    countryName: "Ukraine",
    capital: "Kiev",
    img:
      "https://wwd.com/wp-content/uploads/2018/09/saint-laurent-front-rowrtw-spring-2019-paris-fashion-week0399sf.jpg",
  },
  {
    countryName: "Germany",
    capital: "Berlin",
    img:
      "https://wwd.com/wp-content/uploads/2018/09/saint-laurent-front-rowrtw-spring-2019-paris-fashion-week0399sf.jpg",
  },
  {
    countryName: "Great Britain",
    capital: "London",
    img:
      "https://wwd.com/wp-content/uploads/2018/09/saint-laurent-front-rowrtw-spring-2019-paris-fashion-week0399sf.jpg",
  },
  {
    countryName: "France",
    capital: "Paris",
    img:
      "https://wwd.com/wp-content/uploads/2018/09/saint-laurent-front-rowrtw-spring-2019-paris-fashion-week0399sf.jpg",
  },
  {
    countryName: "Latvia",
    capital: "Riga",
    img: "https://i.ytimg.com/vi/Mf38AgvXG8c/maxresdefault.jpg",
  },
  {
    countryName: "USA",
    capital: "D.C. Washington",
    img: "https://i.ytimg.com/vi/Mf38AgvXG8c/maxresdefault.jpg",
  },
];

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  container: {
    marginTop: '85px',
  }
});

function Home() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2} className={classes.container}>
        {mockArr.map(({countryName, capital, img}) => (
          <Grid item xs={12} sm={6} md={4} key={capital}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={capital}
                  height="140"
                  image={img}
                  title={countryName}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {countryName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
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
