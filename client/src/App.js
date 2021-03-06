import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./components/Pages/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AddEditItem from "./components/Pages/AddEditItem";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/Pages/Dashboard";
import Cart from "./components/shop/shopping-cart";
import Checkout from "./components/shop/checkout";
import Profile from "./components/Pages/Profile";
import ItemDetails from "./components/Pages/ItemDetails";
import 'materialize-css/dist/css/materialize.min.css';
import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/addedititem" component={AddEditItem} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/itemdetails/:ID" component={ItemDetails} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/shopping-cart" component={Cart} />
              <PrivateRoute exact path="/checkout" component={Checkout} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;