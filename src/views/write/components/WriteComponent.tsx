import React from 'react';
import styled from 'styled-components';

function WriteComponent () {
    return(
        <Container>
            <Input type={'text'}/>
        </Container>
    )
};

const Container = styled.div`

`;
const Input = styled.input`
  width: 500px;
  padding: 10px;
`;

export default WriteComponent;
