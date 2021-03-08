import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { sightsCollection, styles } from "./constants";
import Grid from "@material-ui/core/Grid";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";

function SightGallery() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const SightsList = sightsCollection.sights.map((el) => (
    <Grid key={el.id} item lg={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={el.image} />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {el.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {el.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  ));

  return (
    <Grid container alignItems="center" justify="center" spacing={2}>
      <Hidden only={["xs", "sm", "md"]}>
        <Box component="div" m={1}>
          <ArrowBackIosIcon />
        </Box>
      </Hidden>

      {SightsList}

      <Hidden only={["xs", "sm", "md"]}>
        <Box component="div">
          <ArrowForwardIosIcon />
        </Box>
      </Hidden>
    </Grid>
  );
}

export default SightGallery;
