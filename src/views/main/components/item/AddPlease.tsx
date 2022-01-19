import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdAddCircle } from 'react-icons/md';

function AddPlease() {
  return (
    <Container to="/write">
      <Icon>
        <MdAddCircle />
      </Icon>
      <Desc>
        이 곳을 클릭해서 주소를 추가해주세요.
      </Desc>
    </Container>
  );
}

const Container = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Icon = styled.div`
  text-align: center;
  font-size: 50px;
  color: rgb(52,120,246);
`;
const Desc = styled.div`
  color: #333;
`;
export default AddPlease;
