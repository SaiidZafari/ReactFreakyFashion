import { ActionTypes } from "./../constants/action-types";

const initialState = {
  products: [ ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      // You will keep what you have in state (...state) and add products payload on it
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReduser = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      // You will keep what you have in state (...state) and add products payload on it
      return { ...state, ...payload };
   
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      // You will keep what you have in state (...state) and add products payload on it
      return {};

    default:
      return state;
  }
};

export const shoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const product = state.find((item) => item.id === action.payload.id);

      if (product) {
        product.quantity += 1;
        const products = state.filter((item) => item.id !== product.id);
        return [...products, product];
      }
      action.payload.quantity = 1;
      return [...state, action.payload];

    case ActionTypes.REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};




