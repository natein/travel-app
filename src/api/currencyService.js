import axios from 'axios';

const currencyUrl = process.env.REACT_APP_CURRENCY_URL || '';

export const getCurrency = () => {
  const url = `${currencyUrl}`;
  return axios
    .get(url)
    .then((response) => response.data);
};
