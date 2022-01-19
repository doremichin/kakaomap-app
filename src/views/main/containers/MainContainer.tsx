import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';

import MainComponent from '../components/MainComponent';
import { getAddress } from '../services/getAddress';

function MainContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddress('address'));
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
