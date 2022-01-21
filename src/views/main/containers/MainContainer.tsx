import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import AddressList from '../components/AddressList';
import { RootState } from '../../../redux/store';
import { getAddress } from '../services/getAddress';
import AddPlease from '../components/item/AddPlease';
import AddressItem from '../components/item/AddressItem';
import { deleteAddressDocument } from '../../../firebase/document';
import { deleteCurrentAddress } from '../../../redux/common/slice';

function MainContainer() {
  const dispatch = useDispatch();
  const { addressList, initialized } = useSelector((state : RootState) => ({
    addressList: state.common.addressList,
    initialized: state.common.initialized,
  }));

  useEffect(() => {
    dispatch(getAddress('address'));
  }, []);

  if (!initialized) return <Loading>...</Loading>;
  if (addressList.length === 0) return <AddPlease />;

  const handleDelete = async (id : string) => {
    if (confirm('주소를 삭제 하시겠어요?')) {
      await deleteAddressDocument('address', id);
      dispatch(deleteCurrentAddress(id));
    }
  };
  return (
    <Container>
      <AddressList data={addressList}>
        {(item, index) => <AddressItem data={item} key={index} onDelete={() => handleDelete(item.id)} />}
      </AddressList>
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
