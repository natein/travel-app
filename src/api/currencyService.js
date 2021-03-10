import axios from 'axios';

const currencyUrl = process.env.REACT_APP_CURRENCY_URL || '';
const currencyKey = process.env.REACT_APP_CURRENCY_KEY || '';

export const getCurrency = (currencySearch) => {
  const url = `${currencyUrl}?get=rates&pairs=${currencySearch}&key=${currencyKey}`;
  return axios
    .get(url)
    .then((response) => response.data);
};
