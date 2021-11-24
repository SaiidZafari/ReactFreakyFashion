import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReduser,
  shoppingCartReducer,
} from "./productReducer";


const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReduser,
    shoppingCart: shoppingCartReducer,
})


export default reducers;