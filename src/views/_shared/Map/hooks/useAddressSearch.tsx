import { useDispatch } from 'react-redux';

import { setRelatedAddress, setInitialAddress } from '../../../../redux/search/slice';

declare global {
    interface Window {
        kakao : any
    }
}
const { kakao } = window;

const zeroResult = {
  address: '',
  address_name: '검색 결과가 없습니다.',
  address_type: 'zero-result',
  road_address: {
    address_name: '',
    building_name: '',
    main_building_no: '',
    region_1depth_name: '',
    region_2depth_name: '',
    region_3depth_name: '',
    road_name: '',
    sub_building_no: '',
    underground_yn: '',
    x: '',
    y: '',
    zone_no: '',
  },
  x: 126.978652258309,
  y: 37.566826004661,
};

export const useAddressSearch = () => {
  const dispatch = useDispatch();

  const searchAddress = (query : any, page : number) => {
    const geocoder = new kakao.maps.services.Geocoder();
    const callback = function (result : any, status : any, pagination: any) {
      if (status === 'ZERO_RESULT') {
        dispatch(setInitialAddress([zeroResult]));
      }
      if (status === kakao.maps.services.Status.OK && page === 1) {
        dispatch(setInitialAddress(result));
        const element = document.getElementById('search-list');
        if (element) {
          element.scrollTo(0, 0);
        }
        return;
      }
      if (status === kakao.maps.services.Status.OK && pagination.last >= page) {
        dispatch(setRelatedAddress(result));
      }
    };

    const options = {
      page,
      size: 20,
    };

    geocoder.addressSearch(query, callback, options);
  };

  return {
    searchAddress,
  };
};
