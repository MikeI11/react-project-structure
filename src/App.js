import React, { Component } from "react";
import Weather from './Weather';


import './App.css';

export default class App extends Component {
  render() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather defaultCity="New York" />
      <footer>
        This project was coded by <a href="http://www.mykhailo.com" target="_blank" rel="noreferrer">Mykhailo Ivo</a> and is
        <a href="https://github.com/MikeI11/react-project-structure" target="_blank" rel="noreferrer"> open-sourced on Github</a>
        </footer>
        </div>
      </div>
      
  );
  }
  }


