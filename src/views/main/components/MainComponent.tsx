import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';
import AddressItem from '../../.shared/Item/AddressItem';
import { IAddressData } from '../../../interface/address.interface';

function MainComponent() {
  const currentAddress = useSelector((state : RootState) => state.common.AddressList);
  return (
    <Container>
      {
        currentAddress.map((data : IAddressData, index) => (
          <AddressItem data={data} key={index} />
        ))
      }
    </Container>
  );
}

const Container = styled.div`
  padding-top: 50px;
`;

export default MainComponent;
