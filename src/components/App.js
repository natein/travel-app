import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Home from './HomePage';
import Country from './Page';
import Header from './Header';
import Footer from './Footer';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
        <CssBaseline />
        <Container>
          <Header />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/country/:isoCode' component={Country} />
            <Route path="*"><NotFound /></Route>
          </Switch>
          <Footer />
        </Container>
    </Router>
  );
}
export default App;
