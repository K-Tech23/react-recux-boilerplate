import React, { Component } from 'react';
import './App.css';
import { fire,register,login } from '../firbase'


class App extends Component {


  componentWillMount() {

  }

  render() {
    const reg = register
    const loginUser = login
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=>reg()}>register</button>
        <button onClick={()=>loginUser()}>login</button>
        
      </div>
    );
  }
}

export default App;
