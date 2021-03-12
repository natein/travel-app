import { connect } from 'react-redux';
import WidgetWeather from './WidgetWeather';

const WidgetWeatherContainer = ({ weatherData, country }) => (
    <WidgetWeather weatherData={weatherData} country={country} />
);

const mapStateToProps = (state) => ({
    locale: state.locale,
    weatherData: state.weatherData,
    country: state.country,
});

export default connect(mapStateToProps)(WidgetWeatherContainer);
