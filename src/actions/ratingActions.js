import * as raitingService from '../api/raitingService';

export const rating = (isoCode, id, username, rating) => (dispatch) => {
    return raitingService
        .rate(isoCode, id, username, rating)
};

export const ratingInit = () => ({ type: 'RATING_INIT' });
export const ratingSlide = (payload) => ({ type: 'RATING_SLIDE', id: payload });
export const addStar = (payload) => ({ type: 'ADD_STAR', payload });
