import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import * as countryActions from '../../actions/countryActions';
import * as currencyActions from '../../actions/currencyActions';
import * as weatherActions from '../../actions/weatherActions';
import Page from './Page';
import LoadingPage from '../LoadingPage';

const PageContainer = ({ loader, locale = 'en', country, onLoadCountry, error, 
    onLoadCurrency, currency, onLoadWeather }) => {
    const { isoCode } = useParams();
    const history = useHistory();

    useEffect(() => {
        onLoadCountry(isoCode);
        onLoadCurrency();
        if (country) {
            const lat = country.capital.coordinates.lat;
            const lon = country.capital.coordinates.lon;
            onLoadWeather(lat, lon, locale);
        }        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale]);

    useEffect(() => {
        if (error) {
            history.push('/not-found');
        }
    }, [error, history]);

    return (
        <>
            {loader && <LoadingPage />}
            {!loader && !!country && <Page country={country} currency={currency} />}
        </>
    );
};

const mapStateToProps = (state) => ({
    loader: state.loader,
    country: state.country,
    locale: state.locale,
    error: state.error,
    currency: state.currency,
    weather: state.weather,
});

const mapDispatchToProps = (dispatch) => ({
    onLoadCountry: (isoCode) => dispatch(countryActions.loadCountryInfo(isoCode)),
    onLoadCurrency: () => dispatch(currencyActions.loadCurrency()),
    onLoadWeather: (lat, lon, lang) => dispatch(weatherActions.loadWeather(lat, lon, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
