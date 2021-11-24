import { createStore } from "redux";

import reducers from "./reducers/index";
// import { cartReducer } from "./reducers/productReducer";

const store = createStore(
  reducers,
    {}
  ,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const cartStore = createStore(cartReducer);

export default store;