import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import * as countryActions from '../../actions/countryActions';
import Page from './Page';

const PageContainer = ({ loader, locale = 'en', country, onLoadCountry, error }) => {
    const { isoCode } = useParams();
    const history = useHistory();

    useEffect(() => {
        onLoadCountry(isoCode);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (error) {
            history.push('/not-found');
        }
    }, [error, history]);

    return (
        <>
            {loader && <h1>Loading data</h1>}
            {!loader && !!country && <Page country={country} />}
        </>
    );
};

const mapStateToProps = (state) => ({
    loader: state.loader,
    country: state.country,
    locale: state.locale,
    error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
    onLoadCountry: (isoCode) => dispatch(countryActions.loadCountryInfo(isoCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
