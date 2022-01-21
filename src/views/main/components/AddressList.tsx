import React from 'react';
import styled from 'styled-components';

import { IAddressData } from '../../../interface/address.interface';

interface Props {
  data : IAddressData[]
  children(item : IAddressData, index : number) : void
}

function AddressList({ data, children } : Props) {
  return (
    <Container>
      {
        data.map((item : IAddressData, index) => children(item, index))
      }
    </Container>
  );
}

const Container = styled.div`
  padding-top: 50px;
`;

export default AddressList;
