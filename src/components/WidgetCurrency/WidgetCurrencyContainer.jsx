import { connect } from 'react-redux';
import WidgetCurrency from './WidgetCurrency';

const WidgetCurrencyContainer = ({ currency }) => (
    <WidgetCurrency currency={currency} />
);

const mapStateToProps = (state) => ({
    locale: state.locale,
    currency: state.currency,
});

export default connect(mapStateToProps)(WidgetCurrencyContainer);
