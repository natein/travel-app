import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Video from './Video';

const VideoContainer = (video, error) => {
    const { t } = useTranslation();
   return <Video title={t('labels.video')} error={error} video={video} />
};

const mapStateToProps = (state) => ({
    video: state.country.video,
    error: state.error,
});

export default connect(mapStateToProps)(VideoContainer);
