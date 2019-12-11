import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import Home from './home'
import store from './redux'

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Home />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

const Entry = () => (<Provider store={store}>
  <App />
</Provider>);


export default Entry;
