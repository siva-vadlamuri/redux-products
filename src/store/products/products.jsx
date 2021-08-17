// this is action
import { combineReducers } from "redux";
const ADD_PRODUCT = "ADD_PRODUCT";
export function addProduct(product) {
  return {
    type: "ADD_PRODUCT",
    product,
  };
}
export function addToCart(product) {
  return {
    type: "ADD_TO_CART",
    product,
  };
}
const defaultProducts = [
  {
    name: "Macbook Pro",
    description: "Dummy content for Macbook Pro",
    price: 320000,
  },
  {
    name: "Macbook Air",
    description: "Dummy content for Macbook Air",
    price: 300000,
  },
  {
    name: "Macbook Air",
    description: "Dummy content for Macbook Air",
    price: 300000,
  },
];

const cartProducts = [];
// this is a reducers
function products(state = defaultProducts, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.product];

    default:
      return state;
  }
}

function productsInCart(state = cartProducts, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.product];

    default:
      return state;
  }
}
const productsApp = combineReducers({
  products,
  productsInCart,
});

export default productsApp;
