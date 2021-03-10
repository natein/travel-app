import React from 'react';
import { galleryOptions } from './constants';
import ImageGallery from 'react-image-gallery';
import { sightGalleryDataAdapter } from '../../../helpers';
import 'react-image-gallery/styles/css/image-gallery.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

import { makeStyles } from '@material-ui/core';

function SightGallery({ title, data: { sights: galleryData } }) {
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
    }));

    const classes = useStyles();

    function renderLeftNav(onClick, disabled) {
        return (
            <button className="image-gallery-icon image-gallery-left-nav" disabled={disabled} onClick={onClick}>
                <NavigateBeforeIcon className={classes.icon} />
            </button>
        );
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
            <h1 align="center">{title}</h1>
            <ImageGallery
                renderLeftNav={renderLeftNav}
                renderRightNav={renderRightNav}
                renderFullscreenButton={renderFullscreenButton}
                {...galleryOptions}
                items={sightGalleryDataAdapter(galleryData)}
            />
        </>
    );
}
export default SightGallery;
