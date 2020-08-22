import React from "react";
import { Provider } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Routes from "./router";
import store from "./redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const theme = createMuiTheme({
  palette: {
    background: {
      default: "white",
    },
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Routes />
      <ToastContainer autoClose={3000} />
    </Provider>
  </MuiThemeProvider>
);

export default App;
