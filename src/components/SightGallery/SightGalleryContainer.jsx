import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import SightGallery from './SightGallery';
import PropTypes from 'prop-types';
import * as raitingActions from '../../actions/ratingActions';

const SightGalleryContainer = ({ sights, ratingSlide, ratingInit }) => {
    React.useEffect(() => {
        ratingInit();
    }, [ratingInit]);

    const { t } = useTranslation();
    return <SightGallery onSlideChange={ratingSlide} title={t('labels.sights')} data={sights} />;
};

SightGalleryContainer.propTypes = {
    sights: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            rating: PropTypes.arrayOf(
                PropTypes.shape({
                    username: PropTypes.string.isRequired,
                    rate: PropTypes.number.isRequired,
                }),
            ),
        }),
    ).isRequired,
};

const mapStateToProps = (state) => ({
    sights: state.country.sights,
    data: state,
});

const mapDispatchToProps = (dispatch) => ({
    ratingInit: () => dispatch(raitingActions.ratingInit()),
    ratingSlide: (id) => dispatch(raitingActions.ratingSlide(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SightGalleryContainer);
