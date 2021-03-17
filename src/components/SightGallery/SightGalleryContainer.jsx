import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import SightGallery from './SightGallery';
import PropTypes from 'prop-types';

const SightGalleryContainer = ({sights, onSlideChangeHandle}) => {
    const { t } = useTranslation();
    return <SightGallery onSlideChange = {onSlideChangeHandle} title={t('labels.sights')} data={sights} />;
};

SightGalleryContainer.propTypes = {
    sights: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string.isRequired,
            rate: PropTypes.number.isRequired
        }))
    })).isRequired,
};

const mapStateToProps = (state) => ({
    sights: state.country.sights,
});

export default connect(mapStateToProps)(SightGalleryContainer);


