import { ActionTypes } from "../contacts/action-typs"

const initialState = {
    products: [
      
    ],
    add_card:[

    ]
}
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,products:payload
            }
            case ActionTypes.ADD_CARD:
                const data = [...state.add_card,payload]
                return {
                    ...state,add_card:data
                }
        default:
            return state
    }
}
export const selectedProductFirst = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {
                ...state,...payload
            }

        default:
            return state
    }
}

export const selectedAddCards = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_CARD:
            const data = [...state.add_card,payload]
            return {
                ...state,add_card:data
            }
        default:
            return state
    }
}
