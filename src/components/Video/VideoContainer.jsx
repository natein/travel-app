import { connect } from 'react-redux';
import Video from './Video';

const VideoContainer = (video) => <Video title={'Видео'} video={video} />;

const mapStateToProps = (state) => ({
    video: state.country.video,
});

export default connect(mapStateToProps)(VideoContainer);
