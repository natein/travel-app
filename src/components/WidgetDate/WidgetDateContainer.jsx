import { connect } from 'react-redux';
import WidgetDate from './WidgetDate';

const WidgetDateContainer = ({ locale, timezone }) => (
    <WidgetDate locale={locale} timezone={timezone} />
);

const mapStateToProps = (state) => ({
    locale: state.locale,
    timezone: state.country.timezone,
});

export default connect(mapStateToProps)(WidgetDateContainer);
