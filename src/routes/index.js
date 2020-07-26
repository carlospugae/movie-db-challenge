import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Home from 'screens/home';
import MovieDetails from 'screens/movie-details';

import Header from 'components/Header';
import Footer from 'components/Footer';

const RoutesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #f7fafc;
`;

const Routes = () => (
  <RoutesContainer>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/details/:id">
          <MovieDetails />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </RoutesContainer>
);

export default Routes;
