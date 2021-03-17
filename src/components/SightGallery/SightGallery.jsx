import React from 'react';
import ImageGallery from 'react-image-gallery';
import { sightGalleryDataAdapter } from '../../helpers';
import 'react-image-gallery/styles/css/image-gallery.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Raiting from './Raiting/RaitingContainer'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';


function SightGallery({ title, data }) {
    const galleryOptions = {
        showPlayButton: false,
        thumbnailPosition: 'right',
        onErrorImageURL: 'https://picsum.photos/id/1015/1000/600/',
    };

    const useStyles = makeStyles((theme) => ({
        icon: {
            [theme.breakpoints.down('sm')]: {
                fontSize: '2rem',
            },
            [theme.breakpoints.up('md')]: {
                fontSize: '3.5rem',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: '4rem',
            },
        },
        fullScreenBtn: {
            bottom: 'initial',
            top: '0',
        },
        title: {
            wordWrap: 'break-word',
        },
    }));

    const classes = useStyles();
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

    const [sightId, setSightId] = React.useState(0);

    function renderLeftNav(onClick, disabled) {
        return (
            <button className="image-gallery-icon image-gallery-left-nav" disabled={disabled} onClick={onClick}>
                <NavigateBeforeIcon className={classes.icon} />
            </button>
        );
    }

    function onSlideChange(id) {
        setSightId(id)
    }

    function renderRightNav(onClick, disabled) {
        return (
            <button className="image-gallery-icon image-gallery-right-nav" disabled={disabled} onClick={onClick}>
                <NavigateNextIcon className={classes.icon} />
            </button>
        );
    }

    function renderFullscreenButton(onClick, isFullscreen) {
        return (
            <button
                type="button"
                className={`image-gallery-icon image-gallery-fullscreen-button image-gallery-fullscreen-button ${
                    classes.fullScreenBtn
                } ${isFullscreen ? ' active' : ''}`}
                onClick={onClick}
            >
                {!isFullscreen ? (
                    <FullscreenIcon className={classes.icon} />
                ) : (
                    <FullscreenExitIcon className={classes.icon} />
                )}
            </button>
        );
    }

    return (
        <>
            <Box my={3}>
                <ThemeProvider theme={theme}>
                    <Typography className={classes.title} align="center" component="h1" variant="h4">
                        {title}
                    </Typography>
                </ThemeProvider>
            </Box>

            <ImageGallery
                renderLeftNav={renderLeftNav}
                renderRightNav={renderRightNav}
                renderFullscreenButton={renderFullscreenButton}
                {...galleryOptions}
                items={sightGalleryDataAdapter(data)}
                onSlide={(id) => onSlideChange(id)}
            />
            <Box my={3}>
                <Raiting sightId={sightId}/>
            </Box>
        </>
    );
}

SightGallery.propTypes = {
    sightId: PropTypes.string,
    title: PropTypes.string,
    onSlideChange: PropTypes.func,
    data: PropTypes.arrayOf(
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
};

export default SightGallery;
