import React from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import { setSelectAddress } from '../../../redux/common/slice';

function RelatedAddressItem ({data} : any) {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(setSelectAddress(data))
    }
    return(
        <Container onClick={onClick}>
            {data.address_name}
        </Container>
    )
};

const Container = styled.div`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  border-bottom: 1px solid #eee;
`;

export default RelatedAddressItem;

