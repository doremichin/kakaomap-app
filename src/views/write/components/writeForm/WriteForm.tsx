import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { DefaultInput } from '../../../_shared/Styled/input.styled';

import { DefaultButton } from '../../../_shared/Styled/button.styled';
import FormMessage from '../../../_shared/Message/FormMessage';

export type Inputs = {
    address : string,
    detailedAddress: string,
    shippingAddress : string,
    shippingNotes : string
};
interface Props {
  onSubmit(data : Inputs) : Promise<any>
  value : string
}

function WriteForm({ onSubmit, value } : Props) {
  const {
    register, handleSubmit, formState: { errors }, setValue, reset,
  } = useForm<Inputs>();

  useEffect(() => {
    setValue('address', value);
    reset({
      address: value,
      detailedAddress: '',
      shippingAddress: '',
      shippingNotes: '',
    });
  }, [value]);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <p>주소</p>
          <Input
            disabled
            type="text"
            {...register('address')}
          />
        </Label>
        <Label>
          <p>상세주소</p>
          <Input
            type="text"
            {...register('detailedAddress', {
              required: true,
            })}
          />
          <FormMessage error={errors?.detailedAddress?.type} />
        </Label>
        <Label>
          <p>배송지명</p>
          <Input
            type="text"
            {...register('shippingAddress', {
              required: true,
            })}
          />
          <FormMessage error={errors?.shippingAddress?.type} />
        </Label>
        <Label>
          <p>배송시 유의사항</p>
          <Input
            type="text"
            {...register('shippingNotes', {
              required: true,
            })}
          />
          <FormMessage error={errors?.shippingNotes?.type} />
        </Label>
        <Button>등록하기</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`

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
