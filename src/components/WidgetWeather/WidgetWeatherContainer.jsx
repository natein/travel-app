import { connect } from 'react-redux';
import WidgetWeather from './WidgetWeather';

const WidgetWeatherContainer = ({ weather, country }) => (
    <WidgetWeather weather={weather} country={country} />
);

const mapStateToProps = (state) => ({
    locale: state.locale,
    weather: state.weather,
    country: state.country,
});

export default connect(mapStateToProps)(WidgetWeatherContainer);
