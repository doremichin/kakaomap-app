import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';

declare global {
    interface Window {
        kakao : any
    }
}
const { kakao } = window;

function Map() {
  const { x, y, address_name } = useSelector((state : RootState) => state.search.selectAddress);

  useEffect(() => {
    const coords = new kakao.maps.LatLng(y, x);
    const container = document.getElementById('map');
    const options = {
      center: coords,
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    if (address_name.length > 0) {
      // 마커 생성
      const marker = new kakao.maps.Marker({
        map,
        position: coords,
      });
      // 인포윈도우로 장소에 대한 설명을 표시합니다
      const infowindow = new kakao.maps.InfoWindow({
        content: `<div style="width:150px;text-align:center;padding:6px 0;font-size: 13px">${address_name}</div>`,
      });
      infowindow.open(map, marker);
    }
    map.setCenter(coords);
  }, [x, y]);

  return (
    <KaKaoMap id="map" />
  );
}

const KaKaoMap = styled.div`
  width: 400px;
  height: 500px;
`;

export default Map;
