import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./login";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path="/login" component="login">
            <Login />
          </Route>
          <Route path="/Checkout" component="Checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
