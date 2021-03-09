import axios from 'axios';

const baseUrl = process.env.REACT_APP_API || '';

export const getCountries = (search, locale) => {
    const url = `${baseUrl}/countries?locale=${locale}&search=${search}`;
    return axios
        .get(url)
        .then((response) => response.data);
};

export const getCountryByIsoCode = (isoCode, locale) => {
    const url = `${baseUrl}/countries/${isoCode}?locale=${locale}`;
    return axios
        .get(url)
        .then((response) => response.data);
};