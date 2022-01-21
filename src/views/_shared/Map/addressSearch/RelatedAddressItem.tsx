import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { setSelectAddress } from '../../../../redux/search/slice';
import { IRelatedAddress } from '../../../../interface/address.interface';

interface Props {
  data : IRelatedAddress
}
function RelatedAddressItem({ data } : Props) {
  const dispatch = useDispatch();
  const onClick = () => {
    if (data.address_type === 'zero-result') return;
    dispatch(setSelectAddress(data));
  };
  return (
    <Container onClick={onClick}>
      {data.address_name}
    </Container>
  );
}

const Container = styled.div`
  padding: 6px 10px;
  font-size: 14px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  border-bottom: 1px solid #eee;
`;

export default RelatedAddressItem;
