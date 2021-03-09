import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Home from './HomePage';
import Country from './Page';
import Header from './Header';
import Footer from './Footer';
import NotFound from './NotFound';
import { Provider } from 'react-redux';

import store from '../store/store';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <CssBaseline />
                <Container>
                    <Header />
                    <Switch>
                        <Route path="/countries" component={Home} exact />
                        <Route path="/countries/:isoCode" component={Country} />
                        <Route exact path="/">
                            <Redirect to="/countries" />
                        </Route>

                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    {/* <Footer /> */}
                </Container>
            </Router>
        </Provider>
    );
}
export default App;
