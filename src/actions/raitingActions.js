import * as raitingService from '../api/raitingService';

export const rating = (isoCode, id, username, rating) => (dispatch) => {
    return raitingService
        .rate(isoCode, id, username, rating)
        .then(() => dispatch(raitingDone()));
};

export const raitingDone = () => ({ type: 'RATE' });