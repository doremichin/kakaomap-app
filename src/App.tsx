import React from 'react';
import styled from 'styled-components';

import Router from './Router';
import Header from './views/.shared/Header';
import { GlobalStyle } from './style/GlobalStyle';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Router />
    </Container>
  );
}

const Container = styled.div`

`;

export default App;
