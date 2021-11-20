import { ActionTypes } from "./../constants/action-types";
import { products } from './../../component/dataBase';

const initialState = {
  products: [ ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      // You will keep what you have in state (...state) and add products payload on it
      return {...state, products: payload};
    default:
      return state;
  }
};
