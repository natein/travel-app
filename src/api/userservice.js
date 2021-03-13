import axios from 'axios';

const baseUrl = process.env.REACT_APP_API || '';

export const createNewUser = (username, password, avatar) => {
    const url = `${baseUrl}/users`;
    return axios
        .post(url, {
            username,
            password,
            logo: avatar,
        })
        .then((response) => response.data)
        .catch((err) => {
            console.log(err.response);
            if (err.response?.status === 413) {
                throw new Error('Image avatar is too high. Please choose smaller image');
            }
            throw err;
        });
};

export const login = (username, password) => {
    const url = `${baseUrl}/users/${username}`;
    return axios
        .post(url, {
            username,
            password,
        })
        .then((response) => response.data);
};
