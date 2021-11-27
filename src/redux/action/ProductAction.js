import { ActionTypes } from "../constants/action-types";
import FakeStoreApi from "../../Services/FakeStoreApi";

//------- Set up to use Thunk ---------------
// Convert async creator to a sync creator
export const fetchProducts = () => async (dispatch) => {
  const response = await FakeStoreApi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (urlSlug) => async (dispatch) => {
  const response = await FakeStoreApi.get(`/products/${urlSlug}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const searchProducts = (urlSlug) => async (dispatch) => {
  const response = await FakeStoreApi.get(`/search?q=${urlSlug}`);
  console.log(urlSlug);
  console.log(response.data);
  dispatch({ type: ActionTypes.SEARCH_PRODUCTS, payload: response.data });
};
  
// export const fetchProducts = () => {

//   return async function (dispatch, getState) {
//     const response = await FakeStoreApi.get("/products");

//     dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.date });

//   };
// }

//------------------------------------------

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};


export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,    
  };
};

// export function addToCart(product) {
//   return {
//     type: ActionTypes.ADD_TO_CART,
//     payload: product
//   };


// }