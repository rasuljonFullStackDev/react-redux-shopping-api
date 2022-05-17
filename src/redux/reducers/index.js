import { combineReducers } from 'redux';
import { productReducer,selectedProductFirst } from './productReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    product:selectedProductFirst,
})
export default reducers;