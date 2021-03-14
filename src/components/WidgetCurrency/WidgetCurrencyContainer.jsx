import { connect } from 'react-redux';
import WidgetCurrency from './WidgetCurrency';
import PropTypes from 'prop-types';

const WidgetCurrencyContainer = ({ currency, country }) => (
    <WidgetCurrency currency={currency} country={country} />
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
