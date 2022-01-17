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
    padding: 10px;
`;

export default Nav;
