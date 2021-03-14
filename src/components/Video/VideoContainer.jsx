import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Video from './Video';
import PropTypes from 'prop-types';

const VideoContainer = ({video, error}) => {
    const { t } = useTranslation();
   return <Video title={t('labels.video')} error={error} video={video} />
};

VideoContainer.propTypes = {
    video: PropTypes.string.isRequired,
    error: PropTypes.string
};

const mapStateToProps = (state) => ({
    video: state.country.video,
    error: state.error,
});

export default connect(mapStateToProps)(VideoContainer);
