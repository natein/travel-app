import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Video from './Video';

const VideoContainer = ({video}) => {
    const { t } = useTranslation();
   return <Video title={t('labels.video')} video={video} />
};

const mapStateToProps = (state) => ({
    video: state.country.video,
});

export default connect(mapStateToProps)(VideoContainer);
