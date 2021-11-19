import { ActionTypes } from "../constants/action-types";

export const SetProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,

    }
}

export const SelectedProduct = (product) => {
  return {
    type: ActionTypes.SEECTED_PRODUCT,
    payload: product,
  };
};