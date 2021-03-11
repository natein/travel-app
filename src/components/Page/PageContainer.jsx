import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import * as countryActions from '../../actions/countryActions';
import * as currencyActions from '../../actions/currencyActions';
import Page from './Page';
import LoadingPage from '../LoadingPage';

const PageContainer = ({ loader, locale = 'en', country, onLoadCountry, error, onLoadCurrency, currency }) => {
    const { isoCode } = useParams();
    const history = useHistory();

    useEffect(() => {
        onLoadCountry(isoCode);
        onLoadCurrency();
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
});

const mapDispatchToProps = (dispatch) => ({
    onLoadCountry: (isoCode) => dispatch(countryActions.loadCountryInfo(isoCode)),
    onLoadCurrency: () => dispatch(currencyActions.loadCurrency())
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
