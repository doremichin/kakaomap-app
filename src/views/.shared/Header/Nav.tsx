import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

function Nav () {
    return(
        <Container>
            <NavItem to={'/write'}>배송지 입력</NavItem>
        </Container>
    )
};

const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;
const NavItem = styled(Link)`
  padding: 10px 20px;
  border: 1px solid rgba(108,108,108);
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
`;

export default Nav;
