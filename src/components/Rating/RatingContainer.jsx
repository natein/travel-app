import { connect } from 'react-redux';
import Rating from './Rating';
import PropTypes from 'prop-types';
import * as ratingActions from '../../actions/ratingActions';

const RatingContainer = ({ user, users, ratingHandle, addStarHandle, average, votesCount }) => {
    return (
        <Rating
            setPostRate={ratingHandle}
            addStar={addStarHandle}
            authUser={user}
            users={users}
            average={average}
            votesCount={votesCount}
        />
    );
};

const mapStateToProps = (state) => ({
    average: state.rating.average,
    votesCount: state.rating.votesCount,
    user: state.user,
    users: state.rating.users,
});

const mapDispatchToProps = (dispatch) => ({
    raitingHandle: (isoCode, id, username, rating) => dispatch(ratingActions.rating(isoCode, id, username, rating)),
    addStarHandle: (rating) => dispatch(ratingActions.addStar(rating)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingContainer);
