import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';

import HomePage from '../views/HomePage/Loadable';

import GlobalStyle from '../global-styles';

const NoMatch = () => (
  <div>
    <center>
      <h1>404 Error: Page Not Found</h1>
      <h1>:o</h1>
      <h2>Oops, this page doesn&#39;t exist!</h2>
      <h3>
        Maybe we&#39;ll make it one day, but for now try{' '}
        <Link to="/">returning to our Home Page</Link>.
      </h3>
    </center>
  </div>
);

const AppWrapper = styled.div`
  max-width: 100vw;
  margin: 0 0;
  display: flex;
  min-height: 100%;
  padding: 0 0;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route component={NoMatch} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
