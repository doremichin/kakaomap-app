import React from 'react';
import styled from 'styled-components';
import {IAddressData} from "../../../interface/address.interface";
interface Props{
    data : IAddressData
}

function AddressItem ({data} : Props) {
    return(
        <Container>
            <Left>
                <Title>
                    {data.shippingAddress}
                </Title>
                <Address>
                    {data.address}
                    {data.detailedAddress}
                </Address>
                <Notes>
                    {data.shippingNotes}
                </Notes>
            </Left>
            <Right>
                1
            </Right>
        </Container>
    )
};

const Container = styled.div`
  border-radius: 16px;
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow:  0 1px 6px #ddd;
  padding: 20px;
  margin: 0 auto;
`;
const Left = styled.div`
  
`
const Title = styled.h4`
  margin-bottom: 8px;
`;
const Address = styled.div`
  color: #757575;
  font-size: 14px;
  margin-bottom: 8px;
`;
const Notes = styled.div`
  font-size: 14px;
  color: #333;
`;
const Right = styled.div`
  
`;

export default AddressItem;
