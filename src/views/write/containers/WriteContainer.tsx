import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { RootState } from '../../../redux/store';
import WriteForm from '../components/writeForm/WriteForm';
import { setAddressDocument } from '../../../firebase/document';
import { setInitialAddress } from '../../../redux/search/slice';

function WriteContainer() {
  const { address_name } = useSelector((state : RootState) => state.common.selectAddress);
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (data : any) => {
    if (address_name.length > 0) {
      const newData = {
        ...data,
        address: address_name,
      };
      await setAddressDocument('address', newData);
      history.push('/');
    } else {
      alert('올바른 주소를 입력해주세요.');
    }
  };
  useEffect(() => () => {
    dispatch(setInitialAddress([]));
  }, []);

  return (
    <Container>
      <WriteForm onSubmit={onSubmit} defaultValue={address_name} />
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
