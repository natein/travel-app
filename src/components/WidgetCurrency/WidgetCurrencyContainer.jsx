import { connect } from 'react-redux';
import WidgetCurrency from './WidgetCurrency';

const WidgetCurrencyContainer = ({ currency, country }) => (
    <WidgetCurrency currency={currency} country={country} />
);

const mapStateToProps = (state) => ({
    locale: state.locale,
    currency: state.currency,
    country: state.country,
});

export default connect(mapStateToProps)(WidgetCurrencyContainer);
