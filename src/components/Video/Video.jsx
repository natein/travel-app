import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { getVideoId } from '../../helpers';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    box: {
        position: 'relative',
        paddingBottom: '56.25%',
        paddingTop: '25px',
        height: '0',
        maxWidth: '1920px',
        margin: '0 auto',
    },
    player: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
    },
}));

function Video({ title, error, video }) {
    const classes = useStyles();
    const videoId = getVideoId(video);
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

    return (
        <>
            <Box my={3}>
                <ThemeProvider theme={theme}>
                    <Typography align="center" component="h1" variant="h4">
                        {title}
                    </Typography>
                </ThemeProvider>
            </Box>

            {videoId ? (
                <Box className={classes.box}>
                    <iframe
                        title={title}
                        className={classes.player}
                        type="text/html"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder="0"
                        allow="accelerometer"
                        autoPlay
                        clipboard-write="true"
                        encrypted-media="true"
                        gyroscope="true"
                        picture-in-picture="true"
                        allowFullScreen={true}
                    ></iframe>
                </Box>
            ) : (
                <h1 align="center">{error}</h1>
            )}
        </>
    );
}

Video.propTypes = {
    title: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    error: PropTypes.string
};

export default Video;
