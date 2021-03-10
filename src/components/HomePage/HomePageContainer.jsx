import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import * as countryActions from '../../actions/countryActions';
import HomePage from './HomePage';
import LoadingPage from '../LoadingPage';

const HomePageContainer = ({ loader, locale = 'en', countries, onLoadCountries }) => {
    const history = useHistory();

    useEffect(() => {
        onLoadCountries();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale]);

    const onPreview = useCallback((isoCode) => history.push(`/countries/${isoCode}`), [history]);

    return (
        <>
            {loader && <LoadingPage />}
            {!loader && countries.length > 0 && <HomePage countries={countries} onPreview={onPreview} />}
        </>
    );
};

const mapStateToProps = (state) => ({
    loader: state.loader,
    countries: state.countries,
    locale: state.locale,
});

const mapDispatchToProps = (dispatch) => ({
    onLoadCountries: () => dispatch(countryActions.loadCountries()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
