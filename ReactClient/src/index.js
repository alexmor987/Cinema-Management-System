import React from "react";
import ReactDOM from "react-dom";
import MainComp from "./pages/Main";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import reducers  from "./redux/reducers/indexReducers";
import { Provider } from "react-redux";

const appStore = createStore(reducers);

ReactDOM.render(
  <Provider store={appStore}>
    <BrowserRouter>
      <MainComp />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
