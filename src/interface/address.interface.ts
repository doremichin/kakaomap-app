export interface IAddressData {
    id: string
    address: string
    detailedAddress: string
    shippingAddress: string
    shippingNotes: string
    timestamp : any
}

export interface IRelatedAddress {
    address : any
    address_name : string
    address_type : string
    road_address : IRoadAddress
    x : number
    y : number
}
export interface IRoadAddress {
    address_name : string
    building_name : string
    main_building_no : string
    region_1depth_name : string
    region_2depth_name : string
    region_3depth_name : string
    road_name : string
    sub_building_no : string
    underground_yn : string
    x : string
    y : string
    zone_no : string

}
