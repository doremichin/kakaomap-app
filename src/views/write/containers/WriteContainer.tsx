import React from 'react';
import styled from 'styled-components';

import MapSearch from '../components/MapSearch';
import FormContainer from './FormContainer';

function WriteContainer() {
  return (
    <Container>
      <MapSearch />
      <FormContainer />
    </Container>
  );
}

const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default WriteContainer;
