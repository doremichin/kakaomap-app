import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from "./Nav";
import {HomeIcons} from "../../../icons";

function Header () {
    return(
        <Container>
            <Logo to={'/'}>
                <HomeIcons/>
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
  box-shadow: 1px 1px 3px #dedede;
`;
const Logo = styled(Link)`
    display: inline-block;
  width: 30px;
`;

export default Header;
