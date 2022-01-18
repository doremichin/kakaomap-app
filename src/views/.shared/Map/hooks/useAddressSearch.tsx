import {store} from "../../../../redux/store";
import {setRelatedAddress} from "../../../../redux/search/slice";

declare global {
    interface Window {
        kakao : any
    }
}
const {kakao} = window

export const useAddressSearch = (query : any) => {

    var geocoder = new kakao.maps.services.Geocoder();
    var callback = function(result : any, status : any) {
        if (status === kakao.maps.services.Status.OK) {
            store.dispatch(setRelatedAddress(result))
        }
    };
    var options = {
        page : 1,
        size : 30,
    }

    geocoder.addressSearch(query, callback, options);
}
