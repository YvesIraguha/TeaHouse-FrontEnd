import React from "react";
import { Provider } from "react-redux";
import Routes from "./router";
import store from "./redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <Provider store={store}>
    <Routes />
    <ToastContainer autoClose={3000} />
  </Provider>
);

export default App;
