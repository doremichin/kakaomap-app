import React from 'react';
import styled from 'styled-components';

function FormMessage({ error } : any) {
  const messageType : any = {
    required: '필수 입력 사항입니다.',
  };

  return (
    <Container>
      {messageType[error]}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 5px;
  font-size: 13px;
  color: #e53636;
`;

export default FormMessage;
