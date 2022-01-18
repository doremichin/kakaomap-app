import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { searchAddress } from '../../../../redux/search/slice';
import { DefaultInput } from '../../../.shared/Styled/input.styled';

function SearchAddress() {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const onChange = (e : any) => {
    setValue(e.target.value);
  };

  const onSubmit = (e : any) => {
    e.preventDefault();
    dispatch(searchAddress(value));
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Label>
          <p>주소 입력</p>
          <Input type="text" onChange={onChange} />
        </Label>
        <Button>주소 확인</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 20px;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  align-items: flex-end;
`;
const Label = styled.label`
  flex: 1;
  p {
    color: #333333;
    font-size: 14px;
    margin-bottom: 5px;
  }
`;
const Input = styled(DefaultInput)`
  width: 100%;
  padding: 10px;
  border-right: none;
`;
const Button = styled.button`
  height: 37px;
  border: 1px solid #e0e0e0;
  background-color: #e0e0e0;
  padding: 5px;
  cursor: pointer;
  color: #333;
  
`;
export default SearchAddress;
