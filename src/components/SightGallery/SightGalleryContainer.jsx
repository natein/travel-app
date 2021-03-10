import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import SightGallery from './SightGallery';

const SightGalleryContainer = (sights) => {
    const { t } = useTranslation();
    return <SightGallery title={t('labels.sights')} data={sights} />
};

const mapStateToProps = (state) => ({
    sights: state.country.sights,
});

export default connect(mapStateToProps)(SightGalleryContainer);
