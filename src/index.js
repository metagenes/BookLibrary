import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Detail from "./Pages/Detail";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Wishlist from "./Pages/Wishlist";
import History from "./Pages/History";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
//test redux
import {Provider} from 'react-redux';
import store from './Public/Redux/store';

const EnhancedApp = () => {
  return (
    <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/detail/:index" component={Detail} />
      {/* new */}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/history" component={History} />
      {/* end here */}
    </Router>
    </Provider>
  );
};

ReactDOM.render(<EnhancedApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
