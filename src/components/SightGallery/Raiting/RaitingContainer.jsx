import { connect } from 'react-redux';
import Raiting from './Raiting';
import PropTypes from 'prop-types';
import * as raitingActions from '../../../actions/raitingActions';

const RaitingContainer = ({ sights, user, sightId, raitingHandle }) => {
    return <Raiting rate={raitingHandle} user={user} sights={sights} sightId={sightId} />;
};

RaitingContainer.propTypes = {
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
    raitingHandle: PropTypes.func.isRequired,
    sightId: PropTypes.number,
};
const mapStateToProps = (state) => ({
    sights: state.country.sights,
    user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    raitingHandle: (isoCode, id, username, rating) => dispatch(raitingActions.rating(isoCode, id, username, rating)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RaitingContainer);
