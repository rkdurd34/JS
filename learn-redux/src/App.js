import React from 'react';
import logo from './logo.svg';
import './App.css';

import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <CounterContainer/>
        </div>
        <hr/>
        <div>
        <TodosContainer/>
        </div>
      
        
      </header>
    </div>
  );
}

export default App;
