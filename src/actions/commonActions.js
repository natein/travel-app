export const setLoader = (payload) => ({ type: 'LOADER', payload });

export const onError = (payload) => ({ type: 'ERROR', payload: payload.message });
