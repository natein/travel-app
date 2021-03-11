const initialState = {
  countries: [],
  country: null,
  locale: 'ru',
  searchString: '',
  loader: false,
  error: null,
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
      case 'COUNTRY': {
        return { ...state, country: action.payload };
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