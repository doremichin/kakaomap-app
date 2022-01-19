import React from 'react';
import styled from 'styled-components';

import AddressItem from '../../.shared/Item/AddressItem';
import { IAddressData } from '../../../interface/address.interface';

interface Props {
  data : IAddressData[]
}

function MainComponent({ data } : Props) {
  return (
    <Container>
      {
        data.map((item : IAddressData, index) => (
          <AddressItem data={item} key={index} />
        ))
      }
    </Container>
  );
}

const Container = styled.div`
  padding-top: 50px;
`;

export default MainComponent;
