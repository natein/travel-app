const commonReducer = (state, action) => {
    switch (action.type) {
        case 'LOADER': {
            return { ...state, loader: action.payload };
        }
        case 'ERROR': {
            return { ...state, loader: false, error: action.payload };
        }
        case 'COUNTRIES': {
            return { ...state, countries: [...action.payload] };
        }
        case 'FILTER_COUNTRIES': {
            const filteredCountries = state.countries.filter((country) => {
                const search = action.payload.toLowerCase();
                return (
                    country.name.toLowerCase().includes(search) || country.capital.name.toLowerCase().includes(search)
                );
            });
            return { ...state, filteredCountries, search: action.payload };
        }
        case 'COUNTRY': {
            return { ...state, country: action.payload };
        }
        case 'CURRENCY': {
            return { ...state, currency: action.payload };
        }
        case 'WEATHER': {
            return { ...state, weather: action.payload };
        }
        case 'LOCALE': {
            return { ...state, locale: action.payload };
        }
        case 'USER': {
            return { ...state, error: null, user: action.payload };
        }
        case 'USER_LOGOUT': {
            return { ...state, user: null };
        }
        case 'RATE': {
            return { ...state, };
        }
        default: {
            return state;
        }
    }
};

export default commonReducer;
