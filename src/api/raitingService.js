import axios from 'axios';
const baseUrl = process.env.REACT_APP_API || '';

export const rate = (isoCode, id, username, rating) => {
    const url = `${baseUrl}/countries/${isoCode}/sights/${id}/rate`;
    return axios
        .post(
            url,
            {
                username,
                rate: rating,
            },
            { withCredentials: true },
        )
        .then((response) => response.data)
        .catch((err) => {
            console.log(err.response);
        });
};