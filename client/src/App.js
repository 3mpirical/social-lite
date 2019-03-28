import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import FetchUser from "./components/FetchUser";
import Default from "./components/Default";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <FetchUser>
          <Switch>
            <Route exact path="/" render={() => <h1>Home Page</h1>} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route component={Default} />
          </Switch>
        </FetchUser>
      </>
    );
  }
}

export default App;
