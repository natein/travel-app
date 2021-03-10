import { setLoader, onError } from './commonActions';
import * as currencyService from '../api/currencyService';

export const loadCurrency = () => (dispatch, getState) => {
    dispatch(setLoader(true));
    const { currencySearch } = getState();
    return currencyService
        .getCurrency(currencySearch)
        .then((data) => dispatch(onCurrencyLoaded(data)))
        .catch((err) => dispatch(onError(err)))
        .finally(() => dispatch(dispatch(setLoader(false))));
};

export const onCurrencyLoaded = (payload) => ({ type: 'CURRENCY', payload });

