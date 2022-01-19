import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import MainComponent from '../components/MainComponent';
import { RootState } from '../../../redux/store';
import { getAddress } from '../services/getAddress';
import AddPlease from '../components/item/AddPlease';

function MainContainer() {
  const dispatch = useDispatch();
  const addressData = useSelector((state : RootState) => state.common.addressList);
  const initialized = useSelector((state : RootState) => state.common.initialized);
  useEffect(() => {
    dispatch(getAddress('address'));
  }, []);
  if (addressData.length === 0 && !initialized) return <Loading>...</Loading>;
  if (addressData.length === 0 && initialized) return <AddPlease />;

  return (
    <Container>
      <MainComponent data={addressData} />
    </Container>
  );
}

const Container = styled.div`
`;
const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default MainContainer;
