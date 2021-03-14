import axios from 'axios';

const baseUrl = process.env.REACT_APP_API || '';

export const getCountries = (locale) => {
    const url = `${baseUrl}/countries?locale=${locale}`;
    return axios.get(url, { withCredentials: true }).then((response) => response.data);
};

export const getCountryByIsoCode = (isoCode, locale) => {
    const url = `${baseUrl}/countries/${isoCode}?locale=${locale}`;
    return axios.get(url, { withCredentials: true }).then((response) => response.data);
};
