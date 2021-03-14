import reducer from '../reducers';

describe('Reducer', () => {
    test('when loader set to true', () => {
        const action = { type: 'LOADER', payload: true };
        const newState = reducer({ loader: false }, action);

        expect(newState.loader).toBeTruthy();
    });

    test('when loader set to false', () => {
        const action = { type: 'LOADER', payload: false };
        const newState = reducer({ loader: true }, action);

        expect(newState.loader).toBeFalsy();
    });

    test('should not change state in case unsupported action provided', () => {
        const state = {
            countries: [],
            search: '',
            filteredCountries: [],
            country: null,
            locale: 'ru',
            loader: true,
            error: null,
            currency: null,
            weather: null,
            user: null,
        };

        const action = { type: 'UNSUPPORTED', payload: 'test' };

        const newState = reducer(state, action);

        expect(newState).toEqual(state);
    });

    test('when countries list action is triggered then state updated', () => {
        const state = {
            countries: [],
            search: '',
            filteredCountries: [],
            country: null,
            locale: 'ru',
            loader: true,
            error: null,
            currency: null,
            weather: null,
            user: null,
        };

        const country = {
            isoCode: 'FRA',
            name: 'Франция',
            description:
                'Фра́нция, официальное название — Францу́зская Респу́блика, — трансконтинентальное государство, включающее основную территорию в Западной Европе и ряд заморских регионов и территорий. Столица — Париж. Девиз Республики — «Свобода, равенство, братство», её принцип — правление народа, народом и для народа.',
            image:
                'https://s.france24.com/media/display/463c50cc-78bb-11e9-a9bf-005056a964fe/w:980/p:16x9/paris_tourism_-_eiffel_tower.webp',
            video: 'https://www.youtube.com/watch?v=56bWMAEvSdA',
            currency: { _id: '6045ee1b19bee44c58bafa84', code: 'EUR', name: 'Евро' },
            timezone: { _id: '6045ee1b19bee44c58bafa89', name: 'Europe/Paris', offset: '+0100' },
            capital: {
                _id: '6045ee1b19bee44c58bafa8a',
                name: 'Париж',
                coordinates: { _id: '6045ee1b19bee44c58bafa8b', lat: 48.8566969, lon: 2.3514616 },
            },
        };

        const action = { type: 'COUNTRIES', payload: [country] };

        const newState = reducer(state, action);

        expect(newState.countries).toContain(country);
    });

    test('when search string provided then country list will be filtered', () => {
        const action = { type: 'FILTER_COUNTRIES', payload: 'test' };
        const countryMatch = { name: 'someTextTESTandrest', capital: { name: 'noMatchInCapitalname' } };
        const cityMatch = { name: 'notMatchInCountryName', capital: { name: 'someTESTcapitalName' } };
        const noMatch = { name: 'France', capital: { name: 'Paris' } };

        const newState = reducer({ countries: [countryMatch, cityMatch, noMatch] }, action);

        expect(newState.countries).toEqual([countryMatch, cityMatch, noMatch]);
        expect(newState.filteredCountries).toContain(countryMatch, cityMatch);
    });
});
