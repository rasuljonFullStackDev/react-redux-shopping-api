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
export const selectedRemoveCard = () =>{
    return {
        type:ActionTypes.ADD_CARD_REMOVE,
    }
}
export const selectedAddCardCoutPlus = (product) =>{
    return {
        type:ActionTypes.ADD_CARD_COUNT_PLUS,
        payload:product
    }
}
export const selectedAddCardCoutMinus = (product) =>{
    return {
        type:ActionTypes.ADD_CARD_COUNT_MINUS,
        payload:product
    }
}
export const selectedAddCardCoutDelete = (id) =>{
    return {
        type:ActionTypes.ADD_CARD_COUNT_DELETE,
        payload:id
    }
}