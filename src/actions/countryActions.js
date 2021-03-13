import { setLoader, onError } from './commonActions';
import * as countryService from '../api/countryService';

export const loadCountries = () => (dispatch, getState) => {
    dispatch(setLoader(true));
    const { locale, search } = getState();
    return countryService
        .getCountries(locale)
        .then((data) => dispatch(onCountriesLoaded(data)))
        .then(() => dispatch(searchValue(search)))
        .catch((err) => dispatch(onError(err)))
        .finally(() => dispatch(dispatch(setLoader(false))));
};

export const onCountriesLoaded = (payload) => ({ type: 'COUNTRIES', payload });
export const onCountryLoaded = (payload) => ({ type: 'COUNTRY', payload });

export const loadCountryInfo = (isoCode) => (dispatch, getState) => {
    dispatch(setLoader(true));
    const { locale } = getState();
    return countryService
        .getCountryByIsoCode(isoCode, locale)
        .then((data) => dispatch(onCountryLoaded(data)))
        .catch((err) => dispatch(onError(err)))
        .finally(() => dispatch(dispatch(setLoader(false))));
};

export const searchValue = (search) => ({
    type: 'FILTER_COUNTRIES',
    payload: search
});
