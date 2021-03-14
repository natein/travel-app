import { connect } from 'react-redux';
import WidgetDate from './WidgetDate';
import PropTypes from 'prop-types';

const WidgetDateContainer = ({ locale, timezone }) => (
    <WidgetDate locale={locale} timezone={timezone} />
);

WidgetDateContainer.propTypes = {
    locale: PropTypes.oneOf(['en', 'ru', 'uk']).isRequired,
    timezone: PropTypes.shape({
        name: PropTypes.string.isRequired,
        offset: PropTypes.string.isRequired
    }).isRequired
};

const mapStateToProps = (state) => ({
    locale: state.locale,
    timezone: state.country.timezone,
});

export default connect(mapStateToProps)(WidgetDateContainer);
