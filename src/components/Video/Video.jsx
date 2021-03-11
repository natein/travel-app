import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

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

function Video({ title, video }) {
    const classes = useStyles();

    return (
        <>
            <h1 align="center">{title}</h1>

            {!!video ? (
                <Box className={classes.box}>
                    <ReactPlayer className={classes.player} url={video} width="100%" height="100%" controls={true}/>
                </Box>
            ) : (
                <h1 align="center">Oops something went wrong...</h1>
            )}
        </>
    );
}

Video.propTypes = {
    title: PropTypes.string,
    video: PropTypes.string,
};

export default Video;