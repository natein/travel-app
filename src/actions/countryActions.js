import { setLoader, onError } from './commonActions';
import { setSearchValue } from './actionSearch';
import * as countryService from '../api/countryService';

export const loadCountries = () => (dispatch, getState) => {
    dispatch(setLoader(true));
    const { locale, searchString } = getState();
    return countryService
        .getCountries(searchString, locale)
        .then((data) => dispatch(onCountriesLoaded(data)))
        .then(() => dispatch(searchValue('')))
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

export const searchValue = (search) => (dispatch, getState) => {
    const { countries } = getState();
    dispatch(setSearchValue(countries.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()))));
};
