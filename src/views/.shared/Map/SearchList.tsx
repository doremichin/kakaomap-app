import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {DefaultInput} from "../Styled/input.styled";
import {DefaultButton} from "../Styled/button.styled";
import {useAddressSearch} from "./hooks/useAddressSearch";
import {RootState} from "../../../redux/store";
import {useSelector} from 'react-redux';
import RelatedAddressItem from "../Item/RelatedAddressItem";
import InfiniteScroll from "../InfiniteScroll/InfiniteScroll";

function SearchList () {
    const [page , setPage] = useState(1);
    const [query , setQuery] = useState('');
    const related = useSelector((state : RootState) => state.search.related)

    const handleSubmit = (e : any) => {
        e.preventDefault();
        if(query !== ''){
            useAddressSearch(query,1)
        }
        setPage(1);
    }
    const inputChange = (e : any) => {
        setQuery(e.target.value)
    }
    const next = () => {
        if(related.length > 0){
            //페이지를 올려준다
            setPage(p => p+1)
        }
    }
    useEffect(() => {
        if(query !== ''){
            useAddressSearch(query, page)
        }
    },[page])


    return(
        <Container>
            <Top>
                <Form onSubmit={handleSubmit}>
                    <Input onChange={inputChange} placeholder={'주소를 입력해 주세요.'}/>
                    <SubmitButton>검색</SubmitButton>
                </Form>
            </Top>
            <Bottom id={'search-list'}>
                <InfiniteScroll next={next}>
                    {
                        related.map((data,index) => (
                            <RelatedAddressItem data={data} key={index}/>
                        ))
                    }
                </InfiniteScroll>
            </Bottom>
        </Container>
    )
};

const Container = styled.div`
  position: relative;
  width: 300px;
  background-color: #f5f5f5;
`;
const Top = styled.div`
`;
const Form = styled.form`
  display: flex;
`;
const Input = styled(DefaultInput)`
  height: 30px;
  padding: 10px;
  border-right: none;
  flex: 1;
`;
const SubmitButton = styled(DefaultButton)`
  background-color: rgb(52,120,246);
  color: #fff;
  padding: 5px 12px;
`;
const Bottom = styled.div`
  height: 470px;
  overflow-y: scroll;
`;

export default SearchList;

