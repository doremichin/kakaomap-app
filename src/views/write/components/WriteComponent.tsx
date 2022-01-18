import React from 'react';
import styled from 'styled-components';

import WriteForm from './writeForm/WriteForm';

function WriteComponent() {
  return (
    <Container>
      <WriteForm />
    </Container>
  );
}

const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default WriteComponent;
