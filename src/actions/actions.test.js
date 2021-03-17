import createNewUser from './userActions'
import onLogin from './userActions'
import onAutoLogin from './userActions'
import onLogout from './userActions'
import loadCountries from './countryActions'
import loadCountryInfo from './countryActions'

describe('Actions compiling', () => {
    test('compiling user actions goes as expected', () => {
        expect(() => createNewUser()).toThrow();
        expect(() => createNewUser()).toThrow(Error);

        expect(() => onLogin()).toThrow();
        expect(() => onLogin()).toThrow(Error);

        expect(() => onAutoLogin()).toThrow();
        expect(() => onAutoLogin()).toThrow(Error);

        expect(() => onLogout()).toThrow();
        expect(() => onLogout()).toThrow(Error);
    });
    
    test('compiling countries actions goes as expected', () => {
        expect(() => loadCountries()).toThrow();
        expect(() => loadCountries()).toThrow(Error);
        
        expect(() => loadCountryInfo()).toThrow();
        expect(() => loadCountryInfo()).toThrow(Error);
    });
});