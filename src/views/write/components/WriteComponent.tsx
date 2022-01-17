import React from 'react';
import styled from 'styled-components';
import KakaoMap from "../../.shared/Map";
import WriteForm from "./writeForm/WriteForm";

function WriteComponent () {
    return(
        <Container>
            <KakaoMap/>
            <WriteForm/>
        </Container>
    )
};

const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default WriteComponent;
