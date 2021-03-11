import * as currencyService from '../api/currencyService';

export const loadCurrency = () => (dispatch) => {
    return currencyService
        .getCurrency()
        .then((data) => dispatch(onCurrencyLoaded(data)))
};

export const onCurrencyLoaded = (payload) => ({ type: 'CURRENCY', payload });

