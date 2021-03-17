import { connect } from 'react-redux';
import WidgetCurrency from './WidgetCurrency';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import LoadingPage from '../LoadingPage';

const WidgetCurrencyContainer = ({ currency, country }) => (
    <Box position="relative" minWidth="5rem" minHeight="5rem">
        {!currency && <LoadingPage />}
        {currency && <WidgetCurrency currency={currency} country={country} />}
    </Box>
);

WidgetCurrencyContainer.propTypes = {
    currency: PropTypes.shape({
        Valute: PropTypes.object.isRequired,
    }).isRequired,
    country: PropTypes.shape({
        currency: PropTypes.shape({
            code: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
};

const mapStateToProps = (state) => ({
    locale: state.locale,
    currency: state.currency,
    country: state.country,
});

export default connect(mapStateToProps)(WidgetCurrencyContainer);
