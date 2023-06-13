import React from 'react';
import Weather from './Weather';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      <footer>
        This project was coded by <a href="http://www.mykhailo.com" target="_blank" rel="noreferrer">Mykhailo Ivo</a> and is
        <a href="https://github.com/MikeI11/react-project-structure" target="_blank" rel="noreferrer"> open-sourced on Github</a>
        </footer>
        </div>
    </div>
  );
}

export default App;
