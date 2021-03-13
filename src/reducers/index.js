const initialState = {
  countries: [],
  filterCount: [],
  country: null,
  locale: 'ru',
  searchString: '',
  loader: false,
  error: null,
  currency: null,
  weather: null
};

const commonReducer = (state = initialState, action) => {
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
      return { ...state, filterCount: [...action.payload] };
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
    default: {
      return state;
    }
  }
};

export default commonReducer;
