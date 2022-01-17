import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {useAddressSearch} from "./hooks/useAddressSearch";

declare global {
    interface Window {
        kakao : any
    }
}
const {kakao} = window

function KakaoMap () {


    useEffect(() => {

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };
            // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption);

        useAddressSearch('동천로 64' , map)

    },[])

    return(
        <Container>
            <Map id={'map'}/>
        </Container>
    )
};

const Container = styled.div`

`;
const Map = styled.div`
  width: 500px;
  height: 500px;
`;

export default KakaoMap;
