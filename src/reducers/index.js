import { averageRaiting, hasUser } from '../helpers';

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
        case 'RATING_INIT': {
            const [sight] = state.country.sights
            const { rating, id } = sight;
            const average = averageRaiting(rating);
            const votesCount = rating.length;
            return { ...state, rating: { id, average, votesCount, users: rating } };
        }
        case 'RATING_SLIDE': {
            const sight = state.country.sights[action.id]
            const { rating, id } = sight;
            const average = averageRaiting(rating);
            const votesCount = rating.length;
            return { ...state, rating: { id, average, votesCount, users: rating } };
        }
        case 'ADD_STAR': {
            const sightIdx = state.country.sights.findIndex((e) => e.id === state.rating.id);
            const sight = state.country.sights[sightIdx];
            const { id } = sight;

            if (hasUser(sight.rating, action.payload.username)) {
                const rateIdx = sight.rating.findIndex((e) => e.username === action.payload.username)
                sight.rating[rateIdx].rate = action.payload.rate;
            } else {
                sight.rating = [...sight.rating, action.payload]
            }

            const average = averageRaiting(sight.rating);
            const votesCount = sight.rating.length;

            return { ...state, rating: { id, average, votesCount, users: sight.rating } };
        }

        default: {
            return state;
        }
    }
};

export default commonReducer;
