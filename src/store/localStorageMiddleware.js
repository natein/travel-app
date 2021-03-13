const localStorageMiddleware = (getState) => (next) => (action) => {
    if (action.type === 'LOCALE') {
        localStorage.setItem('locale', action.payload);
    }
    return next(action);
};

export default localStorageMiddleware;
