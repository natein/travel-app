import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import localStorageMiddleware from './localStorageMiddleware';

const initialState = {
    countries: [],
    search: '',
    filteredCountries: [],
    country: null,
    locale: localStorage.getItem('locale') || 'ru',
    loader: true,
    error: null,
    currency: null,
    weather: null,
    user: null,
    rating: {
        id: null,
        average: 0,
        votesCount: 0,
    },
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk, localStorageMiddleware));

const store = createStore(rootReducer, initialState, composedEnhancer);
export default store;
