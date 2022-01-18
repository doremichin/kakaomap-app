import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {DefaultInput} from "../Styled/input.styled";
import {DefaultButton} from "../Styled/button.styled";
import {useAddressSearch} from "./hooks/useAddressSearch";
import {RootState} from "../../../redux/store";
import {useDispatch, useSelector} from 'react-redux';
import RelatedAddressItem from "../Item/RelatedAddressItem";
import {setRelatedAddress} from "../../../redux/search/slice";
import {defaultSelectAddress, setSelectAddress} from "../../../redux/common/slice";
import InfiniteScroll from "../InfiniteScroll/InfiniteScroll";

function SearchList () {
    const [page , setPage] = useState(1);
    const [query , setQuery] = useState('');
    const related = useSelector((state : RootState) => state.search.related)
    const dispatch = useDispatch()

    const submitClick = () => {
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
        return () => {
            dispatch(setRelatedAddress([]));
            dispatch(setSelectAddress(defaultSelectAddress));
        }
    },[page])

    return(
        <Container>
            <Top>
                <Input onChange={inputChange}/>
                <SubmitButton onClick={submitClick}>검색</SubmitButton>
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
