import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,

    }
}

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