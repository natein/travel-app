import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import CountryMap from './CountryMap';
import PropTypes from 'prop-types';

const CountryMapContainer = ({ className, locale, capitalCoordinates, isoCode }) => {
    const { t } = useTranslation();
    return (
        <CountryMap
            locale={locale}
            capitalCoordinates={capitalCoordinates}
            isoCode={isoCode}
            className={className}
            title={t('labels.map')}
        />
    );
};

CountryMapContainer.propTypes = {
    locale: PropTypes.oneOf(['en', 'ru', 'uk']),
    className: PropTypes.string,
    isoCode: PropTypes.string.isRequired,
    capitalCoordinates: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired,
    }).isRequired,
};

CountryMapContainer.defaultProps = {
    locale: 'ru',
    className: ''
};

const mapStateToProps = (state) => ({
    isoCode: state.country.isoCode,
    locale: state.locale,
    capitalCoordinates: state.country.capital.coordinates,
});

export default connect(mapStateToProps)(CountryMapContainer);
