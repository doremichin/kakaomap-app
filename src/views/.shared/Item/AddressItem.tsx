import React from 'react';
import styled from 'styled-components';
import {IAddressData} from "../../../interface/address.interface";
import { MdCancel } from 'react-icons/md';
import {deleteAddressDocument} from "../../../firebase/query";
import {useDispatch} from "react-redux";
import { deleteCurrentAddress } from '../../../redux/common/slice';
interface Props{
    data : IAddressData
}

function AddressItem ({data} : Props) {
    const dispatch = useDispatch();

    const deleteClick = async () => {
        if(confirm('주소를 삭제 하시겠어요?')){
            await deleteAddressDocument(data.id)
            dispatch(deleteCurrentAddress(data.id))
        }
    }

    return(
        <Container>
            <Left>
                <Title>
                    {data.shippingAddress}
                </Title>
                <Address>
                    {data.address}&nbsp;/&nbsp;
                    {data.detailedAddress}
                </Address>
                <Notes>
                    {data.shippingNotes}
                </Notes>
            </Left>
            <Right>
                <DeleteButton>
                    <MdCancel onClick={deleteClick}/>
                </DeleteButton>
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
  margin: 0 auto 20px;
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
const DeleteButton = styled.div`
  font-size: 20px;
  color: rgb(52,120,246);
  cursor: pointer;
  padding: 5px;
`;

export default AddressItem;
