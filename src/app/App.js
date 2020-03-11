import React from 'react';
import Home from 'app/pages/home/Home';
import Rockets from 'app/pages/rockets/Rockets';
import NotFound from 'app/pages/not-found/NotFound';
import { ReactLogo, Footer } from 'app/components';
import { StyledApp } from 'app/styles/SharedStyles';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export const App = props => {
  return (
    <>
      <StyledApp>
        <ReactLogo />
        <Router>
          <Switch>
            <Route path="/rockets" component={Rockets} />
            <Redirect from="/rocket" to="/rockets" />
            <Route path="/" exact component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </StyledApp>
      <Footer />
    </>
  );
};

export default App;
