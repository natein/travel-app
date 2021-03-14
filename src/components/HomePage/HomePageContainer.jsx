import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import * as countryActions from '../../actions/countryActions';
import HomePage from './HomePage';
import LoadingPage from '../LoadingPage';
import { useTranslation } from 'react-i18next';
import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const EmptyList = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <h1>{t('labels.countriesNotFound')}</h1>
        </Box>
    );
};

const HomePageContainer = ({ loader, locale = 'en', filteredCountries, onLoadCountries }) => {
    const history = useHistory();

    useEffect(() => {
        onLoadCountries();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale]);

    const onPreview = useCallback((isoCode) => history.push(`/countries/${isoCode}`), [history]);

    return (
        <>
            {loader && <LoadingPage />}
            {!loader && filteredCountries.length === 0 && <EmptyList />}
            {!loader && filteredCountries.length > 0 && (
                <HomePage countries={filteredCountries} onPreview={onPreview} />
            )}
        </>
    );
};

HomePageContainer.propTypes = {
    loader: PropTypes.bool,
    locale: PropTypes.oneOf(['en', 'uk', 'ru']),
    onLoadCountries: PropTypes.func.isRequired,
    filteredCountries: PropTypes.arrayOf(
        PropTypes.shape({
            isoCode: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            video: PropTypes.string.isRequired,
            currency: PropTypes.shape({
                code: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
            }).isRequired,
            timezone: PropTypes.shape({
                name: PropTypes.string.isRequired,
                offset: PropTypes.string.isRequired,
            }).isRequired,
            capital: PropTypes.shape({
                name: PropTypes.string.isRequired,
                coordinates: PropTypes.shape({
                    lat: PropTypes.number.isRequired,
                    lon: PropTypes.number.isRequired,
                }).isRequired,
            }).isRequired,
            sights: PropTypes.arrayOf(
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
        }),
    ),
};

HomePageContainer.defaultProps = {
    loader: false,
    locale: 'ru',
    filteredCountries: [],
};

const mapStateToProps = (state) => ({
    loader: state.loader,
    filteredCountries: state.filteredCountries,
    locale: state.locale,
});

const mapDispatchToProps = (dispatch) => ({
    onLoadCountries: () => dispatch(countryActions.loadCountries()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
