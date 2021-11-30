import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  shoppingCartReducer,
  searchedProductsReducer,
  herosReducer,
  selectedHeroReducer,
  spotsReducer,
} from "./productReducer";


const reducers = combineReducers({
  allProducts: productReducer,
  heros: herosReducer,
  hero: selectedHeroReducer,
  spots : spotsReducer,
  product: selectedProductReducer,
  shoppingCart: shoppingCartReducer,
  searchedProducts: searchedProductsReducer,
});


export default reducers;