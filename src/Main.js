import React, { Component } from "react";
import { Route } from "react-router-dom";
import Weather from "./Weather";

export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <Weather city="Los Angeles" />} />
        <Route exact path="/chicago" render={() => <Weather city="Chicago" />} /> 
        <Route exact path="/paris" render={() => <Weather city="Paris" />} />
        <Route exact path="/lviv" render={() => <Weather city="Lviv" />} />
      </div>
    );
  }
}