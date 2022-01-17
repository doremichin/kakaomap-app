import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from "./Nav";

function Header () {
    return(
        <Container>
            <Logo to={'/'}>
                logo
            </Logo>
            <Nav/>
        </Container>
    )
};

const Container = styled.div`
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow:  1px 1px 6px #ddd;
`;
const Logo = styled(Link)`
    display: inline-block;
`;

export default Header;
