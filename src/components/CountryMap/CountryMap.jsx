import React, { useEffect, useRef, useState } from 'react';
import Box from '@material-ui/core/Box';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const CountryMap = ({ className, isoCode, capitalCoordinates, locale, title }) => {
    const mapContainer = useRef();
    const [lng, setLng] = useState(capitalCoordinates.lon);
    const [lat, setLat] = useState(capitalCoordinates.lat);
    const [zoom, setZoom] = useState(4);

    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom,
        });
        map.addControl(new mapboxgl.NavigationControl());

        map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(6));
            setLat(map.getCenter().lat.toFixed(6));
            setZoom(map.getZoom().toFixed(4));
        });

        map.on('load', () => {
            new mapboxgl.Marker().setLngLat([capitalCoordinates.lon, capitalCoordinates.lat]).addTo(map);
            map.addControl(new mapboxgl.FullscreenControl());
            map.addLayer(
                {
                    id: 'country-boundaries',
                    source: {
                        type: 'vector',
                        url: 'mapbox://mapbox.country-boundaries-v1',
                    },
                    'source-layer': 'country_boundaries',
                    type: 'fill',
                    paint: {
                        'fill-color': '#008080',
                        'fill-opacity': 0.4,
                    },
                },
                'country-label',
            );

            map.setLayoutProperty('country-label', 'text-field', ['get', `name_${locale !== 'uk' ? locale : 'en'}`]);

            map.setFilter('country-boundaries', ['in', 'iso_3166_1_alpha_3', isoCode]);
        });

        return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <Box my={3}>
                <ThemeProvider theme={theme}>
                    <Typography align="center" component="h1" variant="h4">
                        {title}
                    </Typography>
                </ThemeProvider>
            </Box>
            <Box className={`map-container ${className}`} ref={mapContainer} />
        </>
    );
};

CountryMap.propTypes = {
    locale: PropTypes.oneOf(['en', 'ru', 'uk']),
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    isoCode: PropTypes.string.isRequired,
    capitalCoordinates: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired,
    }).isRequired,
};

CountryMap.defaultProps = {
    locale: 'en',
    className: '',
};

export default CountryMap;
