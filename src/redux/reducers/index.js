import { combineReducers } from "redux";
import {
  productReducer,
  selectedProductReducer,
  shoppingCartReducer,
  searchedProductsReducer,
  herosReducer,
  selectedHeroReducer,
  spotsReducer,
  invoiceReducer,
  loginReducer,
} from "./productReducer";


const reducers = combineReducers({
  allProducts: productReducer,
  heros: herosReducer,
  hero: selectedHeroReducer,
  spots : spotsReducer,
  product: selectedProductReducer,
  shoppingCart: shoppingCartReducer,
  searchedProducts: searchedProductsReducer,
  invoice: invoiceReducer,
  login: loginReducer,
});


export default reducers;