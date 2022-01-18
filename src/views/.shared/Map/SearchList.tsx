import React, {useRef} from 'react';
import styled from 'styled-components';
import {DefaultInput} from "../Styled/input.styled";
import {DefaultButton} from "../Styled/button.styled";
import {useAddressSearch} from "./hooks/useAddressSearch";
import {RootState} from "../../../redux/store";
import { useSelector } from 'react-redux';
import RelatedAddressItem from "../Item/RelatedAddressItem";

function SearchList () {

    const related = useSelector((state : RootState) => state.search.related)

    const ref = useRef<HTMLInputElement>(null);
    const submitClick = () => {
        if(ref.current !== null){
            console.log(ref.current.value)
            useAddressSearch(ref.current.value)
        }
    }

    return(
        <Container>
            <Top>
                <Input ref={ref}/>
                <SubmitButton onClick={submitClick}>검색</SubmitButton>
            </Top>
            <Bottom>
                {
                    related.map((data) => (
                        <RelatedAddressItem data={data}/>
                    ))
                }
            </Bottom>
        </Container>
    )
};

const Container = styled.div`
  position: relative;
  width: 300px;
  background-color: #eee;
`;
const Top = styled.div`
  display: flex;
`;
const Input = styled(DefaultInput)`
  height: 30px;
  padding: 10px;
  width: 100%;
`;
const SubmitButton = styled(DefaultButton)`
  background-color: #e0e0e0;
    width: 50px;
`;
const Bottom = styled.div`
  height: 470px;
  overflow-y: scroll;
`;

export default SearchList;
