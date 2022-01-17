import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import styled from 'styled-components';
import SearchAddress from "./SearchAddress";
import {DefaultInput} from "../../../.shared/Styled/input.styled";

type Inputs = {
    detailedAddress: string,
    shippingAddress : string,
    shippingNotes : string

};

function WriteForm () {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    return(
        <Container>
            <SearchAddress/>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label>
                    <p>상세주소</p>
                    <Input type={'text'} {...register("detailedAddress")}/>
                </Label>
                <Label>
                    <p>배송지명</p>
                    <Input type={'text'} {...register("shippingAddress")}/>
                </Label>
                <Label>
                    <p>배송시 유의사항</p>
                    <Input type={'text'} {...register("shippingNotes")}/>
                </Label>
            </Form>
        </Container>
    )
};

const Container = styled.div`

`;
const Form = styled.form`
  
`;
const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  p {
    color: #333333;
  }
`;
const Input = styled(DefaultInput)`
  width: 500px;
  padding: 10px;
`;
export default WriteForm;
