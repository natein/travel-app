import { connect } from 'react-redux';
import * as commonActions from '../../../actions/commonActions';
import LanguageSelector from './LanguageSelector';

const LanguageSelectorContainer = ({ locale = 'en', onLocaleChange, className }) => {
    return <LanguageSelector currentLocale={locale} onLocaleChange={onLocaleChange} className={className}/>;
};

const mapStateToProps = (state) => ({
    locale: state.locale,
});

const mapDispatchToProps = (dispatch) => ({
    onLocaleChange: (locale) => dispatch(commonActions.onLocaleChange(locale)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelectorContainer);
