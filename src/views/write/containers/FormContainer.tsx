import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import WriteForm, { Inputs } from '../components/writeForm/WriteForm';
import { RootState } from '../../../redux/store';

import { setAddressDocument } from '../../../firebase/document';
import { resetAddressData } from '../../../redux/search/slice';

function FormContainer() {
  const { address_name } = useSelector((state : RootState) => state.search.selectAddress);
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (data : Inputs) => {
    if (address_name.length > 0) {
      await setAddressDocument('address', data);
      history.push('/');
    } else {
      alert('주소를 검색 후 넣어주세요:)');
    }
  };

  const reset = () => {
    dispatch(resetAddressData());
  };

  useEffect(() => () => {
    reset();
  }, []);

  return (
    <Container>
      <WriteForm onSubmit={onSubmit} value={address_name} />
    </Container>
  );
}

const Container = styled.div`

`;

export default FormContainer;
