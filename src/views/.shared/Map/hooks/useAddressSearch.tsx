import {store} from "../../../../redux/store";
import {setRelatedAddress,setInitialAddress} from "../../../../redux/search/slice";

declare global {
    interface Window {
        kakao : any
    }
}
const {kakao} = window

export const useAddressSearch = (query : any,page : number) => {

    var geocoder = new kakao.maps.services.Geocoder();
    var callback = function(result : any, status : any, pagination: any) {
        if(status === kakao.maps.services.Status.OK && page == 1){
            store.dispatch(setInitialAddress(result))
            const element = document.getElementById('search-list');
            if(!!element){
                element.scrollTo(0,0)
            }
            return;
        }
        if (status === kakao.maps.services.Status.OK && pagination.last >= page) {
            store.dispatch(setRelatedAddress(result))
        }
    };

    var options = {
        page,
        size : 20,
    }

    geocoder.addressSearch(query, callback, options);
}
