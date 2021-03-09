import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import * as countryActions from '../../actions/countryActions';
import Page from './Page';

const PageContainer = ({ loader, locale = 'en', country, onLoadCountry }) => {
    const { isoCode } = useParams();

    useEffect(() => {
        onLoadCountry(isoCode);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
});

const mapDispatchToProps = (dispatch) => ({
    onLoadCountry: (isoCode) => dispatch(countryActions.loadCountryInfo(isoCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
