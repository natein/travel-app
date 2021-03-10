import { connect } from 'react-redux';
import SightGallery from './SightGallery';

const SightGalleryContainer = (sights) => (
    <SightGallery title={'Достопримечательности'} data={sights} />
);

const mapStateToProps = (state) => ({
    sights: state.country.sights,
});

export default connect(mapStateToProps)(SightGalleryContainer);


// 