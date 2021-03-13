import { onError, setLoader } from './commonActions';
import * as userService from '../api/userservice';

export const createNewUser = (username, password, avatar) => (dispatch) => {
    dispatch(setLoader(true));
    return userService
        .createNewUser(username, password, avatar)
        .then((data) => dispatch({ type: 'USER', payload: data }))
        .catch((err) => dispatch(onError(err.response ? err.response.data : err)))
        .finally(() => dispatch(dispatch(setLoader(false))));
};

export const logout = () => ({ type: 'USER_LOGOUT' });

export const onLogin = (username, password) => (dispatch) => {
    dispatch(setLoader(true));
    return userService
        .login(username, password)
        .then((data) => dispatch({ type: 'USER', payload: data }))
        .catch((err) => dispatch(onError(err.response ? err.response.data : err)))
        .finally(() => dispatch(dispatch(setLoader(false))));
};
