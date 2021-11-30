import { ActionTypes } from "../constants/action-types";
import ApiData from "../../Services/ApiData";

//------- Set up to use Thunk ---------------
// Convert async creator to a sync creator
export const fetchProducts = () => async (dispatch) => {
  const response = await ApiData.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchHeros = () => async (dispatch) => {
  const response = await ApiData.get("/heros");
  dispatch({ type: ActionTypes.FETCH_HEROS, payload: response.data });
};

export const fetchSpots = () => async (dispatch) => {
  const response = await ApiData.get("/spots");
  dispatch({ type: ActionTypes.FETCH_SPOTS, payload: response.data });
};

export const fetchProduct = (urlSlug) => async (dispatch) => {
  const response = await ApiData.get(`/products/${urlSlug}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const fetchHero = (urlSlug) => async (dispatch) => {
  const response = await ApiData.get(`/heros/${urlSlug}`);
  dispatch({ type: ActionTypes.SELECTED_HERO, payload: response.data });
};

export const searchProducts = (urlSlug) => async (dispatch) => {
  const response = await ApiData.get(`/search?q=${urlSlug}`);
  console.log(urlSlug);
  console.log(response.data);
  dispatch({ type: ActionTypes.SEARCH_PRODUCTS, payload: response.data });
};
  
// export const fetchProducts = () => {

//   return async function (dispatch, getState) {
//     const response = await ApiData.get("/products");

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

export const setHeros = (products) => {
  return {
    type: ActionTypes.SET_HEROS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
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
    type: ActionTypes.REMOVE_FROM_CART,
    
  };
};


// export function addToCart(product) {
//   return {
//     type: ActionTypes.ADD_TO_CART,
//     payload: product
//   };


// }