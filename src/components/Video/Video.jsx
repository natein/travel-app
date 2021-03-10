import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { getVideoId } from '../../helpers';
import PropTypes from 'prop-types';

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

function Video({ title, video: { video: videoSrc } }) {
    const classes = useStyles();
    const videoId = getVideoId(videoSrc);

    return (
        <>
            <h1 align="center">{title}</h1>

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
                <h1 align="center">Oops something went wrong...</h1>
            )}
        </>
    );
}

Video.propTypes = {
    title: PropTypes.string,
    videoSrc: PropTypes.string,
};

export default Video;