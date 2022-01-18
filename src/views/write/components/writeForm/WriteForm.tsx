import React  from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import styled from 'styled-components';
import {DefaultInput} from "../../../.shared/Styled/input.styled";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {setAddressDocument} from "../../../../firebase/query";
import {useHistory} from "react-router-dom";
import {DefaultButton} from "../../../.shared/Styled/button.styled";
import Map from "../../../.shared/Map/Map";


type Inputs = {
    address : string,
    detailedAddress: string,
    shippingAddress : string,
    shippingNotes : string
};

function WriteForm () {
    const { address_name }= useSelector((state : RootState) => state.common.SelectAddress);
    const history = useHistory();

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if(data.address.length > 0){
            const newData = {
                ...data,
            }
            await setAddressDocument(newData)
            history.push('/')
        }else {
            alert('올바른 주소를 입력해주세요.')
        }
    }

    return(
        <Container>
            <Map/>
            {/*<SearchAddress/>*/}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label>
                    <p>주소</p>
                    <Input type={'text'} {...register("address")} defaultValue={address_name} />
                </Label>
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
                <Button>등록하기</Button>
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
    font-size: 14px;
    margin-bottom: 5px;
  }
`;
const Input = styled(DefaultInput)`
  width: 500px;
  padding: 10px;
`;
const Button = styled(DefaultButton)`
  padding: 8px 12px;
  background-color: rgb(52,120,246);
  color: #fff;
  border-radius: 4px;
`;
export default WriteForm;
