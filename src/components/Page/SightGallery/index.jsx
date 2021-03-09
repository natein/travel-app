import React from 'react';
import { galleryOptions, titleWrap, imagesMockup } from './constants';
import Box from '@material-ui/core/Box';
import ImageGallery from 'react-image-gallery';
import { sightGalleryDataAdapter } from './helpers';
import 'react-image-gallery/styles/css/image-gallery.css';

function SightGallery({ data: { sights: galleryData } }) {
    return (
        <>
            <Box {...titleWrap}>
                <h1 align="center">Достопримечательности</h1>
            </Box>
            <ImageGallery {...galleryOptions} items={sightGalleryDataAdapter(galleryData) || imagesMockup} />
        </>
    );
}

export default SightGallery;
