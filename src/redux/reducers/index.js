import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  shoppingCartReducer,
  searchedProductsReducer,
  herosReducer,
  spotsReducer,
} from "./productReducer";


const reducers = combineReducers({
  allProducts: productReducer,
  heros: herosReducer,
  spots : spotsReducer,
  product: selectedProductReducer,
  shoppingCart: shoppingCartReducer,
  searchedProducts: searchedProductsReducer,
});


export default reducers;