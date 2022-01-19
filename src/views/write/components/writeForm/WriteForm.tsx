import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { DefaultInput } from '../../../.shared/Styled/input.styled';

import { DefaultButton } from '../../../.shared/Styled/button.styled';
import Map from '../../../.shared/Map/Map';
import SearchList from '../../../.shared/Map/SearchList';

type Inputs = {
    address : string,
    detailedAddress: string,
    shippingAddress : string,
    shippingNotes : string
};
interface Props {
  onSubmit(data : any) : Promise<any>
  defaultValue : string
}

function WriteForm({ onSubmit, defaultValue } : Props) {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm<Inputs>();

  return (
    <Container>
      <MapSection>
        <Map />
        <SearchList />
      </MapSection>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <p>주소</p>
          <Input disabled type="text" {...register('address')} defaultValue={defaultValue} />
        </Label>
        <Label>
          <p>상세주소</p>
          <Input type="text" {...register('detailedAddress')} />
        </Label>
        <Label>
          <p>배송지명</p>
          <Input type="text" {...register('shippingAddress')} />
        </Label>
        <Label>
          <p>배송시 유의사항</p>
          <Input type="text" {...register('shippingNotes')} />
        </Label>
        <Button>등록하기</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`

`;
const MapSection = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const Form = styled.form`
  
`;
const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  p {
    color: #333333;
    font-size: 14px;
    margin-bottom: 5px;
  }
`;
const Input = styled(DefaultInput)`
  width: 700px;
  padding: 10px;
`;
const Button = styled(DefaultButton)`
  padding: 10px 20px;
  background-color: rgb(52,120,246);
  font-size: 16px;
  color: #fff;
  border-radius: 5px;
`;

export default WriteForm;
