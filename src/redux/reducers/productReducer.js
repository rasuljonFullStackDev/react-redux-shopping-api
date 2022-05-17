import { ActionTypes } from "../contacts/action-typs"

const initialState = {
    products: [

    ],
    add_card: [

    ]
}
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state, products: payload
            }
        case ActionTypes.ADD_CARD:
            const data = state.add_card.filter((pro) => {
                return pro.id === payload.id
            }).length === 1 ? state.add_card : [...state.add_card, payload]
            return {
                ...state, add_card: data
            };
        case ActionTypes.ADD_CARD_REMOVE:
            return {
                ...state, add_card: []
            }
        case ActionTypes.ADD_CARD_COUNT_PLUS:
            const dataPlus = state.add_card.map((pro) => {
                return pro.count ? pro.id === payload.id ? { ...pro, count: pro.count + 1 } : { ...pro } : { ...pro, count: pro.id === payload.id ? 1 : null }
            })
            return {
                ...state, add_card: dataPlus
            }
            case ActionTypes.ADD_CARD_COUNT_MINUS:
                const dataMinus = state.add_card.map((pro) => {
                    return pro.count ? pro.id === payload.id && pro.count>0 ? { ...pro, count: pro.count - 1 } : { ...pro } : { ...pro}
                })
                return {
                    ...state, add_card: dataMinus
                }
                case ActionTypes.ADD_CARD_COUNT_DELETE:
                    const dataDelete = state.add_card.filter((pro) => {
                        return pro.id !== payload
                    })
                    return {
                        ...state, add_card: dataDelete
                    }
        default:
            return state
    }
}
export const selectedProductFirst = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {
                ...state, ...payload
            }

        default:
            return state
    }
}

