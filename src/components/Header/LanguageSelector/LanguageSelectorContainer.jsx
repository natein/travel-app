import { connect } from 'react-redux';
import * as commonActions from '../../../actions/commonActions';
import LanguageSelector from './LanguageSelector';
import PropTypes from 'prop-types';

const LanguageSelectorContainer = ({ locale = 'ru', onLocaleChange, className }) => {
    return <LanguageSelector currentLocale={locale} onLocaleChange={onLocaleChange} className={className} />;
};

LanguageSelectorContainer.propTypes = {
    currentLocale: PropTypes.oneOf(['en', 'uk', 'ru']),
    onLocaleChange: PropTypes.func.isRequired,
};

LanguageSelectorContainer.defaultProps = {
    currentLocale: 'ru',
};

const mapStateToProps = (state) => ({
    locale: state.locale,
});

const mapDispatchToProps = (dispatch) => ({
    onLocaleChange: (locale) => dispatch(commonActions.onLocaleChange(locale)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelectorContainer);
