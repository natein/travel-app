import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Home from './HomePage';
import Country from './Page';
import Header from './Header';
import Footer from './Footer';
import NotFound from './NotFound';
import LoginPage from './LoginPage';
import { Provider } from 'react-redux';

import store from '../store/store';
import { Box, makeStyles } from '@material-ui/core';
import SignupPage from './LoginPage/SignupPage';

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    mainContent: {
        marginTop: theme.spacing(12),
        marginBottom: theme.spacing(4),
        flexGrow: 1,
        position: 'relative',
    },
    footer: {
        flex: '0 0 auto',
    },
}));

function App() {
    const classes = useStyles();
    return (
        <Suspense fallback={"loading..."}>
            <Provider store={store}>
                <Router>
                    <CssBaseline />
                    <Box component="div" className={classes.rootContainer}>
                        <Header />
                        <Container component="main" className={classes.mainContent}>
                            <Switch>
                                <Route path={['/countries', '/']} component={Home} exact />
                                <Route path="/countries/:isoCode" component={Country} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/sign-up" component={SignupPage} />
                                <Route path="*" component={NotFound} />
                            </Switch>
                        </Container>
                        <Footer className={classes.footer} />
                    </Box>
                </Router>
            </Provider>
        </Suspense>
    );
}
export default App;
