import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  shoppingCartReducer,
  searchedProductsReducer,
} from "./productReducer";


const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  shoppingCart: shoppingCartReducer,
  searchedProducts: searchedProductsReducer,
});


export default reducers;