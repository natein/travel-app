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
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk, localStorageMiddleware));

const store = createStore(rootReducer, initialState, composedEnhancer);
export default store;
