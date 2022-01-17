import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useAddressSearch} from "./hooks/useAddressSearch";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

declare global {
    interface Window {
        kakao : any
    }
}
const {kakao} = window

function KakaoMap () {

    const query = useSelector((state : RootState) => state.search.query)

    useEffect(() => {

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };
        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption);

        useAddressSearch(query , map)

    },[query])

    return(
        <Container>
            <Map id={'map'}/>
        </Container>
    )
};


const Container = styled.div`
margin-bottom: 30px;
`;
const Map = styled.div`
  width: 500px;
  height: 500px;
`;

export default KakaoMap;
