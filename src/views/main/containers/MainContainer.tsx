import React, { useEffect } from 'react';
import styled from 'styled-components';

import { getAddressCollection } from '../../../firebase/query';
import MainComponent from '../components/MainComponent';

function MainContainer() {
  useEffect(() => {
    getAddressCollection();
  });

  return (
    <Container>
      <MainComponent />
    </Container>
  );
}

const Container = styled.div`
`;

export default MainContainer;
