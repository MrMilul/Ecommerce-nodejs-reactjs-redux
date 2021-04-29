export const GET_CATEGOTY_DATA = "GET_CATEGOTY_DATA"

export const get_categoty_data = data => {
    return {
        type: GET_CATEGOTY_DATA, 
        payload: data
    }
}