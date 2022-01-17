import React from 'react';
import styled from 'styled-components';
import KakaoMap from "../../.shared/Map";
import WriteComponent from "../components/WriteComponent";

function WriteContainer () {
    return(
        <Container>
            <KakaoMap/>
            <WriteComponent/>
        </Container>
    )
};

const Container = styled.div`

`;

export default WriteContainer;
