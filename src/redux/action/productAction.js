import { ActionTypes } from "../contacts/action-typs"
export const setProducts = (products) =>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}
export const selectedProducts = (product) =>{
    return {
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:product
    }
}
export const selectedAddCard = (product) =>{
    return {
        type:ActionTypes.ADD_CARD,
        payload:product
    }
}