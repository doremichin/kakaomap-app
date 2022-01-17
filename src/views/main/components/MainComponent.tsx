import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import AddressItem from "../../.shared/Item/AddressItem";
import {IAddressData} from "../../../interface/address.interface";

function MainComponent () {
    const currentAddress = useSelector((state : RootState) => state.address.currentAddress)
    return(
        <Container>
            {
                currentAddress.map((data : IAddressData) => (
                    <AddressItem data={data}/>
                ))
            }
        </Container>
    )
};

const Container = styled.div`
  padding-top: 50px;
`;

export default MainComponent;
