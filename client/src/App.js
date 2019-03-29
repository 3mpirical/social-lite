import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import FetchUser from "./components/FetchUser";
import Default from "./components/Default";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import UserShow from "./components/UserShow";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <FetchUser>
          <Switch>
            <Route exact path="/" component={UserShow} />
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
