import { ActionTypes } from "./../constants/action-types";

const initialState = {
  products: [ ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const herosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_HEROS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_HEROS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const spotsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SPOTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_SPOTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};


export const selectedProductReducer = (state = {}, { type, payload }) => {
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

export const selectedHeroReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_HERO:     
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const searchedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SEARCH_PRODUCTS:
      // You will keep what you have in state (...state) and add products payload on it
      return { ...state, products: payload };
    default:
      return state;
  }
};


export const invoiceReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_INVOICE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const loginReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_ACCESS:
      return { ...state, access: payload };

    default:
      return state;
  }
};

// export const invoiceReducer = (state = [], action) => {
//   switch (action.type) {
//     case ActionTypes.ADD_TO_INVOICE:
//       const customerInfo = state.find((item) => item.id === action.payload.id);

//       if (customerInfo) {
//         customerInfo.quantity += 1;
//         const products = state.filter((item) => item.id !== customerInfo.id);
//         return [...products, customerInfo];
//       }
//       action.payload.quantity = 1;
//       return [...state, action.payload];

//     default:
//       return state;
//   }
// };


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

    case ActionTypes.REMOVE_QUANTITY:
      const productR = state.find((item) => item.id === action.payload.id);

      if (productR.quantity > 0 ) {
        productR.quantity = productR.quantity - 1;
        const products = state.filter((item) => item.id !== productR.id);
        return [...products, productR];
      }
      
      return [...state, action.payload];

    case ActionTypes.REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload.id);
    //state.pop();
    // return [...state];

    default:
      return state;
  }
};

// export const quantityReducer = (state = [], action) => {
//   switch (action.type) {
//     case ActionTypes.ADD_QUANTITY:
//       const product = state.find((item) => item.id === action.payload.id);

//       if (product) {
//         product.quantity += 1;
//         const products = state.filter((item) => item.id !== product.id);
//         return [...products, product];
//       }
//       action.payload.quantity = 1;
//       return [...state, action.payload];

//     case ActionTypes.REMOVE_QUANTITY:
//      const productR = state.find((item) => item.id === action.payload.id);

//       if (productR) {
//         productR.quantity -= 1;
//         const products = state.filter((item) => item.id !== productR.id);
//         return [...products, productR];
//       }
//       action.payload.quantity = 1;
//       return [...state, action.payload];

//     default:
//       return state;
//   }
// };





