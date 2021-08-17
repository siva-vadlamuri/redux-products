import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ProductApp from "./store/products/products";
const store = createStore(ProductApp);
const mystore = createStore(() => ({
  products: [
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
  ],
  payments: [
    {
      order: 100,
      orderQty: 12,
      total: 20000,
    },
  ],
}));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
