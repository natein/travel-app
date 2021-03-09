import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styles, arrowInner, titleWrap, arrowWrap, sightsBtn } from "./constants";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Box from "@material-ui/core/Box";
import SightsList from "./SightsList";
import Button from '@material-ui/core/Button';

function SightGallery() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <>
      <Box {...titleWrap}>
        <h1 align="center">Достопримечательности</h1>
      </Box>

      <SightsList />

      <Box {...arrowWrap}>
        <Box {...arrowInner}>
          <Button {...sightsBtn}>
            <NavigateBeforeIcon className={classes.icon} />
          </Button>
        </Box>

        <Box {...arrowInner}>
          <Button {...sightsBtn}>
            <NavigateNextIcon className={classes.icon} />
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default SightGallery;
